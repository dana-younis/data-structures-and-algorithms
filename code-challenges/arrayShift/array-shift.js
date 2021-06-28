module.exports = function insertShiftArray(arr, val) {
  let arr2 = [];
  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    arr2.push(arr[i]);
  }
  arr2.push(val);
  for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
};
