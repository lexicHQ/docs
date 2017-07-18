# Deploy

After you have saved your files, type  in the following command \(make sure your terminal/command line session is still in the project folder\): While you are in the project folder. Since recime-cli looks for package.json to prepare your bot.

```
recime-cli deploy
```

This will build the bot, install required dependencies, create the container and configure the integrations for you:

```
bash-3.2$ recime-cli deploy                                                                
INFO: Installing dependencies.                                                                                  ...
...                                                                                                                                                                    
INFO: Preparing...                                                                          
INFO: Compressing.                                                                         
INFO: Preparing to upload.                                                                 
28.18 KB / 28.18 KB [#########################################################] 100.00% 0s
INFO: Finalizing.                                                                          
\                                                                                          
=> https://bot.recime.io/bot/50d122fd3204e67f3a6452ba28b522da/v1                                 

[INFO] Successs.                                                                                                                                           
For any questions and feedback, please reach us at hello@recime.io.                                                                                            
bash-3.2$  
```

Once, completed you should get the `endpoint` to set as `webhook`. For `facebook` or `viber` it will automatically configure and deploy the bot for you.
