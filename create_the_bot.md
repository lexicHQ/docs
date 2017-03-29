# Create the Bot

Create the bot by typing the following command in your windows or mac command prompt / terminal, while in your project folder:

    recime-cli create [FOLDER_NAME] --lang=typescript


By default the CLI will create the bot using `es6 (the latest update to the Javascript language)`. However, you can choose ether `es6` or `typescript` as language options. The samples in this document are created using `typescript`. Therefore, we have set it as `typescript`

*ES6 template is supported from 1.2.1+*

![](create-bot.png)

After you have provided this information, the cli will create the bot folder for you. In the directory where you created this bot, you now have a folder structure with these files:

![](file-structure.png)


Next, `cd` to your bot folder and open `main.ts` with your favorite editor:

![](faceboo-main.png)


Before we continue to edit the `main.ts`, we first need an API code from Flickr
