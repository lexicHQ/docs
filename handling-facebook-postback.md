#Handling Facebook Postback


`Facebook Messenger Platform` supports webhook via `Postback` button


![](facebook-webhook.png)

Facebook postback message is passed as `args.event.name`. For the figure above, if someone presses **Bookmark Item**, you can handle it in the following way:

```javascript
import Ext from 'recime-bot-extension';

const __ = Ext.default;

exports.handler = (args, done)=>{
    switch(args.event.name){
      case "bookmark":{
        done(__.text("TODO://"));
        break;
      }
      default :{
        done(__.text("TODO://"));
      }
    }
};
```

You can use the `recime-bot-extension` npm module to easily construct postback buttons and generic items. Please check it out [here](resources.md).