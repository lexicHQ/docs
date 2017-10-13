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
import Ext from 'recime-bot-extension';
import APIAI from 'apiai';

const __ = Ext.default;
const apiai = new APIAI(process.env.APIAI_CLIENT_KEY);

exports.handler = (args, done)=>{
     nlp.textRequest(this.args.text).then((result)=>{
        if (result.entities.search_query 
        && result.entities.search_query[0].confidence > 0.8){
            // TODO:// meaningful code.
            done(__.text(`Hey~ ${result.entities.search_query[0].value}`));
        }
        else {
            done(__.text("Sorry I didnt understand."));
        }
    }, (err)=>{
        done(__.text(err.message));
    });
};
```

`api.ai` makes it really easy to define your entities and intents using their interactive console. As for example, we have defined the following intent for extracting city for a given user expression.


![](find_place.png)
