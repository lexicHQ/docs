User Variables
=================

User variables are assigned by the underlying platform (e.g.
Facebook) or by the user.

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
| Telegram              | first_name, last_name | --                    |
+-----------------------+-----------------------+-----------------------+
| Viber                 | first_name, last_name | --                    |
+-----------------------+-----------------------+-----------------------+
| Website               | first_name, last_name | Set from the copy     |
|                       |                       | script.               |
+-----------------------+-----------------------+-----------------------+

.. |image0| image:: facebook-variable.png