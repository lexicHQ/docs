# Build


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