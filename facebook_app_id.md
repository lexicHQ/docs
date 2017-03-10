# Facebook App ID

Login to your developer account [https://developers.facebook.com/](developers.facebook.com). Select “Add a new app” on the top right arrow menu. From the "Create a New App ID" popup add your bot name and email. Under category select **APPS for MESSENGER**. Then click "Create App Id."

![](create-new-app.JPG)

On the Facebook developers generate the "Page Access Token". 1st select the Facebook page you just created for your bot. A popup will ask you to verify permissions for the app.


![](token-generation.png)


Go to your command prompt and from the bot folder execute the following command to set it to your bot (CLI version 1.1.3+):

```
recime-cli platform config facebook

```
Now copy/paste your `Page Access Token` from facebook into the Recime-cli.
