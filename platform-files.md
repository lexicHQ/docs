#Platform Flag

Recime follows the convention of creating target modules with the platform flag. This tells the framework that the module will only be available for the bot targeting the specific platform.

Let’s take the example from flickr-sample-bot which you can clone from here:

https://github.com/Recime/flickr-sample-bot


While we share common logic, inside `main.facebook.js`, we have the following code:


```
'use strict'

import util from 'util';
import request from 'request';

import ApiAi from "./apiai";
import FlickrRequest from './flickr-request';

export default class Bot {
	constructor(args){
		this.args = args;
	}

	execute(){
		let text = this.args.text;
		return new Promise((resolve, reject)=>{
			new ApiAi(this.args.sender).extract(text).then((text)=>{
				new FlickrRequest().send(text, (result)=>{
						let message = {
							attachment: {
								type: "image",
								payload: {
									url: result.url
								}
							}
						};
						resolve(message);
					}, (err)=>{
							reject({
								text : err
							});
					});
				}, (err)=>{
				resolve({
					text : err
				});
			});
		});
	}
}

```

Similarly, inside `main.telegram.js`, we have the following:


```
'use strict'

import util from 'util';
import request from 'request';

import ApiAi from "./apiai";
import FlickrRequest from './flickr-request';

export default class Bot {
	constructor(args){
		this.args = args;
	}

	execute(){
    let text = this.args.text;
    return new Promise((resolve, reject)=>{
        if (text.match(/^\/start+/i)){
          resolve({
            text : "Hello! I am a \"flickr bot\". You can ask me questions like \"Where is San Francisco?\" or \"Who is Steve Jobs?\" and I can show you photo of that location or person."
          });
        } else {
          new ApiAi(this.args.sender).extract(text).then((text)=>{
            new FlickrRequest().send(text, (result)=>{
                let message = {
                    type: "photo",
                    payload: {
                        photo: result.url
                    }
                };
                resolve(message);
            }, (err)=>{
                reject({
                  text : err
                })
            });
          }, (err)=>{
            resolve({
              text : err
            })
          });
        }
    });
	}
}

```


Note that only the UI metadata part is different which is specific to underlying platform.

By default, the convention is to fallback to `main.js`. You can use platform modifier to separate the platform and UI specific logic for a **cleaner** code.
