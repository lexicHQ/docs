# Build


Once you have created a bot by following the steps [here](build.md). Go to your `main.js` file and paste the following code:


```javascript
import Ext from 'recime-bot-extension';

const __ = Ext.default;

exports.handler = (args, done)=>{
  if (args.text){
         if (args.text.indexOf("name") >= 0){
          done(__.text("Hi! I am Alan Turing Bot.")));
         }
         else{
          done(__.text(`Hello ${args.text}`));
         }
  }
};
```