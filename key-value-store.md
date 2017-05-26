# Key-value Store

Key-value is designed to help you store conversational states and quickly store and retrieve data that will enable you to build a more engaging and personalized experience for your users.

Key-value is exposed as `db` and can be accessed anywhere from your bot. In order to store value, please do the following:

```
db.set("userId", {
    id : 1
}).then((_)=>{
    // TODO://
});

```

Similarly, use `db.get` to retrieve the value:

```

db.get("userId").then((result)=>{
    console.log(result.id);
});

```

Key-value data is available throughout lifetime of your bot once deployed and supports the following javascript data types:

* Number
* String
* Object



Every bot gets its own managed and secure store. Number of unique keys are subject to plan, please checkout pricing page for more details.
