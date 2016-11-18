# Understanding Recime

With Recime you can build every bot you want, you only have to focus on the bot functionality, we will take care of the plumbing. For instance a simple CalTrain schedule bot to see the next departing CalTrain from a station near you.

Your bots that you will build are hosted on the Recime platform and are easy to integrate with Facebook, Slack, WeChat, Skype, etc. At a basic level, bots hosted on Recime platform accept and return JSON. 

Execute the following `curl` in your terminal app:

    curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"message\": \"Show me the schedule for Palo Alto\"}" -w "\r\n" https://recime.ai/bot/caltrain

The results will look like this:

![](terminal.png)

The return JSON will look like this:

    {"station":"Palo Alto","trains":[
      {"direction":"Southbound","schedule":[{"id":"152","type":"Local","arrivalTime":"0:30 min"},{"id":"254","type":"Limited","arrivalTime":"1:02 min"},{"id":"156","type":"Local","arrivalTime":"1:33 min"}]},
      {"direction":"Northbound","schedule":[{"id":"155","type":"Local","arrivalTime":"0:21 min"},{"id":"257","type":"Limited","arrivalTime":"0:44 min"},{"id":"159","type":"Local","arrivalTime":"1:12 min"}]}
    ]} 

This was just a quick example, now go back to the Getting Started Guide to start building your own bot
