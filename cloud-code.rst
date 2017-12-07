Cloud Code
==========

The Cloud Code runtime enables you to quickly build server-side logic
from the ``Coversation Builder``. Click on ``code`` button in the
toolbar as shown below to insert code blocks in your conversation flow.

|image0|

Here you can set variables which you can use from UI elements in the
current context.

|image1|

``context`` parameter have the following properties:

+---------------+------------------------------------------------------------+
| Property Name | Description                                                |
+===============+============================================================+
| args          | `User input <message-object.md>`__                         |
+---------------+------------------------------------------------------------+
| nlp           | Contains extracted entities and intents for an expression. |
+---------------+------------------------------------------------------------+
| vars          | Set or get vars to use in the current context.             |
+---------------+------------------------------------------------------------+

.. code:: javascript

    exports.handler = (context, done) => {
        context.vars.set("name", "John Doe");
        done();
    };

Use it within the conversation builder in the following way using double
braces syntax:

|image2|

It also possible to use `extension
module <https://github.com/Recime/recime-bot-extension>`__ directly and
return response from within a code block:

.. code:: javascript

    import Ext from "recime-bot-extension";
    const __ = Ext.default;

    exports.handler = (context, done) => {
        done(__.text("Hello world"));
    };

Cloud Code can be useful in the following scnearios:

-  Retrieving data from your existing API that you want inject in the
   conversation flow.
-  Construct dynamic response based on user input and extracted
   entities.

The following libraries are available in the **Cloud Code** execution
enviorment:

-  `node
   core <https://nodejs.org/api/modules.html#modules_core_modules>`__
-  `request <https://github.com/request/request>`__
-  `recime-bot-extension <https://github.com/Recime/recime-bot-extension>`__
-  `recime-keyvalue-store <https://github.com/Recime/recime-keyvalue-store>`__
-  **console.log(string|object)** - To output directly into the bot.
   Used for debugging.

.. |image0| image:: code-block.png
.. |image1| image:: code-block-action.png
.. |image2| image:: context-vars.png

