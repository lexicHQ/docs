# Deploy

Configure your bot by typing the following command:


```
recime-cli platform config facebook

```
Now copy/paste your `APP ID`, `APP Secrect` and `Page Access Token` that you have  copied earlier.

```

bash-3.2$ recime-cli platform config facebook
Please enter your facebook app settings
App Secret (Press "Enter" to continue):

...
...

INFO: Platform Configured Successfully.
Please do "recime-cli deploy" for changes to take effect.

For any questions and feedback, please reach us at hello@recime.io.

bash-3.2$

```

Deploy the bot by typing the following command:

```
recime-cli deploy

```

This will build any external `npm` packages you have used, including native modules, deploy the bot in the cloud and configure the `facebook` webhook and subscribe the bot to the page.