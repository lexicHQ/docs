# **macOS - Prepping your System**

We won’t take a view of what code editor you use. Just make sure you have one like [Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/) or [Sublime Text ](https://www.sublimetext.com/3)and configure the editor to your liking

## **Recime package**

Install [Homebrew](http://brew.sh/) by pasting the below command at a Terminal prompt: \(_this can take a few minutes_\) `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

To install all the Go and Recime CLI, just run the following command, Homebrew takes care of the rest for you: `brew tap recime/tools && brew install recime-cli`

This can take a few minutes, it will install all the dependencies, configure path and install the CLI accessible globally. Once installation is complete, type `recime-cli` to verify:

```
Last login: Tue Nov  8 11:37:13 on ttys006
base-3.2$ recime-cli
Recime Command Line Interface
Version 1.0.5
Copyright 2016 Recime, Inc.
https://recime.ai

Usage:
  recime-cli [command]
Available Commands:
  build       Builds the bot module
  create      Scaffolds the bot from an interactive prompt
  deploy      Deploys the bot to Recime cloud
  init        Initializes your Recime account
  install     Installs the dependencies
Use "recime-cli [command] --help" for more information about a command.

For any questions and feedback, please reach us at hello@recime.ai.
bash-3.2$


```

You can now build your bot on Recime!

