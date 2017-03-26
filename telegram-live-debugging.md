#Live Debugging

You can live debug your telegram bot.

Configure `ngrok` as mentioned here:

https://docs.recime.io/live-debugging-facebook-bot.html


Run the bot locally by typing the following command:

```
recime-cli run

```
Configure telegram webhook by entering the Forwarding URL you got from `ngrok` (the https version) and the `/botid/v1` portion of your local url.

So, for instance, I’ve used:
`https://5fe0bf6f.ngrok.io/ff4d631e93310fd948bca1a337eee628/v1`

Now, you will start to see telegram responses in your debug console.
