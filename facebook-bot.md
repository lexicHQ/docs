# Facebook Bot

This tutorial walks you through the process of running your Recime bot on Facebook Messenger Platform.


```
/*jshint esversion: 6 */



export default class Bot {
	constructor(args){
		this.args = args;
	}

	execute(){
		return new Promise((resolve)=>{
			resolve({
				"text" : "Hello! I'am a Recime bot. How may I help you?"
			});
		});
	}
}

```
