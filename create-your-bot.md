# Build

From the terminal app, type in the following command to scaffold your bot project:


```
recime-cli create [FolderName] 

```

By default the Command Line Interface will create the bot using `es6 (the latest update to the Javascript language)` template. However, you can choose ether `es6` or `typescript` as language options `(--lang=typescript)`.

This will walk you through a command line wizard and create the bot under the given folder name.

Navigate to `main.js` and you should see the following:

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

Now, that you have successfully created the bot project, next is to deploy and test it.
