Developer Features
==================

User Variables
--------------

User variables are assigned by the underlying platform (e.g. Facebook)
or by the user.

As your bot is connected to ``Facebook``. It will assign the following
variables:

::

    * first_name
    * last_name
    * gender
    * locale
    * profile_pic
    * timezone

You can access a user variable using the double braces syntax in the
following way:

|image0|

It is also possible to set your own user variables that is available
throughout the life-cycle of your bot.

A quick way of doing that is by using the script block. Copy and paste
the following snippet into your script block to set "color":

.. code:: javascript

    exports.handler = (context, done) => {
        context.vars.set("color", "red");

        done();
    };

Here is the list of user variables on different platforms:

+-----------------------+-----------------------+-----------------------+
| Platform              | variables             | comments              |
+=======================+=======================+=======================+
| Facebook              | first_name,           | --                    |
|                       | last_name,            |                       |
|                       | profile_pic, gender,  |                       |
|                       | locale, timezone      |                       |
+-----------------------+-----------------------+-----------------------+
| WeChat                | first_name            | ``nickname`` and set  |
|                       |                       | as first_name         |
+-----------------------+-----------------------+-----------------------+
| Viber                 | first_name, last_name | --                    |
+-----------------------+-----------------------+-----------------------+
| Telegram              | first_name, last_name | --                    |
+-----------------------+-----------------------+-----------------------+
| Website               | first_name, last_name | Set from the copy     |
|                       |                       | script.               |
+-----------------------+-----------------------+-----------------------+

JSON API
--------

The plugin allows you to create server-side integrations or define your
conversation logic based on dynamic content. You can make the following
HTTP requests:

-  GET
-  POST
-  PATCH
-  DELETE
-  PUT

In addition, you can pass query string parameters, POST body, and
headers to address a various type of custom implementation. It is
possible to use user variables as parameters using the double braces
syntax to pass user input and NLP response. Here is an example of how to
use JSON API in order to get weather information:

|image1|

Here, location is defined as an entity from the "Define Expressions"
tab:

|image2|

The response is saved in {{result}} varaible which is used from the text
element to print out the current weather information in the following
way:

|image3|

JSON API allows you to implement the following use-cases:

1. Retrieve dynamic content.
2. Create server-side integrations, where it will send data to an
   endpoint whenever a conversation reaches a certain point.
3. Trigger an event.

Script Block
------------

Script Block allows you to quickly write custom logic inside the
conversation builder. Click on ``script`` button in the toolbar as shown
below to insert a script block:

|image4|

The entire conversation context is available in the script block. This
will let you write custom logic based on user input, entities and
variables. The example below shows how to pull data from a weather API
and then set it as a context variable for use in the builder:

.. code:: javascript

    //script block
    //https://docs.recime.io/script-block.html
    import request from 'request';

    // get a free API key from openweathermap.org
    const appId = 'PASTE_YOUR_API_KEY';

    exports.handler = (context, done) => {
        request({
            url : 'https://api.openweathermap.org/data/2.5/weather',
            qs : {
                lat : context.nlp.entities.location[0].lat,
                lon : context.nlp.entities.location[0].lng,
                appid: appId,
                units: 'imeprial'
            },
            json : true
        }, (err, reponse, body)=>{
            if (err){
                console.log(err);
            }
            //debug
            console.log(body);
         
            // save 
            context.vars.set("weatherData", body);
            
            done();
        });
    };

``context`` parameter have the following properties:

+---------------+--------------------------------------------------+
| Property Name | Description                                      |
+===============+==================================================+
| args          | `User input <message-object.md>`__               |
+---------------+--------------------------------------------------+
| nlp           | Contains entities and intents for an expression. |
+---------------+--------------------------------------------------+
| vars          | Set or get vars to use in the current context.   |
+---------------+--------------------------------------------------+

The ``args`` object contains the following properties:

+-----------------------+-----------------------+-----------------------+
| Property Name         | Description           | Type                  |
+=======================+=======================+=======================+
| sender                | Unique sender ID      | String                |
+-----------------------+-----------------------+-----------------------+
| text                  | Input text.(e.g.      | String                |
|                       | Where is San          |                       |
|                       | Francisco?)           |                       |
+-----------------------+-----------------------+-----------------------+
| event                 | Event to trigger an   | Object                |
|                       | intent. Either text   |                       |
|                       | or event is required. |                       |
+-----------------------+-----------------------+-----------------------+

``event`` contains the name of the event that is triggered for a user
action:

+-----------------------+-----------------------+-----------------------+
| Property Name         | Description           | Type                  |
+=======================+=======================+=======================+
| name                  | Name of the event     | String                |
|                       | (e.g. start) that     |                       |
|                       | corresponds to an     |                       |
|                       | intent name           |                       |
+-----------------------+-----------------------+-----------------------+

You can use variables inside the builder in the following way using the
double braces syntax:

|image5|

You can also output in script block using the `extension
module <https://github.com/Recime/recime-bot-extension>`__ in the
following way:

.. code:: javascript

    import Ext from "recime-bot-extension";
    const __ = Ext.default;

    exports.handler = (context, done) => {
        done(__.text("Hello world"));
    };

Script block can be useful in the following scnearios:

-  Retrieving data from your existing API that you want inject in your
   conversation context.
-  Construct dynamic response based on user input and entities.

The following libraries are available in the **Script Block** runtime:

-  `node
   core <https://nodejs.org/api/modules.html#modules_core_modules>`__
-  `request <https://github.com/request/request>`__
-  `recime-bot-extension <https://github.com/Recime/recime-bot-extension>`__
-  `recime-keyvalue-store <https://github.com/Recime/recime-keyvalue-store>`__

Use ``console.log`` to debug script block.

Capturing User Location
-----------------------

Facebook, Viber, and Telegram allow the user to send a location to your
bot. It is sometimes useful to capture user's location in order to book
an appointment, order a pizza, etc.

When user sends a location, it triggers a ``location`` intent or goes to
the ``default`` intent. Create a location intent by typing "location"
into search box in the following way:

|image6|

User location is sent as an input parameter and it can be accessed as an
attribute in the following way:

|image7|

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

`How can I send my current location in
Messenger <https://www.facebook.com/help/messenger-app/1394730427523556>`__

In Viber, it is available as a toolbar button, clicking on it will bring
up the map to pin your location:

|image8|

In Telegram, tap on the attachment button and choose Location:

|image9|

Reusable Custom Modules (Coming Soon)
-------------------------------------

Publish re-usable custom modules using the Command Line Interface.

.. |image0| image:: facebook-variable.png
.. |image1| image:: json-api.png
.. |image2| image:: json-api-define-expressions.png
.. |image3| image:: json-reply.png
.. |image4| image:: script-block.png
.. |image5| image:: context-vars.png
.. |image6| image:: location-intent.png
.. |image7| image:: location-new.png
.. |image8| image:: location-viber.jpeg
.. |image9| image:: share-location-telegram-1.png

