# Facebook App ID

Login to your developer account \(developers.facebook.com\) and create a new Facebook App \(click profile picture\) of the category: **APPS for MESSENGER**.

![](create-new-app.JPG)

On the Facebook developers generate the `Page Access Token`.


![](token-generation.png)


Go to your command prompt and from bot folder execute the following command to set it to your bot (CLI version 1.1.3+):

```
bash-3.2$ recime-cli platform config facebook
Page Access Token:
EAAYJo5Mr248BADvIImuXuYRlZBvkzPuEUfjNmWRrYxufLfvlNckkLaHtGbGr4sJYWy4hGTlHA0NPhrTaXQZCate0
Wu7JuP8XvRXfPZBHhpeII3jcPZCkU5mwZAb1W0eQTNjDvv1uJ489RdjLPnnBa5OZCLZBs0FzYuNSXuKYPZBMCpIwZDZ
1

INFO: Platform Configured Successfully.
Please do "recime-cli deploy" for changes to take effect.

For any questions and feedback, please reach us at hello@recime.io.

bash-3.2$
```
