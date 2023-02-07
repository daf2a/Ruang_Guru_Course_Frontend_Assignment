function checkDatatype(a) {
  if (typeof a === "string") {
    return "string";
  } else if (typeof a === "number") {
    return "number";
  } else if (typeof a === "boolean") {
    return "boolean";
  } else if (typeof a === "object") {
    if (a === null) {
      return "null";
    } else if (Array.isArray(a)) {
      return "array";
    } else {
      return "object";
    }
  } else if (typeof a === "function") {
    return "function";
  }
}

exports.checkDatatype = checkDatatype;
