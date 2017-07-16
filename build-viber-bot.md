# Build

Create the bot by typing the following command in your terminal:

```
recime-cli create hello-world

```

This will take you through an interactive wizard and will create the bot project for you. Go to `hello-world\main.js` and you should see the following:

```
/*jshint esversion: 6 */

import Ext from "recime-bot-extension";

const __ = Ext.default;
		
export default class Bot {
    constructor(args){
        this.args = args;
    }

    execute(){
	    return new Promise((resolve)=>{
            resolve(__.text("Hello! I'am a Recime bot. How may I help you?"));
		});
    }
}

```

In order, return `keyboard` or `button`, please check out [Message Construction](message-construction.md) section to know more.
