#Configure Webhook

Once you have deployed the bot. Go to your command / terminal prompt and set up the webhook where all the message will be forwarded to. In this case recime bot will process and return the response back to telegram.

```
bash-3.2$ curl -F url=PASTE_YOUR_BOT_URL https://api.telegram.org/botPASTE_YOUR_ACCESS_TOKEN_HERE/setWebhook
{"ok":true,"result":true,"description":"Webhook was set"}

bash-3.2$ 

```

