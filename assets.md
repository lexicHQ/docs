# Assets

In order to serve assets from your local folder, add an `assets` folder in your project root.

![](assets.png)

To use it in your response, use it with the `url` extension in the following way:

```javascript
/*jshint esversion: 6 */
import Ext from "recime-bot-extension";
const __ = Ext.default;
        
export default class Bot {
    constructor(args){
        this.args = args;
    }
execute(){
        return new Promise((resolve)=>{
            switch (this.args.event.name){
                case "start":
                    resolve([
                        __.text("Hey! There!."),
                        __.image(url("assets/blog-logo.png"))
                ]);
                break;
                default:{
                    resolve(__.text("Sorry, I didn't understand."));
                }
            }
       });
    }
}
```

