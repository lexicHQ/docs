# How to use Entities?

Entities help extract word(s) from an expression, group and label them to classify and define a context.

![](./entities-flow.png)

Double tap a word in an expression to associate an entity with it.

![](./define-entities.png)

It is possible to link the same entity for different words. Like in the above example, we have associated "food" for "tacos" and "guacamole".

Entities defined in this way can be used as a user variable in a block like based on selection, it is possible to send a user to a different block using a 'go-to' based on an entity value.

![](./entity-check.png)

An entity object can have various properties. A system entity or ***Star*** entity can have additional properties. For example, "datetime" can have properties to identify a weekend vs weekday or time of the day when someone says:

> "Hows the weather tomorrow?"

Here "tomorrow" will return an additional date object to further understand the intent of the user. In general, an entity can have at least the following properties but not limited to:


| Property | Value |
| -- | -- |
| value | The word returned by the entity extractor for an expression. |
| confidence | The confidence level sent by the entity extractor |
| start | start index of the highlighted entity in an expression.|
| end | end index of the highlighted entity in an expression.
