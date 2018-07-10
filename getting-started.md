# Getting Started

In this tutorial, we will create and publish a _Chuck Norris_ Facebook bot. The first step is to create a [free account](https://console.recime.io). You can use [github](https://github.com/),  [Facebook](https://www.facebook.com/) or email to get started.

Once you are inside the dashboard, press the "+ Create a bot" thumbnail:

![](./getting-started-home.png)

This will bring up the dialog to create the bot as shown below:

![](./registration.png)

Enter the bot title, select a platform. In this case, “Facebook”.  

Click “Submit”.

::: tip What is a block?
A block contains expressions and responses. You can also trigger a block by a user event (e.g.button click) or by user input 
:::

This will create the bot and take you to the builder once completed.

![](./chuck-norris-builder.png)

Once, you are inside the builder, the next step is to build a flow. First, customize the greetings message followed by a quick reply in the following way:

![](./getting-started-1.png)


Click on the quick reply button, this will bring up the context dialog, select "User Input" as type and "yes" as reply:

![](./getting-started-user-input-dialog.png)

Create a flow to navigate the user to different flows based on user input. First capture the user input using the [User Input](http://localhost:8080/building-a-bot.html#creating-responses) plugin in the following way:

![](./getting-started-user-input.png)

Next, send the user to a specific block using the [Go to Block](building-a-bot.html#creating-responses) plugin. Create an empty block “jokes” and send the user to it based on the user input as shown below:

![](./getting-started-go-to-block.png)

Inside "jokes", add a JSON Plugin to pull random jokes and store it in a user variable in the following way:

![](./getting-started-json-api.png)

Print the joke using a text block in the following way:

![](./getting-started-json-api-result.png)


Go to the "start" block and add an alternate flow with information on driving your user to the main loop:

![](./getting-started-alternate-main.png)


That's it, you have created your first "Chuck Norris" bot.


![](./getting-started-complete.png) 


Go to _publish_ tab by clicking the configure icon from the navigation bar and connect to your page by clicking on the “+ Connect” button. If you are not signed in  with Facebook, it will take you through  the authentication process:

![](./getting-started-publish.png)


Now that you have successfully published the bot. Go to your page, click on the “+ Add a Button” and select "Contact us/ Send a Message". In the next step, as where to send the users, choose “Facebook Messenger” to respond.

![](./getting-started-page.png)

Once the button has been added, hover over it and select “Test Button”. this will bring up the bot and click on “Get started” to chat with the bot.

![](./getting-started-fb-test.png)

If you have completed the step then you are have successfully created and published your first Facebook bot. 


Next,  check out [Building a Bot](building-a-bot.html) section for a deep dive on blocks and various chatbot concepts. 

