const utils = (exports = module.exports);

utils._isObject = (val) => {
  if (val === null) {
    return false;
  }
  return typeof val === "function" || typeof val === "object";
};

utils._isString = (obj) => {
  return Object.prototype.toString.call(obj) === "[object String]";
};
