# Redirect using Go-to

Use `go-to` plugin to redirect to implement logical flows. This helps you implement complex flow in your bot that is triggered by user input or an event.

Here, in the example, the bot will take the user to a confirm transaction flow based on the input. First, ask the user what they want to do next:

![](./go-to-input.png)


Next, use `user-input` plugin to capture the input using a pattern validation with a regular expression:

![](./go-to-user-input.png)

Finally, send the user to a `yes-flow` block based on if the user typed/pressed (`facebook` quick-reply) "yes" in the following way:

![](./go-to-flow.png)


Otherwise, continue to no flow:

![](./no-flow.png)


It is possible to use a second "go to" here in order to take the user to a dedicated __no flow__ block or send to a default block to restart the conversation.
