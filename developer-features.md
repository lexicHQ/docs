
# Writing Custom Script

Use script block to push data to CRM and or create dynamic content. 

```javascript
import Ext from 'bot-extension';
const __ = Ext.default;

exports.handler = (context, done) => {
    done(__.text("Hello world"));
};
```

The above is a script block at a bare minimum. Here `handler` is the function that runtime calls to start the execution of a custom code block. The runtime passes the bot context and any input from the user to this handler. 

The parameter `context` has the following properties:

| Property Name | Description |
| -- | -- |
| args | User input and events.
| nlp |  Provides your natural language understanding like intent, confidence, and entities for an expression. 
| vars | Set or get context variables.


User input passed via the `args` property:

| Property Name | Description | Type |
| -- | -- | -- |
| sender | Unique sender ID | String |
| text | Input text.(e.g. Where is San Francisco?) | String |
| event | Event to trigger an intent. Either text or event is required. | Object |


An `event` could be triggered by an action (ex. button click):

| Property Name | Description | Type |
| -- | -- | -- |
| name | Name of the event (e.g., start) that corresponds to an intent name | String |


You can use variables inside the builder in the following way using the double braces syntax which has been set using `context.vars.set("name", "John")` from a script:

![](./context-vars.png)


You can use any [nodejs core modules](https://nodejs.org/api/modules.html#modules_core_modules) in the script block, in addition to the following:

## Bot Extension
Use [bot extension](https://github.com/SmartloopAI/bot-extension) module to print out text or rich media as supported by the underlying platform.

An example showing how to display text dynamically using the extension module:

```javascript
import Ext from 'bot-extension';
const __ = Ext.default;

exports.handler = (context, done) => {
    done(__.text("hello world"));
};
```

## Request
[Request](https://github.com/request/request) is designed to be the simplest way possible to make HTTP calls:

The following example makes a test request to 'httpbin' endpoint.

```javascript
import request from 'request';

exports.handler = (context, done) => {
    
    request({
        url : 'http://requestbin.fullcontact.com/yyo7f7yy',
        method :'POST',
        json: true,
        body: {
            "p": 1
        }
    }, (err, response, body)=>{
        console.log("completed");
        done();     
    })
};

```


## Moment

Use [moment](https://momentjs.com/) to parse, validate and manipulate and display dates and times. The following example of generating bot timestamp using `moment`:

```javascript
import moment from 'moment';

exports.handler = (context, done) => {
    const timestamp = moment().unix().toString();
    
    console.log('Timestamp ' + timestamp);
    
    done();
};
```
