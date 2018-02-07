Script Block (Advanced)
=======================

Script Block allows you to quickly write custom logic inside the
conversation builder. Click on ``script`` button in the toolbar as shown
below to insert a script block:

|image0|

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
| args          | `User input`_                                    |
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

|image1|

You can also output in script block using the `extension module`_ in the
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

-  `node core`_
-  `request`_
-  `recime-bot-extension`_
-  `recime-keyvalue-store`_

Use ``console.log`` to debug script block.

.. _User input: message-object.md
.. _extension module: https://github.com/Recime/recime-bot-extension
.. _node core: https://nodejs.org/api/modules.html#modules_core_modules
.. _request: https://github.com/request/request
.. _recime-bot-extension: https://github.com/Recime/recime-bot-extension
.. _recime-keyvalue-store: https://github.com/Recime/recime-keyvalue-store

.. |image0| image:: script-block.png
.. |image1| image:: context-vars.png