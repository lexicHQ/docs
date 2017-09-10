#Target Platform 


While there are some common messages like `text` that are supported across platform. There are times when you want the bot work differently in each platform to give that more native look and feel.

You can do this by adding platform extension to your `main.js`. For example, I have a bot that supports `viber`, `telegram` and `facebook`. for facebook it is more natural and intuitive to have quick replies. 

Instead of having `if-else`, it is possible to separate the UI logic by creating a `main.facebook.js` file that will have the logic for quick reply.


Below is an example of how the code might look like but ideally it can hashed out further by separeting the model code from `main.js` completely. 

```javascript
import Ext from 'recime-bot-extension';

const __ = Ext.default;

export default class Bot {

    constructor(args){
        this.args = args;
    }

    execute(){
        // facebook quick reply it will resolve as **args.event.name**
        return new Promise((resolve)=>{
            resolve(__.quickReplyButtonTemplate("How may I help?,[
                __.quickReplyButton("Get Ticket", "ticket-get"); 
                __.quickReplyButton("Refund", "ticket-refund"); 
			]));
        }); 
    }

}

```

For other platform, default it back to text. Therefore, in `main.js` it may look something like:


```javascript
import Ext from 'recime-bot-extension';

const __ = Ext.default;

export default class Bot {

    constructor(args){
        this.args = args;
    }

    execute(){
        // facebook quick reply
        return new Promise((resolve)=>{
            resolve(__.text("Please tell me what you want to know?"));
        }); 
    }

}

```


By default, the convention is to fallback to `main.js`. You can use platform extension to separate the platform and UI specific logic for a much **cleaner** code.
