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

utils._escapeStringRegexp = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
