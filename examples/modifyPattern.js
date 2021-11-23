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

dugen.modifyPattern(`%MN%`);

dugen.createModule(`${moduleName}`, {
  "./models": "%MN%.model.js",
  "./services": "%MN%.service.js",
  "./controllers": "%MN%.controller.js",
  "./routes/api": "%MN%.route.js",
  "./validations": "%MN%.validation.js",
  "./test/cases": "%MN%.spec.js",
});
