# Configuring Viber Events

Link a Viber event to a block.

Navigate to `Settings -> Events map` section.  Map an event to an existing block as shown below:

![](./viber-events.png)


You can map the following events to a block in a **Viber** bot:

| Type | Property | Comments |
| -- | -- | -- |
| conversation_started | event | when a user follows a Viber bot |
| subscribed | event | Triggered when user sends first message after `conversation_started` | 
| unsubscribed | event | When a user leaves the bot. Use this to remove user info, data, etc.|

