"use strict";

const fibIterative = require("./fib.js");

describe("TESTING Fib iterative function", () => {
  it('SUCCESSES "HAPPY PATH"', () => {
    expect(fibIterative(3)).toEqual(6);
    expect(fibIterative(-1)).toEqual(-2);
    expect(fibIterative(9)).toEqual(18);
  });

  it("Failure", () => {
    expect(fibIterative(3) === 5).toBeFalsy();
    expect(fibIterative(5) === 9).toBeFalsy();
  });

  it("Edge Cases", () => {
    expect(fibIterative([])).toEqual("not a number");
    expect(fibIterative("X")).toEqual("not a number");
  });
});
