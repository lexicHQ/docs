Message Format
==============

Every bot has an endpoint which you can use to extend into your existing
app or build your own custom solution on top of it.

It is possible to send a notification to the bot using JSON ``POST``
request. The message body can contain user text or an event to trigger
an intent. The result will contain an array of messages sent from the
bot.

The message payload has the following properties:

+-----------------+-----------------+-----------------+-----------------+
| Property Name   | Description     | Type            | Required        |
+=================+=================+=================+=================+
| sender          | Unique sender   | String          | Y               |
|                 | ID              |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| text            | Input           | String          | N               |
|                 | text.(e.g.      |                 |                 |
|                 | Where is San    |                 |                 |
|                 | Francisco?)     |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| event           | Event to        | Object          | N               |
|                 | trigger an      |                 |                 |
|                 | intent. Either  |                 |                 |
|                 | text or event   |                 |                 |
|                 | is required.    |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| meta.user       | User            | Object          | N               |
|                 | information     |                 |                 |
|                 | that is         |                 |                 |
|                 | available from  |                 |                 |
|                 | the bot as      |                 |                 |
|                 | variables (e.g. |                 |                 |
|                 | {{first_name}}) |                 |                 |
+-----------------+-----------------+-----------------+-----------------+

An ``event`` object has the following properties:

+-----------------+-----------------+-----------------+-----------------+
| Property Name   | Description     | Type            | Required        |
+=================+=================+=================+=================+
| name            | Name of the     | String          | Y               |
|                 | event (e.g.     |                 |                 |
|                 | start) that     |                 |                 |
|                 | corresponds to  |                 |                 |
|                 | an intent name  |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| payload         | JSON payload    | Object          | N               |
+-----------------+-----------------+-----------------+-----------------+
