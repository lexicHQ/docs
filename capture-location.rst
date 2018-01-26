Capture User Input
==================

Facebook, Viber, and Telegram allow the user to send a location to your
bot. It is sometimes useful to capture user's location in order to book
an appointment, order a pizza, etc.

User location is sent as an input parameter and it can be accessed as an
attribute in the following way:

|image0|

Basically, a location has the following properties regardless of the
platform:

+------+-------------+
| Name | Description |
+======+=============+
| lat  | latitude    |
+------+-------------+
| long | longitude   |
+------+-------------+

Please, check out the following resources on how to send your location:

`How can I send my current location in Messenger`_

In Viber, it is available as a toolbar button, clicking on it will bring
up the map to pin your location:

|image1|

In Telegram, tap on the attachment button and choose Location:

|image2|

.. _How can I send my current location in Messenger: https://www.facebook.com/help/messenger-app/1394730427523556

.. |image0| image:: location-new.png
.. |image1| image:: location-viber.jpeg
.. |image2| image:: share-location-telegram-1.png