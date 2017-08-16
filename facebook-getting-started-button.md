# Getting Started Button
In order to enable `Getting Started` button on bot welcome screen, include a `welcome.json` file in your project  folder with the following `JSON` content:

```
{
    "payload" : "start"
}
```

This will automatially initialize the "Getting Started" button as you deploy or debug the bot.

### Fields 

| Property Name | Description | Type | Required |
| -- | -- | -- |-- |
| `payload` | This data will be sent back to your bot as `args.events.name` | String | Y |


**Limitation:**
`payload` is limited to 1000 characters.
