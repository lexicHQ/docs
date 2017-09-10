# Built-in NLP

Facebook now support built-in nlp for your bots powered by `wit.ai`. If you have an existing `wit.ai` project, you can easily take advantage of it only by setting the `WIT_TOKEN` in your project:

In order to configure and enable the Built-in NLP feature for your Facebook bot, go to your `wit.ai` app settings page and copy the server access token and set it as a config var (WIT_TOKEN):

```
recime-cli config set WIT_TOKEN=PASTE_YOUR_TOKEN_HERE
```

The entites are sent to your bot through an additonal `nlp` property which can you access from your bot in the following way:

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
                    resolve(__.text("Hello!"));
                    break;
                default:{
                    const nlp = this.args.rawBody.message.nlp;
                    const greeting = this.firstEntity(nlp, 'greetings');
                    if (greeting && greeting.confidence > 0.8) {
                       return __.profile(this.args).then((p)=>{
                            resolve(__.text(`Hey ${p.first_name}!`));
                       });
                    } else { 
                         resolve(__.text("Default response"));
                    }
                }
               
            }
       });
    }
    firstEntity(nlp, name) {
        return nlp && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
    }
}

```