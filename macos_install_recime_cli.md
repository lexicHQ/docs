# **macOS - Install Recime-CLI**

To install [Homebrew](http://brew.sh/) type the following command:

```
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
```

Once completed, install the CLI from `recime/tools` tap:

```
brew tap recime/tools && brew install recime-cli

```

This can take a few minutes, it will install all the dependencies and configure the `PATH`. Once installation is complete, type `recime-cli` to verify:

```
Last login: Tue Nov  8 11:37:13 on ttys006
base-3.2$ recime-cli
Recime Command Line Interface
Version 1.1.9
Copyright 2017 Recime, Inc.
https://developer.recime.io

Usage:
  recime-cli [command]
Available Commands:
  build       Builds the bot module
  create      Scaffolds the bot from an interactive prompt
  deploy      Deploys the bot to Recime cloud
  init        Initializes your Recime account
  install     Installs the dependencies
Use "recime-cli [command] --help" for more information about a command.

For any questions and feedback, please reach us at hello@recime.io.
bash-3.2$


```

If you already have CLI installed previously, please do `brew upgrade recime-cli` to get the latest version:

```
brew tap recime/tools && brew upgrade recime-cli

```
