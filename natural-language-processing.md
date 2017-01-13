# Natural Language Processing with Recime

Recime supports cognitives Natural Language services. When enabled it will extract entities and keywords for a given property.



In order to enable Natural Language Processing for your bot. Go to your bot page and toggle the `Enable Entities Extraction` switch:

![](/assets/bot-nlp.png)

Now, go into flickr photo Facebook bot code [example](https://docs.recime.io/bot_code.html), you will notice the following in the code:

```
get extract(){     
    return "message.text";  
 }
```

This will tell Recime to extract entities from the “message.text” property. This will enable developers to understand the context of an user query and process it correctly.

Below is a [POSTMAN](/postman.md) screenshot that shows how another example “Show me train schedule for Palo Alto” will translate into entities when extraction is enabled:

![](/assets/nlp.png)

The extracted entities contain city information which is very important, if you are trying to pull train schedule for a city. Additionally, keywords can help you figure out the kind of interests ranked by relevance. Users can ask it **Starbucks** instead of train schedule and thus gives you more context to play with and put it under the correct logic structure.

```
{
 "keywords": [
     {
        "relevance": "0.928076",
        "text": "Palo Alto"
     },
     {
        "relevance": "0.785704",
        "text": "train schedule"
     }
 ],

 "entities": [
     {
      "type": "City",
      "relevance": "0.33",
      "count": "1",
      "text": "Palo Alto"
     }
 ]
}
```

Full source code of the bot, created using [recime-cli](https://docs.recime.io/prepping_your_system.html):

```
/// <reference path="node.d.ts" />

import util = require('util')

export class Bot {
  private args: any;

  get extract(){
    return "text";
  }

  constructor(args:Object){
    this.args = args;
  }
  execute(cb:any){
    cb({
      keywords : this.args.keywords,
      entities: this.args.entities
    });
  }
}
```

Here **Natural Language Processing** is enabled for the “text” property which is passed by user or parent container \(e.g. Facebook\) as JSON body and is being processed by **IBM Watson** \(Default NLP processor\) and then the result is passed in as “args” properties \(keywords and entities\) by Recime. Considering the scope of the post, it is only echoing back the processed as shown in the POSTMAN above.
