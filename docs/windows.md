# Windows

The `Recime Command Line Tool` is available for install via [Chocolatey](https://chocolatey.org/). Choco is the package manager for Windows. 


To install chocolatey, please type the following command in PowerShell v3+ (Ensure `Get-ExecutionPolicy` is at least RemoteSigned):


    iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex


For installing chocolatey with Restricted TLS, please chekcout:
https://chocolatey.org/install


Next, type the following command to install `recime-cli`:

    choco install recime-cli -version 1.0.0


This will install all the dependencies, configure path and install the CLI accessible globally. Once installation is complete, type `recime-cli` to verify. Please do a `refreshenv` or restart the shell for changes to take effect and dependencies to initialize correctly.