"use strict";

module.exports = function fibonacci(num) {
  if (typeof num === typeof 2) {
    let first = num;
    let second = 0;
    let result = second;

    for (let i = 0; i <= 2; i++) {
      result = first + second;
      first = second;
      second = result;
    }

    return result;
  } else {
    return "not a number";
  }
};
