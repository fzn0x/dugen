# DuGen

> An easy usage And simple module generator for your Node.js modular application

Overview before release date `7/11/2021`, perfect to use with **nZk** (coming soon):

```js
const mg = require("dugen");

mg.createModule("faqs", {
  "./models": "**MODULE_NAME**.model.js",
  "./services": "**MODULE_NAME**.service.js",
  "./controllers": "**MODULE_NAME**.controller.js",
  "./routes": "**MODULE_NAME**.route.js",
  "./validations": "**MODULE_NAME**.validation.js",
  "./test/cases": "**MODULE_NAME**.spec.js",
});

mg.deleteModule("faqs", {
  "./models": "**MODULE_NAME**.model.js",
  "./services": "**MODULE_NAME**.service.js",
  "./controllers": "**MODULE_NAME**.controller.js",
  "./routes": "**MODULE_NAME**.route.js",
  "./validations": "**MODULE_NAME**.validation.js",
  "./test/cases": "**MODULE_NAME**.spec.js",
});
```
