# Go to Intent

The plugin allows you to design conditional conversation flow. This helps you implement complex flow in your bot that is triggered due to a user input or API response.

Here, in the example, the bot will take the user to a confirm transaction flow based on input. First, ask the user what they want to do next:

![](go-to-input.png)


Next, use `user-input` plugin to capture the input. The following is an example of pattern validation with a regular expression:

![](go-to-user-input.png)

Finally, send the user to a `yes-flow` intent based on if the user typed/pressed (`facebook` quick-reply) "yes" in the following way:

![](go-to-flow.png)


Otherwise, continue to no flow:

![](no-flow.png)


It is possible to use a second "go to" here in order to take the user to a dedicated __no flow__ intent or send to a default intent to restart the conversation.
