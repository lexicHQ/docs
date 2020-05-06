# Conditional Flows

Often, you will want to engage a user to different conversational flow based on various key factors. You can jump from one flow to another using `go-to`.  This helps you implement complex flow in your bot that is triggered by user input or an event.

Here, in the example, the bot will take the user to confirm transactions on the basis of input. In the first step, it is asking the user for confirmation:

![](./go-to-input.png)


Next, we are capturing the user input and validating it for a given pattern `?(Yes:No)`:

![](./go-to-user-input.png)

Finally, the user is sent to a `yes` block as the user confirms to proceed to the next step:

![](./go-to-flow.png)


Otherwise, it is taking the user to the alternate flow, as shown below:

![](./no-flow.png)


Although this shows a very straightforward `if-then-else` implementation, repeating this process, it is possible to implement multi-level cascading flows easily to design a very involved conversation using `go-to.`
