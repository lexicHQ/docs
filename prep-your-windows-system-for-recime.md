# **Windows - Prepping your System**

We won’t take a view of what code editor you use. Just make sure you have one like [Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/) or [Sublime Text ](https://www.sublimetext.com/3)and configure the editor to your liking.

## **Recime-CLI install**

The Recime Command Line Tool is available for install via Chocolatey. Choco is the install package manager for Windows.

To install Chocolatey, please type the following command in PowerShell ISE v3+. To start Powershell ISE go to the Start Button, find, Type: “Powershell”, Right Click: **Windows PowerShell ISE, “execute as Administrator”**

\(Ensure `**Get-ExecutionPolicy** gives RemoteSigned in return)`

![](/assets/image01.png)

\(if not, go to “troubleshoot”\)

If it does, copy and paste the following command in the PowerShell ISE

```
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
```

Then

```
choco install recime-cli -version 1.0.4
```

This will install all the dependencies, configure path and install the CLI accessible globally, check if all packages are installed.

![](/assets/image00.png)

Once installation is complete, type `recime-cli to verify. Please do a refreshenv or restart the shell for changes to take effect and dependencies to initialize correctly.`

![](/assets/image03.png)

### **Troubleshoot**

If you run into rights issues while installing this on your Windows system, have a look at installing it with Windows PowerShell ISE or do a manual Chocolatey install as mentioned below.

### **Troubleshoot: Use PowerShell ISE as Administrator**

To start Powershell ISE go to the Startbutton, find, Type: “Powershell”, Right Click: Windows PowerShell ISE,“execute as Administrator”

Past the below command there and select “always run” when asked.

```
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
```

Then

```
choco install recime-cli -version 1.0.4
```

This will install all the dependencies, configure path and install the CLI accessible globally, check if all packages are installed.

###  **Troubleshoot: Manually install with Chocolatey**

For installing chocolatey with Restricted TLS, please install:[https://chocolatey.org/install](https://chocolatey.org/install)

Next, type the following command into Powershell ISE \(as Administrator\) to install recime-cli:

```
choco install recime-cli -version 1.0.4
```

This will install all the dependencies, configure path and install the CLI accessible globally. Once installation is complete, type recime-cli to verify. Please do a refreshenv or restart the shell for changes to take effect and dependencies to initialize correctly.
