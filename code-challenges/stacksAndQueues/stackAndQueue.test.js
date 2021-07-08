'use strict';

let StackAndQueue = require('./stacks-and-queues');


describe('TESTING STACK AND QUEUE', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new StackAndQueue.Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new StackAndQueue.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.isEmpty()).toBeFalsy();

  });

  it('Can successfully pop off the stack', () => {
    let stack = new StackAndQueue.Stack();
    stack.push(1);
    stack.pop();


    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();

  });


  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new StackAndQueue.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();
    stack.pop();


    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();

  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new StackAndQueue.Stack();
    stack.push('X');
    stack.push('Z');

    stack.pop();


    expect(stack.peek()).toEqual('X');
    expect(stack.isEmpty()).toBeFalsy();

  });


  it('Can successfully instantiate an empty stack', () => {
    let stack = new StackAndQueue.Stack();



    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();

  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new StackAndQueue.Stack();




    expect(stack.pop()).toEqual(new Error('Can\'t Pop on Empty Stack!'));
    expect(stack.peek()).toEqual(new Error('Can\'t Peek on Empty Stack!'));

  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new StackAndQueue.Queue();
    queue.enqueue(1);

    expect(queue.front.value).toEqual(1);
    expect(queue.peek()).toEqual(1);

  });



  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new StackAndQueue.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.peek()).toEqual(1);
    expect(queue.isEmpty()).toBeFalsy();

  });


  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new StackAndQueue.Queue();
    queue.enqueue(1);
    let remove = queue.dequeue();

    expect(remove).toEqual(1);
    expect(queue.isEmpty()).toBeTruthy();

  });



  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new StackAndQueue.Queue();
    queue.enqueue(1);


    expect(queue.peek()).toEqual(1);
  });



  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new StackAndQueue.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();


    expect(queue.front).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new StackAndQueue.Queue();

    expect(queue.front).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });


  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new StackAndQueue.Queue();

    expect(queue.peek()).toEqual(new Error('Can\'t Peek on Empty Queue!'));
    expect(queue.dequeue()).toEqual(new Error('Can\'t Dequeue on Empty Queue!'));
  });


});
