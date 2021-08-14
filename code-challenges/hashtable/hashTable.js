"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }

    previous.next = new Node(value);
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  add(key, value) {
    let hash = this.hash(key);

    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();

    let entry = { [key]: value };
    this.buckets[hash].insert(entry);
  }
  get(key) {
    let hash = this.hash(key);
    return this.buckets[hash].head.value[key];
  }
  contains(key) {
    let hash = this.hash(key);
    return this.buckets[hash] ? true : false;
  }
  hash(key) {
    let arrayOfCharacters = key.split("");
    let sumOfAsciiValues = arrayOfCharacters.reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    return (sumOfAsciiValues * 599) % this.size; // 201
  }
}

module.exports = HashTable;
