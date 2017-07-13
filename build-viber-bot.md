# Build

Create the bot by typing the following command in your terminal:

```
recime-cli create hello-world

```

This will take you through an interactive wizard and will create the bot project for you. Go to `hello-world\main.js` and you should see the following:

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

