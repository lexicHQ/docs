#Deploy

Go to "Basic Information". Take a note of the `Client ID` and `Secret`.


![](slack-credentials.png)


From `recime` type the folloiwng command (1.2.6+):

```
recime platform config slack 

```

This will start the interactive prompt for setting `Client ID` and `Secret`. These are used by `Recime` framework to initiate the `OAuth` flow on behalf of the user.


Deploy the bot by typing the following command:

```
recime deploy

```

