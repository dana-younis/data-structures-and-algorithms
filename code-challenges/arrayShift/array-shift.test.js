const insertShiftArray = require("./array-shift");
describe("testing array", () => {
  test("The second parameter should be inserted at the array middle", () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
    expect(insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
  });
});
