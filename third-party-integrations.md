:::tip Note

The copyright/ trademark of individual third party services mentioned above are owned by their respective companies.

If you are a software vendor and would like to integrate your service with Samrtloop bot, then please send us an email at [hello@smartloop.ai](hello@smartloop.ai)

:::

# Integrations
Integrate Smarloop with various services to unlock the full potential of your Conversation AI bot.

## Dashbot

Dashbot provides comprehensive, conversational analytics to understand your subscribers and pin-point pitfalls. 

Below are the steps to configure and integrate Dashbot with Smartloop:

First,  go to [https://reports.dashbot.io/](https://reports.dashbot.io/) and sign up with your credentials.

Follow the instructions to register your bot:

![](./images/dashbot/step1.png)

Click "Register"

Copy the API Key from Step 2 and store it in a safe place to use in the next step.

![](./images/dashbot/step2.png)


Go to  **Configure-> Integrations**  Click on the "Dashbot" link:

![](./images/dashbot/config.png)


This will bring up the configure modal, paste the API key you have copied eariler into the input box:

![](./images/dashbot/config-modal.png)

Click **Connect** and you are all set!


## BotAnalytics

[BotAnalytics](https://botanalytics.co/?utm_source=smartloop&utm_medium=documenation) is a conversational analytics tool for voice and text based interfaces. It helps you identify bottlenecks, understand intents and segment conversations with AI & ML technologies.

Follow these steps to integrate BotAnalytics with your Smartloop chatbot:

1. Go to [https://botanalytics.co/](https://botanalytics.co/?utm_source=smartloop&utm_medium=documenation) and sign up with your credentials. 
2. Add your new bot to BotAnalytics:(If you already have the bot created in BotAnalytics, go to Settings → Bot and expand your bot. You will find the API key there.) 
   1. We’ll suggest to use the same bot name as the one in Smartloop   
   2. Make sure to select the same target platform (i.e. Viber of Facebook Messenger)   
   3. Fill out the category and other fields. After you save your settings, you'll see your bot token:
   ![alt text](./Monitor-Botanalytics.png "Botanalytics Token")   
3. Copy the bot token. 
4. Go to [https://dashboard.smartloop.ai](https://dashboard.smartloop.ai) and log in.
5. Select your bot 
6. Go to **Configure** and locate the **Integration** section.  
7. Select **BotAnalytics**.  
8. Paste the API key (i.e. the token) in the field. 
9. Click the **+Connect** button and you are set! 

## Freshdesk

:::warning Note

Freshdesk requires a paid account for the integration to work.

:::

Smartloop provides a comprehensive integration with Freshdesk. Using the bot, you can: 
1. Raise a new ticket in Freshdesk
    * Attach appropriate files in support of the ticket
2. View the ticket:
    * All tickets raised by you
    * Details of a specific ticket 
3. Push notification when ticket status or new comment is posted.
4. Post comment to the ticket

[How to integrate Freshdesk with a Smartloop bot](./freshdesk-integration.md)

## Freshchat		

:::warning Note		

Freshchat requires "Estate" plan or higher for the integration to work.		

:::		

Smartloop allows Freshchat to be used as a live chat agent from the bot itself. Using the bot, you can: 		
1. Initiate a chat with a live agent (person)		
2. Bi-directional communication with live agent on Freshchat		
3. Terminate chat wth live agent and return to bot		

[How to use Freshchat as a live agent from Smartloop bot](./freshchat-integration.md)