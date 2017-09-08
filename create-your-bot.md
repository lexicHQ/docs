# Build

From the terminal app, type in the following command to create your bot project:


```
recime create [FolderName] 

```

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
