# Getting Started Button
In order to enable `Getting Started` button bot's welcome screen, include a `welcome.json` file in the bot project with the following `JSON` body:

```
{
    "payload" : "GET_STARTED_PAYLOAD"
}
```

This will automatially set the "Getting Started" button as you deploy or debug the bot.

### Fields 

| Property Name | Description | Type | Required |
| -- | -- | -- |-- |
| `payload` | This data will be sent back to your bot as `args.events.name` | String | Y |


**limitation:**
`payload` is limited to 1000 characters.
