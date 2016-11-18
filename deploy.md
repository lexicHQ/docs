# Deploy

After you have saved your files, type  in the following command (make sure your terminal/command line session is still in the project folder): While you are in the project folder. Since recime-cli looks package.json to prepare your bot.

    recime-cli deploy

This will build the bot, install any missing dependencies and give you the live url of the bot:

    bash-3.2$ recime-cli deploy                                                                
    INFO: Installing dependencies.                                                                                                                                       
    > alan-turing@1.0.1 preinstall /steve/bot/Turing                      
    > npm install -g typescript                                                                                                                                          
    /usr/local/bin/tsc -> /usr/local/lib/node_modules/typescript/bin/tsc                       
    /usr/local/bin/tsserver -> /usr/local/lib/node_modules/typescript/bin/tsserver             
    /usr/local/lib                                                                             
    └── typescript@2.0.8                                                                                                                                                       
    > alan-turing@1.0.1 build /Users/newrecimeuser/Source/Recime/bot/Turing                           
    > tsc                                                                                                                                                                             
    INFO: Preparing.                                                                           
    INFO: Compressing.                                                                         
    INFO: Preparing to upload.                                                                 
    28.18 KB / 28.18 KB [#########################################################] 100.00% 0s
    INFO: Finalizing.                                                                          
    \                                                                                          
    => https://recime.ai/bot/50d122fd3204e67f3a6452ba28b522da                                  
                                                                                              
    INFO: Bot publish successful.                                                                                                                                           
    For any questions and feedback, please reach us at hello@recime.ai.                                                                                            
    bash-3.2$  


After you have successfully deployed the bot, it is time to execute it.