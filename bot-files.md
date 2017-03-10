# Creating the Bot Project

After this we will run you through an interactive wizard that will scaffold the bot for you.

The `[create]` command will create the bot in the folder you’ve specified. It can be “.” (Current directory) or name of the folder (e.g. bot001) or absolute path “~/Source/Recime/bot001”

Note that if you leave the folder location blank, the command will create the folder in the folder you are currently in when typing the command. It will start the interactive prompt to scaffold the bot asking you to provide:

> Your bot name

Take an unique name, not too long (you have to type it several times down the road), but distinctive enough that you still know it after you build 120 bots.

> Description

Short excerpt what your bot is about

> License

By default, MIT. (What does MIT License entail?) `[enter]`    

You start the wizard by typing the following command in your windows or mac command prompt / terminal, while in your project folder:

       recime-cli create [FOLDER]


![](/create-bot.png)


After you have provided this information, the cli will create the bot folder for you. In the directory where you created this bot, you now have a folder structure with these files:

![](/file-structure.png)

Next, cd to your bot folder and open **MAIN.TS** with your **favorite editor**:

![](/assets/image06.png)


Before we continue to edit the MAIN.TS, we first need an API code from Flickr.
