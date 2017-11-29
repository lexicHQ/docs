'use strict';

const S3Bucket = 'docs.recime.io';
const CloudfrontDistributionId = 'E2NNFA02ST8SHS';

//const S3Bucket = 'stage-console.recime.io';
//const CloudfrontDistributionId = 'EYLJ8B8R99MTE';

const ShortCacheDuration = 60 * 60; // 1 hour
const LongCacheDuration = 60 * 60 * 24 * 365; // 365 Days

const path = require('path');
const spawn = require('child_process').spawn;

const aws = require('aws-sdk');
const fs = require('fs-extra');
const mime = require('mime-types');

aws.config.update({
  region: 'us-west-2',
  maxRetries: 10,
  retryDelayOptions: {
    base: 300
  }
});

const distDirectory = path.join(__dirname, '_build', 'html');

const s3 = new aws.S3();
const cloudfront = new aws.CloudFront();

function build() {
  return new Promise((resolve, reject) => {
    const ps = spawn('make', ['html'], {
      cwd: __dirname,
      stdio: 'ignore'
    });
    ps.on(
      'close',
      code => (code ? reject(new Error(`Error building documentation!`)) : resolve())
    );
  });
}

function getFiles() {
  function load(location) {
    return new Promise((resolve, reject) => {
      fs.readdir(location, (error, entries) => {
        if (error) {
          return reject(error);
        }

        const directories = [];
        const files = [];

        entries.forEach(entry => {
          const fullLocation = path.join(location, entry);
          const stat = fs.statSync(fullLocation);

          if (stat.isFile()) {
            files.push(fullLocation);
          } else if (stat.isDirectory()) {
            directories.push(fullLocation);
          }
        });

        const tasks = directories.map(load);

        return Promise.all(tasks)
          .then(results => {
            results.forEach(result => files.push(...result));
            return resolve(files);
          })
          .catch(reject);
      });
    });
  }

  return load(distDirectory);
}

function upload(files) {
  function put(file) {
    return new Promise((resolve, reject) => {
      const fileName = file.substring(distDirectory.length + 1);
      const mimeType = mime.lookup(fileName);

      const cacheControl =
        path.basename(fileName) === 'index.html'
          ? `private,max-age=${ShortCacheDuration}`
          : `public,max-age=${LongCacheDuration}`;

      const params = {
        Bucket: S3Bucket,
        CacheControl: cacheControl,
        Key: fileName,
        Body: fs.createReadStream(file)
      };

      if (mimeType) {
        params.ContentType = mimeType;
      }

      s3.upload(params, error => (error ? reject(error) : resolve()));
    });
  }

  const tasks = files.map(put);

  return Promise.all(tasks);
}

function invalidate() {
  function poll(id, resolve, reject) {
    setTimeout(() => {
      const params = {
        DistributionId: CloudfrontDistributionId,
        Id: id
      };

      cloudfront.getInvalidation(params, (error, result) => {
        if (error) {
          return reject(error);
        }

        if (result.Invalidation.Status === 'Completed') {
          return resolve();
        }

        poll(id, resolve, reject);
      });
    }, 3000);
  }

  return new Promise((resolve, reject) => {
    const params = {
      DistributionId: CloudfrontDistributionId,
      InvalidationBatch: {
        CallerReference: Date.now().toString(),
        Paths: {
          Quantity: 1,
          Items: ['/index.html']
        }
      }
    };

    cloudfront.createInvalidation(params, (error, result) => {
      if (error) {
        return reject(error);
      }

      return poll(result.Invalidation.Id, resolve, reject);
    });
  });
}

function remove(location) {
  return new Promise((resolve, reject) => {
    fs.remove(location, error => {
      return error ? reject(error) : resolve();
    });
  });
}

function deploy() {
  return build()
    .then(() => getFiles())
    .then(files => upload(files))
    .then(() => remove(distDirectory))
    .then(() => invalidate());
}

module.exports = deploy;
