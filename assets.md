# Assets

In order to serve assets from your local folder, add an `assets` folder in your project root.

![](assets.png)

To use it in your response, use it with the `url` extension in the following way:

```javascript
import Ext from 'recime-bot-extension';
import responder from "recime-message-responder";

const __ = Ext.default;

exports.handler = (args, done)=>{
    switch (this.args.event.name){
        case "start":
            done([
                __.text("Hey! There!."),
                __.image(url("assets/blog-logo.png"))
        ]);
        break;
        default:{
            done(__.text("Sorry, I didn't understand."));
        }
    }
};
```

