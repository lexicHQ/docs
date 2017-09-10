## Configuring `api.ai` with Recime

It is also possible to use your own `nlp` provider and use it with the bot. Below is an example of configuring `api.ai` with recime;


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

```javascript
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
