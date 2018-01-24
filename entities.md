# How to Define an Entity?

An entity represents a term or object in the user's expression that provides clarification or specific context for a particular intent.

![](entities.png)

Here in the above statement, `Location` is an entity. 

You can define an entity by highlighting a word and then clicking on the entities from the list or creating a new one by typing into the filter box.


![](define-entity.png)


It is set a user variable and can be accessed using the double braces syntax `{{nlp.location}}` or you can reference it from script block in the following way:


```javascript
exports.handler = (context, done)=>{
    const location = context.nlp.entities.location;
    // check confidence and write custom logic
    done();
};
```