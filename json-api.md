# Integrations using JSON API

It is possible to integrate with your backend using JSON API plugin. It allows you to take data out of the bot to your CRM or spreadsheet. You can use it with any REST API endpoint that supports the following methods:

* GET
* POST
* PUT
* DELETE


Below is an example of a HTTP request in action using JSON API plugin; this is an example of a bot that captures lead information and sends it over to a CRM to process:

![](./json-api-integration.png)

::: tip
The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.
:::

As the name suggests, it sends out request in a JSON format. Below is a list of properties supported by the JSON API plugin:

| Name | comments|
| -- | -- |
| URL | The destination endpoint where the HTTP request is sent. |
| Headers| Optional information as required by the endpoint server to process the request.|
| Query JSON | Query string parameters, it can also be sent directly via the URL.|
| Body | The actual content that is sent out. |
| User Attribute| Name of the user attribute where the result returned from the server will be stored.|


As per the table above, the result returned from the server can be stored in a user attribute. It can be useful to print or implement logic based on dynamic values.


![](./json-reply.png)


In a nutshell, JSON API plugin allows you to implement the following use-cases:

1. Retrieve dynamic content.
2. Create server-side integrations, where it will send data to an endpoint whenever a conversation reaches a certain point.
3. Trigger an event.


## Additional Attribtues

You can send the following attributes in your request along with `user attributes` that you have defined:

| Attribute | Description |
| -- | -- |
| bot_id | Unique ID of the bot
| user_id |  Bot user Id
