# Channels


## Facebook

### Connect your bot to a page

Connect your bot to a Facebook page using the Connect / Disconnect capability. If you are not already logged in using Facebook, it will take you through a wizard to connect Smartloop app to your page.

![](./facebook-connect.png)

### Greeting Text

Greeting text is shown on the welcome screen. You can update the greeting and include {{user_first_name}}, {{user_last_name}} and {{user_full_name}} to make it more personalized.

![](./greeting-text.png)

### Persistent Menu

The persistent menu allows you to have an always-on user interface element inside Messenger conversations. This is an easy way to help people discover and access the core functionality of your Messenger bot at any point in the conversation.

You can link a block to the persistent menu. Click on "+ Menu Item" button to link blocks as shown below:

![](./persistent-menu.png)


## Website

Website bot gives the user a similar experience to that of a live chat. However, the conversation happens with an automated agent instead of a human. It increases efficiency and improves the quality of service.

### Configure and Install

To install the web chat module, please follow the simple steps below:

Click on the configure icon in your dashboard: 


To ensure that it is consistent with your brand, customize the look and feel of the module:

![](./webchat-configure.png)


Next, follow the instructions to copy and paste the web chat module to your site:

![](./webchat-installation.png)

### Understanding your Website Visitors

Every visitor of your bot gets a unique ID that you can use to track and analyze in various steps of your website flow. 

Below are the `javascript` API methods that can be used to get the user ID and update the profile:

Get the active user ID using `getUserId`

```javascript
const userId = webchat.getUserId()
```

Use `setUser` to collect user information to target and engage at a later time:

```javascript
webchat.setUser({
  first_name: 'Jim',
  last_name: 'Morrison',
  country : 'US',
  phone: '+1(---)----,
  email: 'jim@smartloop.ai'
});
```

`window.webchat` is available throughout the scope of the page after the web chat module is initialized.


### Sending Events to the Bot

Send an event notification to the bot to trigger a flow. 

The following example provides an example of how to set it up after the bot is set up. 

First, create the HTML button object:


```html 
<button id="request-a-demo">Request a Demo</button>
```

Copy and paste the following script before the `<body/>` tag:

```javascript
<script>
  (function(d) {
    d.addEventListener('DOMContentLoaded', function() {
      d.getElementById('request-a-demo').addEventListener('click', function() {
        webchat.open('block-id');
      });
    });
  })(document);
</script>
```

Here, it will open the website bot and take the user to the flow for the given block when the user clicks on **Request a Demo** button.

To configure the script with a block id, Inside the builder, click on the `</>` icon to get started:

![](./toolbar.png)

### Properties

Below is a table with the definition of properties to configure your web chat module: 

| Configuration | Value|
| -- | -- |
| Theme Color | Theme of the bot. It includes icon, text and bar color |
| Secondary Color | Color of the text bubble. |
| Greetings text | Shown the first time the page loads.
| Greetings delay| Delay in seconds before showing the greetings message.  Default = 5 seconds
| Launcher Icon | Start button icon |
| Silent Mode | On/Off. Default = off |


## Viber

### Configuring Viber Events

Link a Viber event to a block.

Navigate to `Settings -> Events map` section.  Map an event to an existing block as shown below:

![](./viber-events.png)


You can map the following events to a block in a **Viber** bot:

| Type | Property | Comments |
| -- | -- | -- |
| conversation_started | event | when a user follows a Viber bot |
| subscribed | event | Triggered when user sends first message after `conversation_started` | 
| unsubscribed | event | When a user leaves the bot. Use this to remove user info, data, etc.|
