# Recime Demo Bot

With Recime you can build every bot you want, you only have to focus on the bot functionality, we will take care of the plumbing. For instance a simple Caltrain schedule bot to see the next departing Caltrain from a station near you.

Your bots that you will build are hosted on the Recime platform and are easy to integrate with Facebook, Slack, WeChat, Skype, etc. At a basic level, bots hosted on Recime platform accept and return JSON.

For example fire up your favorite [command line tool](https://en.wikipedia.org/wiki/Command-line_interface) \(or [POSTMAN](https://www.getpostman.com/)\) and execute the following to see a sample CalTrain schedule bot:

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"text\": \"What is the train schedule for Palo Alto?\"}" -w "\r\n" https://bot.recime.io/bfe91172186fa6992ec0231ea4475d1b/v1
```

This will give you a JSON response similar to this:

```
{"station":"Palo Alto","trains":[

{"direction":"Southbound","schedule":[{"id":"152","type":"Local","arrivalTime":"0:30 min"},{"id":"254","type":"Limited","arrivalTime":"1:02 min"},{"id":"156","type":"Local","arrivalTime":"1:33 min"}]},

{"direction":"Northbound","schedule":[{"id":"155","type":"Local","arrivalTime":"0:21 min"},{"id":"257","type":"Limited","arrivalTime":"0:44 min"},{"id":"159","type":"Local","arrivalTime":"1:12 min"}]}

]}
```

If you would like to contribute, please fork it from here to get started:

[https://github.com/Recime/caltrain-bot-sample.git](https://github.com/Recime/caltrain-bot-sample.git)
