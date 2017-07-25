#Live Debugging

Run the bot locally by typing the following command `(-w is for watch, for any changes it will automatically restart the debugger)`:

```
recime-cli run -w 

```

This will automatically setup the tunnel using `ngrok` and configure `telegram` wehbooks for debugging. Once the debug server is up and running you should see debug outputs in the console as you chat with the bot.
