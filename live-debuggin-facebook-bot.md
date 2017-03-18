# Live Debugging

Its often hard to push changes to facebook and debug your bot. Recime CLI (1.1.7+)provides built-in support for facebook debugging.

In order to start your debug server while you are in your project folder, type the following command:

```
recime-cli run

```

This will start the server in the fowllowing url:

http://localhost:4000/botId/v1


## ngrok

`ngrok` enables you to expose your local endpoint behind firewall to the internet.


In a new command prompt, type the following command:

```
npm install -g ngrok

```

Once installed, type the following:


```
ngrok http 4000

```

You will see something like this:

![](/ngrok.png)


What this means is that any requests to the Forwarding URLs will hit your locally running server. Visit the Forwarding URL


## Facebook

While you are in your facebook `webhook setup` dialog, enter the Forwarding URL you got from ngrok (the https version) with an endpoint of `/botid/v1`.So, for instance, I used:  `https://5fe0bf6f.ngrok.io/ff4d631e93310fd948bca1a337eee628/v1`


Now, you will start to see facebook responses in your debug console:


````

> recime-bot-package@1.0.2 start /Users/mehfuz/recime-cli/recime-bot-template
> node app.js

INFO: Debugger is started at:
http://localhost:4000/ff4d631e93310fd948bca1a337eee628/v1
ff4d631e93310fd948bca1a337eee628
DEBUG: {"attachment":{"type":"image","payload":{"url":"http://farm5.staticflickr.com/4049/4614684919_54b1788664.jpg"}}}
POST /ff4d631e93310fd948bca1a337eee628/v1 200 3089ms - 112b


`````
