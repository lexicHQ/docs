#Handling Facebook Webhook


`Facebook Messenger Platform` supports webhook vis `Postback` button


![](facebook-webhook.png)

Recime bots handles facebook webhook therefore developers can handle  specific logic due to user actions. The following is the very basic implementation of facebook postback (`main.ts`):


```
export class Bot {
  private args: any;

  constructor(args:Object){
    this.args = args;
  }
 

  execute(cb:any){
    let args = this.args;

    if (args.postback){
      return cb({
        "text" : "We have received your request."
      });
    } else {
      return cb({
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
  }
}


```


`args.postback` contains the payload data, here in this case it’s the `userID`. To know more on postback and webhook, we would recommend to checkout the following reference from `Facebook Messenger Platform` documentation:

https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button

