const dugen = require("../");

// get string type variable
let moduleName = process.argv.length >= 2 ? process.argv[2] : undefined;

// string type checking
if (
  typeof moduleName !== "string" &&
  !(moduleName instanceof String) // also check from `String` object
) {
  throw new ReferenceError("Module name need to be defined as string!");
}

dugen.createModule(`${moduleName}`, {
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
  "./routes/api": "**MODULE_NAME**.route.js",
  "./validations": "**MODULE_NAME**.validation.js",
  "./test/cases": "**MODULE_NAME**.spec.js",
});
