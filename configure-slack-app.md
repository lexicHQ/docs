#Configure Slack Bot

Once deployed, first step is to enable the events subscrption. Go to "Basic Information" and click on "Events Subscription" under "Add features and functionality" section. 



Toggle the "Enable Events" switch and then copy and paste the bot endpoint in the `Request Url` textbox in the following way:

![](event-request-url.png)

Next, subscribe to events that your will bot respond. In this case, I've subscribed to `message.im` event that will invoke the event callback for any direct messages sent to the bot.

![](slack-bot-events.png)


Go back to "Add Features" section and click on "Bots" to enable the bot user.


![](add-a-slack-bot-dialog.png)


Click "Add Bot".


At this point, we have successfully configured the slack bot. Next step is to activate distribution for the bot to be installed in teams or publicly distribute in slack apps directory.

![](slack-add-features.png)




