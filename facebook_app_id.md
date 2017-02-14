# Facebook App ID

Login to your developer account \(developers.facebook.com\) and create a new Facebook App \(click profile picture\) of the category: **APPS for MESSENGER**.

![](create-new-app.JPG)

On the Facebook developers generate the `Page Access Token`.


![](token-generation.png)


Go to your command prompt and from bot folder execute the following command to set it to your bot (CLI version 1.1.3+):

```
bash-3.2$ recime-cli platform config facebook

```
This will start the prompt for entering your `Page Access Token` required by facebook.
