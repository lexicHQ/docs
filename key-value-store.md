# Key-value Store

Key-value is designed to help you store conversational states and quickly store and retrieve data that will enable you to build a more engaging and personalized experience for your users.

From your bot project, install the `recime-keyvalue-store` npm module by typing the following command:

```bash
npm install --save recime-keyvalue-store
```

Import the module by copy and pasting the folloiwng line in your source file:

```javascript
import db from "recime-keyvalue-store";
```


Use it to remember conversation flow. `key-value` is for fast read-write. Therefore, use it as a small storage solution to ensure the throughput of your bot.

```javascript
db.set("userId", {
    id : 1
}).then((_)=>{
    // TODO://
});

```

Similarly, use `db.get` to retrieve the value:

```javascript
db.get("userId").then((result)=>{
    console.log(result.id);
});
```

Key-value data is available throughout lifetime of your bot once deployed and supports the following javascript data types:

* Number
* String
* Object



Every bot gets its own managed and secure store. Number of unique keys are subject to plan, please checkout pricing page for more details.


We welcome your contribution and you can fork the source from [here](https://github.com/Recime/recime-keyvalue-store).

