const utils = require("./utils.js");
const changeCase = require("change-case");

const dugen = (exports = module.exports);

const fs = require("fs");
const path = require("path");

dugen.moduleName = "";
dugen.defaultPattern = "**MODULE_NAME**";
dugen.directoryStructure = {};
dugen.sourceTransformCase = "paramCase";
dugen.layoutTransformCase = "pascalCase";

dugen._transpile = () => {
  if (utils._isObject(dugen.directoryStructure)) {
    return Object.keys(dugen.directoryStructure).map((key) => {
      if (utils._isObject(dugen.directoryStructure[key])) {
        if (
          !(
            dugen.directoryStructure[key].hasOwnProperty("source") &&
            dugen.directoryStructure[key].hasOwnProperty("layout")
          )
        ) {
          throw new ReferenceError(`source and layout object is required!`);
        }

        const sourceTransformCase =
          changeCase[dugen.sourceTransformCase || "paramCase"];
        const layoutTransformCase =
          changeCase[dugen.layoutTransformCase || "pascalCase"];

        dugen.directoryStructure[key].source = dugen.directoryStructure[
          key
        ].source.replace(
          dugen.defaultPattern,
          sourceTransformCase(dugen.moduleName)
        );

        dugen.directoryStructure[key].layout = dugen.directoryStructure[
          key
        ].layout.replace(
          dugen.defaultPattern,
          layoutTransformCase(dugen.moduleName)
        );
      } else {
        dugen.directoryStructure[key] = dugen.directoryStructure[key].replace(
          dugen.defaultPattern,
          dugen.moduleName
        );
      }
    });
  }

  throw new ReferenceError(
    `Parameter two require object or string! ${typeof directoryStructure} given.`
  );
};

dugen._deleteModule = () => {
  for (var directory in dugen.directoryStructure) {
    const dirPath = directory;
    const filePath = dugen.directoryStructure[directory];

    const modulePath = path.join(dirPath, filePath);

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
    const filePath = dugen.directoryStructure[directory];

    const hasOptions = utils._isObject(filePath);
    const modulePath = path.join(
      dirPath,
      hasOptions ? filePath.source : filePath
    );
    const layout = hasOptions ? filePath.layout : "";
    const overwrite = hasOptions ? filePath.overwrite : false;

    if (overwrite || !fs.existsSync(modulePath)) {
      fs.promises
        .writeFile(modulePath, layout)
        .then(() => {
          console.log(`${modulePath} created successfully.`);
        })
        .catch((err) => {
          throw err;
        });
    }
  }
};
