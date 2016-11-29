# Natural Language Processing with Recime



Recime supports cognitives Natural Language services backed by IBM watson. When enabled it will extract entities and keywords for a given text.

For instance if you go into flickr photo Facebook bot code [example](https://docs.recime.ai/bot_code.html), you will notice the following in the code:

``` 
 get extract(){     
    return "text";  
 }
```

This will tell Recime to extract entities from the “text” property which is useful for developers to understand the context of an user query and process it correctly.

Below is a [POSTMAN](/postman.md) screenshot that shows how another example “Show me train schedule for Palo Alto” will translate into entities when extraction is enabled:

![](/assets/nlp.png)




The extracted entities contain city information which is very important, if you are trying to pull train schedule for a city. Additionally, keywords can help you figure out the kind of interests ranked by relevance. Users can ask it **Starbucks** instead of train schedule and thus gives you more context to play with and put it under the correct logic structure.














