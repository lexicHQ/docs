#Platform Specific Bot

Recime follows the convention of marking platform-specific files with the platform name. This tells the framework that these files will be only available for the bot targeting the specified platform. With that said, you will need the main.facebook.ts  file to specify the facebook specific metadata for your bot response.

Let’s take the example from flickr-sample-bot which you can clone from here:

https://github.com/Recime/flickr-sample-bot


While we share common logic, inside `main.facebook.ts`, we have the following code:


```
import util = require('util');
import request = require('request');

import {ApiAi} from "./apiai";
import {FlickrRequest} from './flickr-request';

export class Bot {
  private args: any;

  constructor(args:Object){
    this.args = args;
  }

  get extract(){
    return "message.text";
  }

  execute(cb:any){
    new FlickrRequest().send(new ApiAi().extract(this.args), (result)=>{
        let message = {
            attachment: {
              type: "image",
              payload: {
                  url: result.url
              }
            }
        };
        cb(message);
    }, (err)=>{
        cb({
          text : err
        })
    });
  }
  ```

  Similarly, inside `main.telegram.ts`, we have the following:


```
import request = require('request');

import {ApiAi} from "./apiai";
import {FlickrRequest} from './flickr-request';

export class Bot {
  private args: any;

  constructor(args:Object){
    this.args = args;
  }

  get extract(){
    return "message.text";
  }

  execute(cb:any){
    new FlickrRequest().send(new ApiAi().extract(this.args), (result)=>{
        cb({
            "type": "photo",
            "payload" : {
              "photo" : result.url
            }
        });
    }, (err)=>{
        cb({
          text : err
        })
    });
  }
}

```


Note that only the UI metadata part is different which is specific to underlying platform.

By default, the convention is to fallback to `main.ts`. You can use platform specifier to separate the platform and UI specific logic for a **cleaner** code.
