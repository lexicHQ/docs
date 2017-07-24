#Handling Facebook Postback


`Facebook Messenger Platform` supports webhook via `Postback` button


![](facebook-webhook.png)

Facebook postback message is passed as `args.event.name`. For the figure above, if someone presses **Bookmark Item**, you can handle it in the following way:

```
export class Bot {
  constructor(args){
    this.args = args;
  }

  execute(){
    return new Promise((resolve, reject)=>{
        if (this.args.event){
            switch(this.args.event.name){
              case "bookmark":{
                // TODO://
                break;
              }
              default :{
                // TODO://
              }
            }
        }
    });
  }
}


```

You can use the `recime-bot-extension` npm module to easily construct postback buttons and generic items. Please check it out [here](resources.md).