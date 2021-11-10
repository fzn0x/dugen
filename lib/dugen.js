const utils = require("./utils.js");
const dugen = (exports = module.exports);

const fs = require("fs");
const path = require("path");

dugen.moduleName = "";
dugen.defaultPattern = "**MODULE_NAME**";
dugen.directoryStructure = {};

dugen._transpile = () => {
  if (utils._isObject(dugen.directoryStructure)) {
    return Object.keys(dugen.directoryStructure).map((key) => {
      dugen.directoryStructure[key] = dugen.directoryStructure[key].replace(
        dugen.defaultPattern,
        dugen.moduleName
      );
    });
  }

  throw new ReferenceError(
    `Parameter two require object! ${typeof directoryStructure} given.`
  );
};

dugen._deleteModule = () => {
  for (var directory in dugen.directoryStructure) {
    const dirPath = directory;
    const fileName = dugen.directoryStructure[directory];

    const modulePath = path.join(dirPath, fileName);

    if (fs.existsSync(modulePath)) {
      fs.promises
        .unlink(modulePath)
        .then(() => console.log(`${modulePath} was deleted successfully.`))
        .catch((err) => {
          throw err;
        });
    }
  }
};

dugen._createModule = () => {
  for (var directory in dugen.directoryStructure) {
    const dirPath = directory;
    const fileName = dugen.directoryStructure[directory];

    const modulePath = path.join(dirPath, fileName);

    if (!fs.existsSync(modulePath)) {
      fs.promises
        .writeFile(modulePath, "")
        .then(() => {
          console.log(`${modulePath} created successfully.`);
        })
        .catch((err) => {
          throw err;
        });
    }
  }
};
