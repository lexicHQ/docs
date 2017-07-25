# Supported Methods

Recime supports the following telegram methods (i.e. type) apart from just sending text:

* message (https://core.telegram.org/bots/api#message)
* photo (https://core.telegram.org/bots/api#photo)
* audio (https://core.telegram.org/bots/api#audio)
* document (https://core.telegram.org/bots/api#document)
* location (https://core.telegram.org/bots/api#location)
* venue (https://core.telegram.org/bots/api#venue)
* contact (https://core.telegram.org/bots/api#contact)


The response body should contain the `type` and the `payload` property where you can pass in fields from each type:

For example this is how you can send photo to your telegram bot:


```

{
	"type": "photo",
	"payload" : {
	  "photo" : "photo_url"
	}
}

```

We recommend you to use the `recime-bot-extension` npm package in order to construct messages. This is useful when you are targeting cross-channel bot for maximum code reusability and want to avoid human errors. 