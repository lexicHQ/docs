# Running Recime Bots Locally


While developing your bots, you will want to run your bot locally to test and debug before you deploy your bot to the Recime cloud.

`recime-cli` comes with built-in capability for testing and debugging bots locally. In order to run bots locally from your bot folder type the following commands:

```
recime-cli run
```

This will prepare a local node server, deploy give you a bot url to test:

```
bash-3.2$ recime-cli run

INFO: Preparing.

Downloading https://github.com/Recime/recime-template/archive/1.0.1.zip

7028 bytes downloaded.

INFO: Preparing.

/Users/mehfuz/recime-app/recime-template-1.0.1

INFO: Deploying Bot.

INFO: Starting.

> recime-template@1.0.1 start /Users/mehfuz/recime-app/recime-template-1.0.1

> node app.js


INFO: Bot is running at:

http://localhost:4000/bot/50d122fd3204e67f3a6452ba28b522da


```


**Running the Bot Locally With POSTMAN**


We will use POSTMAN to run our bot locally. Open POSTMAN and put in the local URI of your bot in the POST toolbar. The URI is what was returned by the compiler when you execute recime-cli run and looks like `http://localhost:4000/bot/0638989ba2e28fc83d000fdc7e80a92f`



Before you execute, click on the params button to add the parameter (Stephen Curry). Click on the `x-www-form-urlencoded` option and add text as the key and “Stephen Curry” as the value. Then click on the Send button to send the request to the bot. The result should look like this:

![](/assets/local-test-form.png)


Note, you can also run the bot using the command line by typing into a separate console window:

````
curl -i -H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST -d "{\"text\": \"INPUT TEXT\"}" \
http://localhost:4000/bot/0638989ba2e28fc83d000fdc7e80a92 \
-w "\r\n"

````

**File Watching**

It is also possible to set watch flags that will re-compile and update the bot automatically every time you make any changes. You can enable file watch for you bot by typing the  following command:

```
recime-cli run -w
```
