#Persistent Menu
The Persistent Menu brings users directly into the top-level features and flows in your bot.

In order to enable `Persistent Menu`, add a `menu.json` file in the bot project with the following `JSON`:

```json
{
    "locale":"default",
    "composer_input_disabled":true,
    "call_to_actions":[{
        "type":"postback",
        "title":"Main Menu",
        "payload":"main-menu"
        },
        {
            "type":"postback",
            "title":"Powered by Recime",
            "payload":"recime"
        }
    ]
}

```
This will automatically create the persistent menu as you deploy the bot. In order to create a nested menu, copy & paste the following `JSON`:

```json
{
      "locale":"default",
      "composer_input_disabled":true,
      "call_to_actions":[
        {
          "title":"My Account",
          "type":"nested",
          "call_to_actions":[
            {
              "title":"Pay Bill",
              "type":"postback",
              "payload":"PAYBILL_PAYLOAD"
            },
            {
              "title":"History",
              "type":"postback",
              "payload":"HISTORY_PAYLOAD"
            },
            {
              "title":"Contact Info",
              "type":"postback",
              "payload":"CONTACT_INFO_PAYLOAD"
            }
          ]
        }
}

```

For more information on facebook persistent menu please checkout the messenger platform documentation:

https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu



Note: You must set up a `Get Started button` if you also wish to use persistent menu.