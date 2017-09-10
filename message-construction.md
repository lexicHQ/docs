# Message Construction

In order to construct message, you can use `recime-bot-extention` npm package. The following is an example of creating a facebook button template:


```javascript
/*jshint esversion: 6 */

import Ext from "recime-bot-extension";

export default class Bot {

    constructor(args){
        this.args = args;
    }

    execute(){
        // facebook quick reply
        return new Promise((resolve)=>{
            resolve(Ext.default.buttonTemplate("Is it hot?, [
				Ext.default.postBackButton("Yes", "pressed-yes-event"),
				Ext.default.postBackButton("No", "pressed-no-event"))
            ]);   
        }); 
    }

}
```

Since, viber has similar `postback` support. It will work without a single line of code change in viber.


However, it also saves you time in making more platform specific look and feel. Here is an example of styling a `viber` button:

```javascript
/*jshint esversion: 6 */

import Ext, {Viber} from "recime-bot-extension";

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
          const __ = Ext.default;

			return resolve(
				__.buttonTemplate(hello, [
					__.postbackButton(FAQ", "faq", style),
					__.postbackButton("About", "about-product", style),
			]));
		});
	}
}
```


The extension also provides some basic operations that are avaiable cross-channel:

```javascript
Ext.default.text("hello world");
```

For information on how to use it, please fork the source from github:

[https://github.com/Recime/recime-bot-extension](https://github.com/Recime/recime-bot-extension)

