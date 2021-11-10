const dugen = require("./lib/dugen.js");
const utils = require("./lib/utils.js");

dugen.modifyPattern = (pattern) => {
  if (utils._isString(pattern))
    dugen.defaultPattern = pattern || dugen.defaultPattern;
};

dugen.deleteModule = (moduleName, directoryStructure) => {
  dugen.moduleName = moduleName;
  dugen.directoryStructure = directoryStructure;

  dugen._transpile();

  dugen._deleteModule();
};

dugen.createModule = (moduleName, directoryStructure) => {
  dugen.moduleName = moduleName;
  dugen.directoryStructure = directoryStructure;

  dugen._transpile();

  dugen._createModule();
};

exports = module.exports = dugen;
