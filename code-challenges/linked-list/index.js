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

  insert(value) {
    let node = new Node(value);

    if(this.head){
      node.next=this.head;
      this.head=node;
    }else{
      this.head=node;
    }
    return this ;
  }
  includes(value) {

    let currentNode = this.head;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;

  }
  toString() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str = `${str} {${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    return str+'null';
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    return this;
  }

}


module.exports = LinkedList;
