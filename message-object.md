# Message Object

Every bot has an endpoint which you can use to extend it to your custom solution or trigger it by sending event notification.

The basic structure for sending a notification to the bot looks like:

```json
{
  sender : "11-11-111",
  event : {  
    name : "start" 
  }
}
```
This will send a `start` event to the bot that will invoke the corresponding intent and return the messsages for it.

The message payload has the following properties:


| Property Name | Description | Type | Required |
| -- | -- | -- |-- |
| `sender` | Unique sender ID | String | Y |
| `text` | Input text.(e.g. Where is San Francisco?) | String | N |
| `event` | Event to trigger an intent. Either text or event is required. | Object | N |


An event  object has the following properties:

| Property Name | Description | Type | Required |
| -- | -- | -- |-- |
| `name` | Event name | String | Y |
| `payload` | event payload | Object | N |
