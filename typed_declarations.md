# TypeScript Declarations

When you are importing external modules like for the [flickr](flickr_full_code.md) example, we are importing `request` module. You will need the proper typescript declarations to build correctly.

For our `flickr` example, you will have to install following defintions:

**node:**

```
npm install --save @types/node

```

**request (`npm install --save request`):**

```
npm install --save @types/request

```

The --save flag will add the module reference in `package.json` under `dependencies` property; this will ensure that `recime-cli`  installs any missing packages during deployment.


If you want to know more, please checkout `https://docs.npmjs.com/cli/` on how to install and save modules using node package manager.


For more on declaration files, please check it out here for further information:

[https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)





