# Chatbot Concepts

This section covers the basics of various chatbot concepts.


## Intents

An **intent** instructs your chatbot how (and what) to respond. Each intent is mapped to a user input, which could be a text phrase, pressing a button or another user input.
Intents are the basic building blocks of your bot. 

Each newly created bot comes with three default intents:

* The **Start** intent defines the start of the conversation. It is called automatically when a new conversation is triggered. This intent cannot be deleted, but you can edit the message the bot will sent to the user [from your account](https://console.recime.io/?utm_source=intercom&utm_medium=email&utm_campaign=welcome).

* if the chatbot doesn’t understand the user input, it will return the message within the **Default** intent. This intent cannot be deleted, but you can edit the message the bot will sent to the user from your account.

* The **About** intent is called when the user types “about” when chatting to your bot. This intent contains the default branding information of your chatbot. This generally contains the branding information.


## Expressions

Expressions are phrases or commands that a user would use to trigger a response from the chatbot (😎 à 🤖), related to the selected intent. To train your bot and to improve its ability to respond, it is best to add multiple expressions to each intent (ideally 4-8).
Below is an example of expressions:

* How's the weather in Paris?
* I want to travel from San Francisco to Madrid


## Responses

Responses are messages which the bot will send to the user(🤖 à 😎), related to the selected intent. Responses could be:
* Direct replies to user expressions. An example of a bot response would be “It is 82°F in San Francisco right now.”
* Questions, which the bot would use to understand the full context of the conversation. An example would be “How would you like me to report the temperature? In Celsius or Fahrenheit?”

Bot responses can contain text, button(s), image(s), video(s), rich-content gallery or defined using a custom plugin.


## Entities

An entity represents a term or object in the user's expression that provides clarification or specific context for a particular intent.

![](entities.png)

Here in the above statement, `Location` is an entity. 


**Related Topics**

* [Defining Entities](building-a-bot.html#defining-entities)








