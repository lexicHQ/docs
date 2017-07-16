# Message Construction

In order to construct message, you can use `recime-bot-extention` npm package. The following is an example of creating a facebook quick reply response:


```

/*jshint esversion: 6 */

import Ext from "recime-bot-extension";

export default class Bot {
	constructor(args){
		this.args = args;
	}

	execute(){
        const facebook = Ext.facebook;

		return new Promise((resolve)=>{
            resolve(facebook.quickReplyButtonTemplate("Please Choose:", [
                facebook.quickReplyButton("Menu"),		
                facebook.quickReplyButton("FAQ"),
                facebook.quickReplyButton("Help")
            ]));
		});
	}
}

```

Simlarly, to style a `keyboard` template in `viber`, you can do it easily with the extension:

```

/*jshint esversion: 6 */

import {Ext, Viber} from "recime-bot-extension";

const style = {
	bgColor : "#333333",
	textSize: Viber.TextSize.large,
	font : {
		bold : true,
		color: "#33cc66"
	}	
};

export default class Bot {
	constructor(args){
		this.args = args;
	}

	execute(){
		return new Promise((resolve)=>{
          const viber = Ext.viber;

          if (this.args.event && this.args.event.name === "conversation_started"){
                    const name = sender.name.split(/[\s]+/ig)[0];
                    const hello = `Hello ${name}! Welcome to my awesome bot.`;
                    return resolve(
                        viber.keyboardTemplate(hello, [
					        viber.postbackButton(FAQ", "faq", style),
                            viber.postbackButton("About", "about-product", style),
                	]));
                }
		});
	}
}

```


The extension also provides some basic operations that are avaiable across channels:

```
Ext.default.text("hello world");
```

For information on how to use it, refer to the source `recime-bot-extension` at github:

[https://github.com/Recime/recime-bot-extension](https://github.com/Recime/recime-bot-extension)

