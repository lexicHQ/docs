#Deploy

Configure the bot for Telegram by typing the following command:


```
recime-cli platform config telegram

```


This is will prompt you for the `Telegram access token`, paste the access token that copied from the `BotFather` app [Setup your bot](setup-telegram-bot.md) step:


```
recime-cli platform config telegram
Telegram access key:
PASTE_YOUR_KEY_FROM_CLIPBOARD

INFO: Platform Configured Successfully.
Please do "recime-cli deploy" for changes to take effect.

For any questions and feedback, please reach us at hello@recime.io.

bash-3.2$

```

Deploy the bot by typing the following command:


```
recime-cli deploy

```

This will build and deploy the bot and automatically setup the webhook for you.