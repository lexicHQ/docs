# Natural Language Processing with IBM Watson

[IBM Watson](https://www.ibm.com/watson/) provides Natural language process via its **AlchemyAPI** service. This is part of [IBM Bluemix](http://www.ibm.com/watson/alchemy-api.html). You can get a free account from here:

[https://console.ng.bluemix.net/registration/](https://console.ng.bluemix.net/registration/)

Choose a free tier of AlchemyAPI that will give you  a limit of 10000 requests per day to get started.

![](/assets/watson.png)

Once you have your account setup and configured, go to your bots settings page:  
\(If you don’t have a bot set up yet, you can build our Facebook bot here\)

![](/assets/nlp-bot-detail.png)

Click “Enable Entities Extraction” to bring up the “choose provider” dialog:

![](/assets/nlp-choose-dialog.png)

Select “IBM Watson” and copy/ paste your access key from `watson` console:

![](/assets/watson-console.png)

Click “Chose” to confirm and then click “Save” in the main page to update the settings.

![](/assets/nlp-success.png)

Now, go to the flickr photo Facebook bot example, you will notice the following lines:

```
get extract(){     
    return "message.text";  
}

```

This tells Recime to extract entities from the “message.text” property (sent by Facebook). The extracted entities are available under **args.provider_name** (as mentioned in the “choose provider” dialog).  Therefore, in order to search a person in flickr from a given user expression,  add the following lines for Watson specific processing:

```
let watson = this.args.watson;
let text = "Stephen Curry";

if (watson.entities){
 for (var entity of watson.entities){
    if (entity.type === "Person"){
        text = entity.text;

        // TODO: Do something useful.
    }
 }
}

```

P.S. Use `recime-cli run` to debug various entity items returned by Watson to match your need.

Happy bot building!
