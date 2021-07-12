"use strict";

class Node {
  constructor(type) {
    this.type = type;
  }
}
class stackQueueAnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    if (animal.type === "dog") {
      if (this.isEmpty()) {
        this.front = animal;
        this.rear = animal;
      } else {
        this.rear.next = animal;
        this.rear = animal;
      }
    } else if (animal.type === "cat") {
      if (this.isEmpty()) {
        this.front = animal;
        this.rear = animal;
      } else {
        this.rear.next = animal;
        this.rear = animal;
      }
    } else {
      return "enter cat or dog";
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      let Shark = this.front;
      this.front = Shark.next;
      Shark.next = null;
      return Shark.type;
    } else if (pref === "cat") {
      let Shark = this.front;
      this.front = Shark.next;
      Shark.next = null;
      return Shark.type;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  stackQueueAnimalShelter: stackQueueAnimalShelter,
  Node: Node,
};
