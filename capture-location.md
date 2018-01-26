# Capture User Input

Facebook, Viber, and Telegram allow the user to send a location to your bot. It is sometimes useful to capture user's location in order to book an appointment, order a pizza, etc.


User location is sent as an input parameter and it can be accessed as an attribute in the following way:

![](location-new.png)


Basically, a location has the following properties regardless of the platform:

| Name | Description|
| -- | -- |
| lat  | latitude |
| long | longitude|

Please, check out the following resources on how to send your location:

[How can I send my current location in Messenger?](https://www.facebook.com/help/messenger-app/1394730427523556)


In Viber, it is available as a toolbar button, clicking on it will bring up the map to pin your location:

![](location-viber.jpeg)

In Telegram, tap on the attachment button and choose Location:

![](share-location-telegram-1.png)