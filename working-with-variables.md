# Working with Variables

Use variables to specify a check-point in your conversation or identify a user. You can access a variable using the **double braces** syntax in the following way:

![](./facebook-variable.png)


Here is a list of varaibles accessible from with the conversation scope by channel:

| Platform | Variable name | comments|
| -- | -- | -- |
| Facebook | first_name, last_name, profile_pic, gender, locale, timezone | -- |
| WeChat | first_name | `nickname` and set as first_name |
| Viber | first_name, last_name | -- |
| Telegram | first_name, last_name | -- |
| Website | first_name, last_name | You can override them from the configure section |

::: tip  How to track a user?
You can use the `sender` variable to track a user specific to a channel. 
:::

It is also possible to create your own custom variables using `User Variable` plugin. 

![](./user-variable.png)

Use variables to trigger a conditional flow as shown below:

![](./user-variable-goto.png)

Use variables as filter criteria to send a broadcast (a.k.a. push notifications) to a specific number of subscribers:

![](./variable-broadcast.png)

