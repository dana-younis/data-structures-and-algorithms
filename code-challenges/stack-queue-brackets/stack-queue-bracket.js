"use strict";

function validateBrackets(num) {
  let array = [];
  let open = ["(", "[", "{"];
  let close = [")", "]", "}"];

  for (let i = 0; i < num.length; i += 1) {
    if (open.indexOf(num[i]) >= 0) {
      array.push(num[i]);
    } else if (close.indexOf(num[i]) !== open.indexOf(array.pop())) {
      return false;
    }
  }

  if (array.length > 0) {
    return false;
  }

  return true;
}

module.exports = validateBrackets;
