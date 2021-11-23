Announcement! I changed the release date to `unknown` due to business, sorry!

# DuGen

> An easy usage And simple module generator for your Node.js modular application

Overview before release, perfect to use with **nZk** (coming soon):

```js
const dugen = require("dugen");

// create module
dugen.createModule("faqs", {
  "./models": {
    source: "**MODULE_NAME**.model.js",
    layout: `function **MODULE_NAME** () {}`,
    transformCase: {
      // optional
      source: "snakeCase", // used for filename
      layout: "pascalCase", // used for pattern inside layout
    },
    overwrite: true, // default: false
  },
  "./services": "**MODULE_NAME**.service.js",
  "./controllers": "**MODULE_NAME**.controller.js",
  "./routes": "**MODULE_NAME**.route.js",
  "./validations": "**MODULE_NAME**.validation.js",
  "./test/cases": "**MODULE_NAME**.spec.js",
});

// delete module
dugen.deleteModule("faqs", {
  "./models": "**MODULE_NAME**.model.js",
  "./services": "**MODULE_NAME**.service.js",
  "./controllers": "**MODULE_NAME**.controller.js",
  "./routes": "**MODULE_NAME**.route.js",
  "./validations": "**MODULE_NAME**.validation.js",
  "./test/cases": "**MODULE_NAME**.spec.js",
});
```

more at [examples](./examples).

## API

List of transform case :

- camelCase =>` "testString"`
- capitalCase => `"Test String"`
- constantCase => `"TEST_STRING"`
- dotCase => `"test.string"`
- headerCase => `"Test-String"`
- noCase => `"test string"`
- paramCase => `"test-string"`
- pascalCase =>` "TestString"`
- pathCase => `"test/string"`
- sentenceCase => `"Test string"`
- snakeCase => `"test_string"`

Source of transform case API is from [change-case core](https://github.com/blakeembrey/change-case#core)
