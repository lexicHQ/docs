# Command Line Interface

`Recime Command Line Interface` requires [node](https://nodejs.org/en/) (version >=6.9.1) and uses `npm` as package manager.


## Installation

To Install the Command Line Interface, type the following command:

```shell
npm install -g recime
```

Once the CLI is installed correctly, type the following to verify:

```shell
rbp --version
```

## Setup

Go to [console.recime.io/my-account](https://console.recime.io/my-account) and copy the API key as shown:

![](profile-new.png)


Type the following command from your terminal:

```shell
rbp login
```

This will prompt for the token you have copied earlier. Paste and hit "enter". 

## Create a Bot

Create a bot by typing the following command:

```bash
rbp create my-folder
```

This will take you through a small wizard and the create the bot in your [dashboard](https://console.recime.io) and the necessary config files to run the bot locally from the specific working directory.

## Debug

Connect to a supported channel to debug the bot locally. In order to configure a channel, please type the following command:

```bash
rbp config facebook|viber|telegram
```
It will ask you the credentials for the platform and configure it for debugging.

Debug the bot by typing the following:

```bash
rbp run 
```

Start chatting with your bot (e.g. Facebook) and you will see the logs in the console. 

_Warning: You will have to re-connect your bot from the publish tab once you connect it locally._

 It is also possible to test the API from command line with `curl`: 

```bash
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -XPOST -d "{{'{'}}\"text\": \"Hi\"{{'}'}}" -w "\r\n" 'PASTE_YOUR_URL_HERE_FROM_RUN`
```

## Bot Icon

In the working directory, there is a default `icon.png`. Update and type the following command to publish your own:

```bash
rbp publish
```

The recommended icon size for a bot is 80x80.


## Roadmap
Publish re-usable custom modules using the Command Line Interface.