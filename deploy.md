# Deploy
In order to deploy the bot, type in the folloiwng command from within your project folder:

```
rbp deploy
```

This will build, install required dependencies, create the container and configure the integrations:

```
bash-3.2$ rbp deploy                                                                
INFO: Installing dependencies.                                                                                  ...
...                                                                                                                                                                    
INFO: Preparing...                                                                          
INFO: Compressing.                                                                         
INFO: Preparing to upload.                                                                 
28.18 KB / 28.18 KB [#########################################################] 100.00% 0s
INFO: Finalizing.                                                                          
                                                                                          
=> https://bot.recime.io/bot/50d122fd3204e67f3a6452ba28b522da/v1                                 

[INFO] Successs.                                                                                                                                           
For any questions and feedback, please reach us at hello@recime.io.                                                                                            
bash-3.2$  
```

Once completed, you should get the `webhook` which you can paste in your browser navigation to see if everything is configured correctly.

Next, go to [console.recime.io](https://console.recime.io) and publish the bot.

![](publish.png)


