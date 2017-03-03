# Command Line

Open up your command line terminal, make sure you are in the project folder and then use curl to execute the following command:

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"text\": \"INPUT TEXT\"}" https://developer.recime.io/bot/TURING -w "\r\n"
```

Please replace the `INPUT TEXT` with `Alan Turing` and `TURING` with the `UID` of the bot that you deployed.

The return JSON will be:

```
{
    "text":"Hello Alan Turing"
}
```



