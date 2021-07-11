'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues');


let stack1 = new Stack();
let stack2 = new Stack();

class PseudoQueue {
  constructor() {
    this.top = null;
  }

  enqueue(value) {
    stack1.push(value);
  }

  dequeue() {
    if (stack1.isEmpty()) {
      console.error('Nothing in stack 1');
    }
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop());
    }
    let poppedVal = stack2.pop();
    return poppedVal;
  }
}
