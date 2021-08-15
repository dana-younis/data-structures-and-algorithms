"use strict";

const hashTable = require("../hashtable/hashTable");

let repeatedWord = (str) => {
  const newTable = new hashTable(1024);

  const words = str.match(/((\b[^\s]+\b)((?<=\.\w).)?)/g);

  for (let i = 0; i < words.length; i += 1) {
    let key = words[i].toLowerCase();

    if (newTable.contains(key)) {
      return newTable.get(key);
    }

    newTable.add(key, key);
  }
};

module.exports = repeatedWord;
