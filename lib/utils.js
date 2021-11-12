const utils = (exports = module.exports);

utils._isObject = (obj) => {
  if (obj === null) {
    return false;
  }
  return typeof obj === "function" || typeof obj === "object";
};

utils._isString = (str) => {
  return Object.prototype.toString.call(str) === "[object String]";
};
