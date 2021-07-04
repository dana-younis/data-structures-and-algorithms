'use strict';

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

  append(value) {
    const newNode = new Node(value);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current;
      if (current === this.head) {
        this.head = newNode;
      } else {
        previous.next = newNode;
      }
    }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (!current) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  toString() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(',');
  }
}

module.exports = { Node, LinkedList };
