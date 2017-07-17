# Live Debugging

In order to start the debug server while you are in your project folder, type the following command:

```
recime-cli run -w 

```

This will automatically setup the tunnel using `ngrok` and configure `facebook` wehbooks for debugging. Once the debug server is up and running you should see the debug outputs in the console.
 
````

> recime-bot-package@1.0.2 start /Users/mehfuz/recime-cli/recime-bot-template
> node app.js

INFO: Debugger is started at:
http://localhost:4000/ff4d631e93310fd948bca1a337eee628/v1
ff4d631e93310fd948bca1a337eee628
DEBUG: {"attachment":{"type":"image","payload":{"url":"http://farm5.staticflickr.com/4049/4614684919_54b1788664.jpg"}}}
POST /ff4d631e93310fd948bca1a337eee628/v1 200 3089ms - 112b


`````

Once you are finished, please deploy the bot to re-configure the hooks and changes to take effect.