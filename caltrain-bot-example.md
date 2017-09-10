# Recime Demo Bot

The following `caltrain` bot pulls real-time schedule for a given station. Paste the following in your `macOS` terminal to get the latest schedule for your station:

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"text\": \"What is the train schedule for Palo Alto?\"}" -w "\r\n" https://us-west-1-bot.recime.io/bfe91172186fa6992ec0231ea4475d1b/v1
```

**Response:**

```json
{"station":"Palo Alto","trains":[

{"direction":"Southbound","schedule":[{"id":"152","type":"Local","arrivalTime":"0:30 min"},{"id":"254","type":"Limited","arrivalTime":"1:02 min"},{"id":"156","type":"Local","arrivalTime":"1:33 min"}]},

{"direction":"Northbound","schedule":[{"id":"155","type":"Local","arrivalTime":"0:21 min"},{"id":"257","type":"Limited","arrivalTime":"0:44 min"},{"id":"159","type":"Local","arrivalTime":"1:12 min"}]}

]}
```

Alternatively, you can use tools like [POSTMAN](https://www.getpostman.com/) and make `POST` request to the following endpoint:

```
https://us-west-1-bot.recime.io/bfe91172186fa6992ec0231ea4475d1b/v1
```

This will be your input body:

```json
{
  "text" : "What is the train schedule for Palo Alto?"
}

```


If you would like to contribute, please fork it from here to get started:

[https://github.com/Recime/caltrain-bot-sample.git](https://github.com/Recime/caltrain-bot-sample.git)
