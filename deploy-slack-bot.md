#Deploy

Go to "Basic Information". Take a note of the `Client ID` and `Client Secret`.


![](slack-credentials.png)


From `recime-cli` type the folloiwng command (1.2.6+):

```
recime-cli configure platform slack 

```

This will bring the interactive prompt for setting app ID and secret key. If you are using older CLI then you can enter those as config variables in the following way:

RECIME_SLACK_CLIENT_ID:

```
recime-cli config set RECIME_SLACK_CLIENT_ID=PASTE_YOUR_CLIENT_ID

```

RECIME_SLACK_CLIENT_SECRET:

```
recime-cli config set RECIME_SLACK_CLIENT_SECRET=PASTE_YOUR_CLIENT_SECRET

```

These are used by `Recime` framework to initiate OAuth flow on behalf of the user.


Deploy the bot by typing the following command:

```
recime-cli deploy

```

