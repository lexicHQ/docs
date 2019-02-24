# WebChat Module

Website bot gives the user a similar experience to that of a live chat. However, the conversation happens with an automated agent instead of a human. It increases efficiency and improves the quality of service.

## Configure and Install

To install the web chat module, please follow the simple steps below:

Click on the configure icon in your dashboard: 


To ensure that it is consistent with your brand, customize the look and feel of the module:

![](./webchat-configure.png)


Next, follow the instructions to copy and paste the web chat module to your site:

![](./webchat-installation.png)

## Understanding your Website Visitors

Every visitor of your bot gets a unique Id that you can use to track and analyze in various steps of your website flow. 

Below are the `javascript` methods that can be used to get the user identifier token and update the profile:

To get the current session Id of the visitor, use:

```javascript
wechat.getUserId()
```

Use `setUser` to collect user information which can be used to target and engage at a later time:

```javascript
wechat.setUser({
  first_name: 'Jim',
  last_name: 'Morrison',
  country : 'US',
  phone: '+1(---)----,
  email: 'jim@smartloop.ai'
});
```

`window.webchat` is available throughout the scope of the page after the web chat module is set up.


## Sending Events to the Bot

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

## Properties

Below is a table with the definition of properties to configure your web chat module: 

| Configuration | Value|
| -- | -- |
| Theme Color | Theme of the bot. It includes icon, text and bar color |
| Secondary Color | Color of the text bubble. |
| Greetings text | Shown the first time the page loads.
| Greeting delay| Delay in seconds before showing the greetings message.  Default = 5 seconds
| Launcher Icon | Start button icon |
| Silent Mode | On/Off. Default = off |
