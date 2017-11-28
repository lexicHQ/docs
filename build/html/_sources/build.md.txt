# Build

From the terminal app, type the following command to create your bot project:


```bash
rbp create awesome-bot 

```

This will walk you through a command line wizard and create the bot under `awesome-bot` folder.

Navigate to `main.js` and you should see the following:

```javascript
import Ext from 'recime-bot-extension';
import responder from "recime-message-responder";

const __ = Ext.default;

exports.handler = (args, done)=>{
    done(responder.respond(args));
};
```

Next, go to [console.recime.io](https://console.recime.io) and start building your bot. By default, it creates the basic intents/blocks to get you started and you can live debug the whole process as you run it from console.

![](build.png)