const mg = (exports = module.exports);

const fs = require("fs");
const path = require("path");

mg.moduleName = "";
mg.defaultPattern = "**MODULE_NAME**";
mg.directoryStructure = {};

mg._isObject = (val) => {
  if (val === null) {
    return false;
  }
  return typeof val === "function" || typeof val === "object";
};

mg._isString = (obj) => {
  return Object.prototype.toString.call(obj) === "[object String]";
};

mg._compile = () => {
  if (this._isObject(mg.directoryStructure)) {
    return Object.keys(mg.directoryStructure).map((key) => {
      mg.directoryStructure[key] = mg.directoryStructure[key].replace(
        mg.defaultPattern,
        mg.moduleName
      );
    });
  }

  throw new ReferenceError(
    `Parameter two require object! ${typeof directoryStructure} given.`
  );
};

mg._deleteModule = () => {
  for (var directory in mg.directoryStructure) {
    const dirPath = directory;
    const fileName = mg.directoryStructure[directory];

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

mg._createModule = () => {
  for (var directory in mg.directoryStructure) {
    const dirPath = directory;
    const fileName = mg.directoryStructure[directory];

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

mg.modifyPattern = (pattern) => {
  if (mg._isString(pattern)) mg.defaultPattern = pattern || mg.defaultPattern;
};

mg.deleteModule = (moduleName, directoryStructure) => {
  mg.moduleName = moduleName;
  mg.directoryStructure = directoryStructure;

  mg._compile();

  mg._deleteModule();
};

mg.createModule = (moduleName, directoryStructure) => {
  mg.moduleName = moduleName;
  mg.directoryStructure = directoryStructure;

  mg._compile();

  mg._createModule();
};
