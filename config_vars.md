# Configuration and Config Vars

Bot Config variables are local to developers. Developers can use config variables to have separate production keys to that of development or an open source bot may have hundreds and thousands of deployments where different environment is maintained by each developer.

The traditional approach for handling such config vars is to put them under source - in a properties file of some sort. This is an error-prone process, and is especially complicated for open source apps which often have to maintain separate (and private) branches with app-specific configurations.

A better solution is to use environment variables, and keep the keys out of the code. On a traditional host or working locally you can set environment vars in your bashrc file. On Recime, you use config vars.

Use Recime CLI’s  `config:set` to set your config variable for the bot:

```
bash-3.2$ recime-cli config:set PIPEDRIVE_USERNAME=johnsmith

INFO: Configuration Saved Successfully.

For any questions and feedback, please reach us at hello@recime.io.

bash-3.2$

```
Once set you can access config vars from within your bot in the following manner:

```
const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});

```

Now, upon deploying to Recime, the bot will use the keys set in the config.
