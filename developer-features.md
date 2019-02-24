
# Writing Custom Script

Script Block allows you to quickly write custom logic inside a conversation flow. Click on `script` button in the toolbar as shown below to insert a script block:


![](./script-block.png)


The entire conversation context is available in the script block. This will let you write custom logic based on user input, entities and variables. The example below shows how to pull data from a weather API and then set it as a context variable for use in the builder:

```javascript
//script block
//https://docs.recime.io/script-block.html
import request from 'request';

// get a free API key from openweathermap.org
const appId = 'PASTE_YOUR_API_KEY';

exports.handler = (context, done) => {
    request({
        url : 'https://api.openweathermap.org/data/2.5/weather',
        qs : {
            lat : context.nlp.entities.location[0].lat,
            lon : context.nlp.entities.location[0].lng,
            appid: appId,
            units: 'imperial'
        },
        json : true
    }, (err, reponse, body)=>{
        if (err){
            console.log(err);
        }
        //debug
        console.log(body);
     
        // save 
        context.vars.set("weatherData", body);
        
        done();
    });
};

```

`context` parameter have the following properties:

| Property Name | Description |
| -- | -- |
| args | [User input]
| nlp |  Contains entities and intents for an expression.
| vars | Set or get vars to use in the current context.


The `args` object contains the following properties:

| Property Name | Description | Type |
| -- | -- | -- |
| sender | Unique sender ID | String |
| text | Input text.(e.g. Where is San Francisco?) | String |
| event | Event to trigger an intent. Either text or event is required. | Object |


`event` contains the name of the event that is triggered for a user action:

| Property Name | Description | Type |
| -- | -- | -- |
| name | Name of the event (e.g. start) that corresponds to an intent name | String |


You can use variables inside the builder in the following way using the double braces syntax:

![](./context-vars.png)


You can also output in script block using the [extension module](https://github.com/Recime/recime-bot-extension) in the following way:


```javascript
import Ext from "recime-bot-extension";
const __ = Ext.default;

exports.handler = (context, done) => {
    done(__.text("Hello world"));
};
```

Script block can be useful in the following scnearios:

* Retrieving data from your existing API that you want inject in your conversation context.
* Construct dynamic response based on user input and entities.


The following modules are allowed inside **Script Block**:

* [node core](https://nodejs.org/api/modules.html#modules_core_modules)
* [request](https://github.com/request/request)
* [moment.js](https://momentjs.com/)
* [Bot Extension](https://github.com/Recime/recime-bot-extension)

