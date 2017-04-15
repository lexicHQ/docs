# Recommended by Recime

It is possible to use your own `nlu` module. It has to be an `npm` module to make it work with recime.

Here are the recommended SDKs that you can use today with Recime:


[Wit.ai](https://wit.ai) =>
[https://github.com/wit-ai/node-wit](https://github.com/wit-ai/node-wit)

[Watson Developer Cloud](https://www.ibm.com/watson/developercloud/) =>
[https://www.npmjs.com/package/watson-developer-cloud](https://www.npmjs.com/package/watson-developer-cloud)


Configuring each one of them is fairly simple. Here in `wit.ai`, once you have installed the SDK to your bot project and obtained the key, type the following in your terminal:

```
recime-cli  config set WIT_ACCESS_TOKEN=PASTE_YOUR_ACCESS_TOKEN_HERE

```

From  `wit.ai` documentation:

```
const {Wit, log} = require('node-wit');

const client = new Wit({
  accessToken: process.env.WIT_ACCESS_TOKEN,
  actions: {
    send(request, response) {
      return new Promise(function(resolve, reject) {
        console.log(JSON.stringify(response));
        return resolve();
      });
    },
    myAction({sessionId, context, text, entities}) {
      console.log(`Session ${sessionId} received ${text}`);
      console.log(`The current context is ${JSON.stringify(context)}`);
      console.log(`Wit extracted ${JSON.stringify(entities)}`);
      return Promise.resolve(context);
    }
  },
  logger: new log.Logger(log.DEBUG) // optional
});

```

Most `AI` providers with the similar approach can be configured with Recime as well. If you want us to add yours in the list then please let us know and we will be happy to include it.
