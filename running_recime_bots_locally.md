# Debugging


While developing your bots, you will want to run your bot locally to test and debug before you deploy your bot.

In order to run bots locally from your bot project type the following command (`-w is an optional flag to track file changes`):

```bash
recime run -w

```

This will give an you an endpoint to test the bot locally. You can do `POST` to execute the bot. 


For example:

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"text\": \"What is the train schedule for Palo Alto?\"}" -w "\r\n" http://localhost:4000/bfe91172186fa6992ec0231ea4475d1b/v1
```       
