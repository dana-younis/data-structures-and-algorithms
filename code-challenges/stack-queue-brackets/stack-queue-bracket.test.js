"use strict";

const brackets = require("./stack-queue-bracket");

describe("tests for multi bracket validation", () => {
  test("brackets  match", () => {
    const test = brackets("{}");

    expect(test).toBeTruthy();
  });

  test("brackets  match", () => {
    const test = brackets("{}(){}");

    expect(test).toBeTruthy();
  });

  test("brackets  match", () => {
    const test = brackets("(){}[[]]");

    expect(test).toBeTruthy();
  });

  test(" return false for mismatched brackets", () => {
    const test = brackets("[({}]");

    expect(test).toBeFalsy();
  });

  test(" return false for mismatched brackets", () => {
    const test = brackets("(](");

    expect(test).toBeFalsy();
  });

  test(" return false for mismatched brackets", () => {
    const test = brackets("{(})");

    expect(test).toBeFalsy();
  });
});
