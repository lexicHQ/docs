# Build

Once everything is setup, using the command line, type the following command to get started and it will automatically bootstrap the default template for you:

```
recime-cli create YOUR_PROJECT_NAME --lang=typescript
```

By default the CLI will create the bot using `es6 (the latest update to the Javascript language)`. However, you can choose ether `es6` or `typescript` as language options. The examples in this doc are done using **es6**.

This command will create the bot in the folder you’ve specified.  It can be “.” \(Current directory\) or name of the folder \(e.g. HelloWorld\) or absolute path “~/Source/Recime/HelloWorld”  
Note that if you leave the folder location blank, the command will create the folder in the folder you are currently in when typing :**recime-cli create**

The cli will then ask you to give your bot project a title, short description, and MIT license.

Navigate to the main.ts file in the newly created bot folder. This is the entry-point for your bot. The simplest form of `main.ts` looks like:

![](build-1a.png)

Our bot’s input JSON looks like this:

```
{
    "text" : "Alan Turing"
}
```

For the above POST request, it will return “Hello Alan Turing”.

Replace the `main.js` with the following code snippet:

```
  export class Bot {

   constructor(args){
     this.args = args;
   }

   execute(){
     let args = this.args;
     let text = args.text;

     return new Promise((resolve, reject)=>{
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
       } else {
         reject("Missing \"text\" property.");
       }
     });
   }
  }
```

Save all of your files and celebrate the creation of your first bot! Deploy it to the recime cloud.
