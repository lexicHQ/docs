#Live Debugging
Run the bot locally by typing the following command `(-w is for watch, for any changes it will automatically restart the debugger)`:

```
recime-cli run -w 

```

This will automatically setup the tunnel using `ngrok` and configure `viber` wehbooks for debugging. Once the debug server is up and running you should see debug outputs in the console.

```
[INFO] Debugger is started at:
http://localhost:4000/7005cfdd41cdf388fa1fad35b7057407/v1

Configuring tunnel...

Successfully configured at:
https://50939c7d.ngrok.io/7005cfdd41cdf388fa1fad35b7057407/v1
DEBUG: {"success":true}
POST /7005cfdd41cdf388fa1fad35b7057407/v1?sig=1224 200 113ms - 16b

```

Once you are finished, deploy the bot for reconfiguring the wehbook and changes to take effect.