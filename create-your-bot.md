# Build

From the terminal app, type the following command to create your bot project:


```bash
recime create awesome-bot 

```

By default it will create the project with the basic template, this is good when you want to do it from scratch. However, if you want to take advantage of `Natural Language Processing` from the dashboard and want to side-by-side configure the flow from UI, then you can do so by typing the following command:


```bash
recime create awesome-bot -t=nlp
```

This will walk you through a command line wizard and create the bot under `awesome-bot` folder.

Navigate to `main.js` and you should see the following:

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
            resolve(__.text("Hello there!"));
		});
    }
}

```

Now, that you have successfully created the bot project, next is to deploy and test it.
