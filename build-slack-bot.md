# Build

Use the Command Line Interface to craete a bot project in the following way:

```shell
rbp create slack-bot
```

Go to your `main.js` file and you will find the following:

```javascript
import Ext from 'recime-bot-extension';
import responder from "recime-message-responder";

const __ = Ext.default;

exports.handler = (args, done)=>{
    done(responder.respond(args));
};
```

This will also create the bot in your dashboard. Use the coversation builder or have addtional logic to handle slack commands `args.command` or totally implement custom flow and then send out responses using `recime-bot-extension` npm module.

