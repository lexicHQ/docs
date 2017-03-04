# Full Source Code

The full source code for the bot to copy/paste in your `main.ts`:

```
import util = require('util');
import request = require('request');


export class Bot {
  private args: any;

  constructor(args:Object){
    this.args = args;
  }

  get extract(){
    return "message.text";
  }

  execute(cb:any){
    let args = this.args;
    var relevance = 0.0;

    var text = "404";

    if (args.apiai){
        let result  = args.apiai.result;

        if (result.action === 'input.unknown'){
          return cb({
              text : result.fulfillment.speech
          });
        } else {
          if (result.action === 'input.person'){
              let fullname = result.parameters['full-name'];

              if (fullname['given-name'] && fullname['last-name']){
                text = util.format("%s %s", fullname['given-name'], fullname['last-name']);
              }
              else{
                  text = fullname;
              }
          }
          else if (result.action === 'input.place'){
              text = result.parameters['geo-city'];
          }
        }
    }

    let url = util.format("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=%s&text=%s&page=1&format=json&nojsoncallback=1&sort=relevance", process.env.API_KEY, encodeURIComponent(text));

    request.get(url, (error, response, body)=>{
        if (error){
          throw error;
        }

        let photos = JSON.parse(body).photos;

        if (photos && photos.photo.length > 0){
          let photo = photos.photo[0];
          let url = util.format("http://farm%s.staticflickr.com/%s/%s_%s.jpg", photo.farm, photo.server, photo.id, photo.secret);


          let result = {
            attachment: {
              type: "image",
              payload: {
                url: url
              }
            }
          };
          cb(result);
        } else {
          cb({
              text : util.format("Sorry could not find anything for \"%s\"", args.message.text)
          });
        }
    });
  }
}

```

Set your flickr `API_KEY` that you have copied earlier using CLI's `recime-cli config set KEY=VALUE`.

Please checkout [Configuration and Config Vars](config_vars.md) for instructions.


Save your **MAIN.TS**
