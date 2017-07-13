#Live Debugging

Configure `ngrok` as mentioned here:

https://docs.recime.io/live-debugging-facebook-bot.html


Run the bot locally by typing the following command `(-w is for watch, for any changes it will automatically restart the debugger)`:

```
recime-cli run -w 

```

Configure your `viber` webhook in the following way:

```
curl -X POST -H "X-Viber-Auth-Token:PASTE_YOUR_VIBER_APP_KEY" -d '{  
   "url": "https://0f3e3408.ngrok.io/106ac42c537870651803235daa6f41e7/v1",  
   "event_types": ["delivered", "seen", "failed", "subscribed", "unsubscribed", "conversation_started"]  
}' -w "\r\n"  https://chatapi.viber.com/pa/set_webhook

```

Now, you will start to see viber responses in your debug console as you chat with the bot.
