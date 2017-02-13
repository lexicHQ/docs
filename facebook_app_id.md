# Facebook App ID

Login to your developer account \(developers.facebook.com\) and create a new Facebook App \(click profile picture\) of the category: **APPS for MESSENGER**.

![](create-new-app.JPG)

On the Facebook developers generate the `Page Access Token`.


![](token-generation.png)


Go to your command prompt and from bot folder execute the following command to set it to your bot:

```
bash-3.2$ recime-cli config set FACEBOOK_PAGE_ACCESS_TOKEN=PASTE_HERE_YOUR_PAGE_ACCESS_TOKEN

INFO: Configuration Saved Successfully.

For any questions and feedback, please reach us at hello@recime.io.

bash-3.2$

```
