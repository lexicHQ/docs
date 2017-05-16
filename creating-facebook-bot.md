# Creating your bot


Once you have created a bot by following the steps [here](create-your-bot.md). Go to your `main.ts` file and paste the following code:


```
export class Bot {

   private args: any;

   constructor(args:Object){
     this.args = args;
   }

   execute(){
     let args = this.args;
     let text: string = args.text;

     return new Promise ((resolve)=>{
       if (text){
         if (text.indexOf("name") >= 0){
           resolve({
               "text": "Hi! I am Alan Turing Bot."
           });
         }
         else{
           resolve({
             text : `Hello ${text}`
           });
         }
       }
     });
   }
  }

```

Configure your bot by typing the following command:


```
recime-cli platform config facebook

```
Now copy/paste your `Page Access Token` you have have copied earlier.

```

bash-3.2$ recime-cli platform config facebook
Page access token:
PASTE_YOUR_PAGE_ACCESS_TOKEN_HERE

INFO: Platform Configured Successfully.
Please do "recime-cli deploy" for changes to take effect.

For any questions and feedback, please reach us at hello@recime.io.

bash-3.2$

```

Deploy the bot by typing the following command:

```
recime-cli deploy

```
