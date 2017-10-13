# Message Construction

In order to construct message, you can use `recime-bot-extention` npm package. The following is an example of creating a facebook button template:


```javascript
import Ext from 'recime-bot-extension';
import responder from "recime-message-responder";

const __ = Ext.default;

exports.handler = (args, done)=>{
     done(Ext.default.buttonTemplate("Is it hot?", [
		Ext.default.postBackButton("Yes", "pressed-yes-event"),
		Ext.default.postBackButton("No", "pressed-no-event"))
     ]);   
};
```

Since, viber has similar `postback` support. It will work without a single line of code change in viber.


However, it also saves you time in making more platform specific look and feel. Here is an example of styling a `viber` button:

```javascript
import Ext, {Viber} from "recime-bot-extension";
const __ = Ext.default;

const style = {
	bgColor : "#333333",
	textSize: Viber.TextSize.large,
	font : {
		bold : true,
		color: "#33cc66"
	}	
};

exports.handler = (args, done)=>{
    return done(
		__.buttonTemplate(hello, [
		__.postbackButton("FAQ", "faq", style),
		__.postbackButton("About", "about-product", style),
	]));
};
```

The extension provides common operations that are avaiable across channels:

```javascript
Ext.default.text("hello world");
```

Here `default` tells the extension the underlying channel the bot is running.For information on how to use it, please fork the [source here](https://github.com/Recime/recime-bot-extension).
