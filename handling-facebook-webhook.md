#Handling Facebook Webhook


`Facebook Messenger Platform` supports webhook vis `Postback` button


![](facebook-webhook.png)

Recime bots handles facebook webhook therefore developers can handle  specific logic due to user actions. The following is the very basic implementation of facebook postback (`main.js`):


```
export class Bot {
  constructor(args){
    this.args = args;
  }

  execute(){
    return new Promise((resolve, reject)=>{
        if (this.args.event){
          resolve({
            "text" : "We have received your request."
          });
        } else {
          resolve({
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"button",
                "text":"What do you want to do next?",
                "buttons":[
                  {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":JSON.stringify({
                      "userID" : "12334"
                    })
                  }
                ]
              }
            }
          });   
        }
    });
  }
}


```


`postback` contains the payload data, here in this case it’s the `userID`. To know more on postback and webhook, we would recommend to checkout the following reference from the `Facebook Messenger Platform` documentation:

https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button
