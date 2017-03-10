# Deploy the Bot

Now the bot development is complete.  Next step is to deploy it to Recime cloud. In order to deploy the bot while you are still in the folder, type the following command:

```
recime-cli deploy
```

This will install all the dependencies, compile typescript, deploy it to recime and give you the bot URL. Take a note of the URL that will be given in the results, you will need it to configure the bot with Facebook as the callback URL.

```
INFO: Preparing.                                                                           
INFO: Compressing.                                                                         
INFO: Preparing to upload.                                                                 
28.18 KB / 28.18 KB [#########################################################] 100.00% 0s
INFO: Finalizing.                                                                          
\                                                                                          
=> https://developer.recime.io/bot/50d122f04e67f3a6452ba28b522da                                  

INFO: Bot publish successful.                                                                                                                                           
For any questions and feedback, please reach us at hello@recime.io                                                                                           
```
