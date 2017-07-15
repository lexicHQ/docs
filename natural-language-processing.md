# Natural Language Processing

Natural langauage proessing is the most important part of your AI bot development process. Modern AI providers support defining intents and entites and we recommend and tested the following NLPs to use with your bots.

| Provider | Description | npm |
| -- | -- | -- |-- |
| `api.ai` | https://api.ai | https://www.npmjs.com/package/apiai
| `wit.ai` | https://wit.ai | https://github.com/wit-ai/node-wit

## Configuring `api.ai` with Recime

In order to enable natural language processing using API.AI in Recime. Go to your `api.ai` console and copy the client access token:


  ![](console.png)


For more information on how to obtain access token, please checkout the API.AI documentation here:

[https://docs.api.ai/docs/key-concepts](https://docs.api.ai/docs/key-concepts)

Go to your bot folder and install the `apiai` module:

```
npm install --save apiai

```

Set the client access token (copied earlier) as a config var:


```
recime-cli config set APIAI_CLIENT_KEY=PASTE_YOUR_ACCESS_TOKEN_HERE

```

Once everything is set, you can extract entities from a given `text` input in the following way:

```
/*jshint esversion: 6 */

import APIAI from 'apiai';

export default class Bot {

  constructor(args){
       this.args = args;
       this.apiai = new APIAI(process.env.APIAI_CLIENT_KEY);
  }

  execute(){
      let text = this.args.text;

      return new Promise((resolve, reject)=>{
            let options = {
                  sessionId : this.args.sender
            };

            let request = this.apiai.textRequest(text, options);

            request.on("response", (response)=>{
                  let result = response.result;
                  // TODO://
            });

           request.on('error', (err)=>{
              reject(err)
           });

           request.end();
      });
    }
}

```

`api.ai` makes it really easy to define your entities and intents using their interactive console. As for example, we have defined the following intent for extracting city for a given user expression.


![](find_place.png)



## Configuring `wit.ai` with Recime


Go to your bot folder and install the `node-wit` module:

```
npm install --save node-wit

```

Set the client access token by typing the following command :


```
recime-cli config set WIT_CLIENT_TOKEN=PASTE_YOUR_CLIENT_TOKEN_HERE

```

Once you have defined some intents from the `wit` console, you can then use `node-wit` module to extract user input in the following way:

```
/*jshint esversion: 6 */

import wit from "node-wit";

export default class Bot {

  constructor(args){
       this.args = args;
  }

  execute(){
      let text = this.args.text;

      return new Promise((resolve, reject)=>{
            let client = new wit.Wit({
              accessToken : process.env.WIT_CLIENT_TOKEN,
            });

            client.message(text).then((data)=>{
               // TODO:
            });
      });
    }
}

``` 

For information on creating intents and defining entities, please checkout the `wit` [quick-start](https://wit.ai/docs/quickstart) documentation.