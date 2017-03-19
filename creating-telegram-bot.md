# Createing your Bot


Once you have created a bot by following the steps [here](create-your-bot.html). Go to your `main.ts` file and copy paste the following code:

```

/// <reference path="node.d.ts" />

import util = require('util')

export class Bot {

  private args: any;

  constructor(args:Object){
    this.args = args;
  }

  execute(cb:any){

  	let text = this.args.message.text;

  	if (text.match(/^\/start+/i)){
  		cb({
  			"text" : "Hi! I am a Recime Bot!"
  		});
  	} else {
    	cb({
    		"text" : this.args.message.text
    	});
	}
  }
}

```

Configure the bot for Telegram by typing the following command:


```
bash-3.2$ recime-cli platform configure telegram

```


This is will prompt you for the `Telegram access token`, paste the access token that have copied from [Setup your bot](setup-telegram-bot.md) step:



```
bash-3.2$ recime-cli platform config telegram
Telegram access key:
PASTE_YOUR_KEY_FROM_CLIPBOARD

INFO: Platform Configured Successfully. 
Please do "recime-cli deploy" for changes to take effect.

For any questions and feedback, please reach us at hello@recime.io.

bash-3.2$

```

Deploy the bot by typing the following command:


```
bash-3.2$ recime-cli deploy

```


