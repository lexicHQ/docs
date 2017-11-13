# Message Object

Every bot has an endpoint which you can use to extend it to your custom solution or trigger it by sending event notification.

It is possible to send a notification to the bot using JSON `POST` request. The message body can contain user text or an event to trigger an intent. The result will contain an array of messages sent from the bot.

The message payload has the following properties:


| Property Name | Description | Type | Required |
| -- | -- | -- |-- |
| `sender` | Unique sender ID | String | Y |
| `text` | Input text.(e.g. Where is San Francisco?) | String | N |
| `event` | Event to trigger an intent. Either text or event is required. | Object | N |


An event object has the following properties:

| Property Name | Description | Type | Required |
| -- | -- | -- |-- |
| `name` | Name of the event (e.g. start) that corresponds to an intent name | String | Y |
| `payload` | JSON payload | Object | N |
