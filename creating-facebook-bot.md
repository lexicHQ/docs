# Build


Once you have created a bot by following the steps [here](create-your-bot.md). Go to your `main.js` file and paste the following code:


```
/*jshint esversion: 6 */

import Ext from "recime-bot-extension";

const __ = Ext.default;

export default class Bot {

   constructor(args){
     this.args = args;
   }

   execute(){
     let args = this.args;
    
     return new Promise ((resolve)=>{
       if (args.text){
         if (args.text.indexOf("name") >= 0){
           resolve(__.text("Hi! I am Alan Turing Bot."));
         }
         else{
           resolve(__.text(`Hello ${args.text}`));
         }
       }
     });
   }
  }

```