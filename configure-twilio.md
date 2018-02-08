# Configure Twilio

The first step is to create a new `Programmable SMS Messaging` Service.  Go to Home->Dashboard in your Twilio console.

Select Programmable SMS under the Messaging section:

![](setup-twilio.png)


Next create a messaging service by clicking on the "Create a new Messaging Service" button:

![](message-service.png)


Once the service is created. The only thing that we need is to set the inbound request URL. Paste the bot endpoint URL from publish tab that you have copied earlier:

![](twilio-webhook.png)

Save the messaging service using the Save button at the bottom of the screen. Now, add a phone number for the new service by clicking on the "Numbers" link in the menu:

![](twilio-number.png)


If you already have a number you'd like to use, choose that, otherwise create a new one. At this point, you have successfully configured the SMS service for your bot.
