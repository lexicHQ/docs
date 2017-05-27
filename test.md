# Test

You can test your bot either running it locally or after deploying it. Please check out [Debugging](running_recime_bots_locally.md) section for information on how test and debug your bot locally.

Open up your command line terminal, make sure you are in the project folder and then use curl to execute the following command:

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"text\": \"INPUT TEXT\"}" URL -w "\r\n"
```

Please replace the `INPUT TEXT` with `Alan Turing` and `URL` with the bot endpoint that you have just deployed.

The return JSON will be:

```
{
    "text":"Hello Alan Turing"
}

```

You can also use [POSTMAN](https://www.getpostman.com/) that allows you to test APIs using GUI and available both as `chrome` extension and installation package.
