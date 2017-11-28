# Test your Bot

Send a message to the number, you have just setup and everything should be working as expected if you setup the webhook correctly as mentioned in the previous section. `text` property is handled like any other platform therefore if you are sending the following `json`, it should work without any code change as for any other supported platform.

```
  {
    text : "Hello world"
  }

```

Using the extension module, you can do it like:

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
            resolve(__.text("Hello world"));
		});
    }
}

```
