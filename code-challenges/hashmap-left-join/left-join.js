"use strict";

function leftJoin(synonym, antonym) {
  const array1 = [];

  for (let i = 0; i < synonym.buckets.length; i += 1) {
    const array2 = [];

    if (synonym.buckets[i] !== undefined) {
      let key = Object.keys(synonym.buckets[i].head.value)[0];
      array2.push(key);
      array2.push(synonym.buckets[i].head.value[key]);

      if (antonym.contains(key)) {
        array2.push(antonym.get(key));
      } else {
        array2.push(null);
      }

      array1.push(array2);
    }
  }

  return array1;
}

module.exports = leftJoin;
