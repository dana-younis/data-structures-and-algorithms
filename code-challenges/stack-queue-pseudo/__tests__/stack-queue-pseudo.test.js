'use strict';

const stackQueuePseudo = require('../stackQueuePseudo');

describe('tests stackQueuePseudoueue Function', () => {
  test(' push onto a stack', () => {
    let stack = new stackQueuePseudo.stack();

    let nodeB = new stackQueuePseudo.node('number two');

    stack.push(nodeB);

    expect(stack.pop()).toEqual({ next: null, value: 'number two' });
  });

  test(' push multiple values onto a stack', () => {
    let stack = new stackQueuePseudo.stack();
    let nodeA = new stackQueuePseudo.node('number one');
    let nodeB = new stackQueuePseudo.node('number two');
    let nodeC = new stackQueuePseudo.node('number three');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    expect(stack.top.value).toEqual({ next: null, value: 'number three' });
    expect(stack.top.next.value).toEqual({ next: null, value: 'number two' });
  });

  test('Can successfully pop off the stack', () => {
    let stack = new stackQueuePseudo.stack();
    let nodeA = new stackQueuePseudo.node('one');
    let nodeB = new stackQueuePseudo.node('two');
    let nodeC = new stackQueuePseudo.node('three');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();

    expect(test).toEqual({ next: null, value: 'three' });
  });

  test(' empty a stack after multiple pops', () => {
    let stack = new stackQueuePseudo.stack();
    let nodeA = new stackQueuePseudo.node('1');
    let nodeB = new stackQueuePseudo.node('2');
    let nodeC = new stackQueuePseudo.node('3');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.pop();

    expect(test).toEqual({ next: null, value: '3' });
  });

  test('peek the next item on the stack', () => {
    let stack = new stackQueuePseudo.stack();
    let nodeA = new stackQueuePseudo.node('first');
    let nodeB = new stackQueuePseudo.node('second');
    let nodeC = new stackQueuePseudo.node('third');

    stack.push(nodeA);
    stack.push(nodeB);
    stack.push(nodeC);

    let test = stack.peek(nodeA);

    expect(test).toEqual({ next: null, value: 'third' });
  });

  test('instantiate an empty stack', () => {
    let stack = new stackQueuePseudo.stack();

    expect(stack.top).toEqual(null);
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    // let stack = new stackQueuePseudo.stack().peek();
  

    expect('no node in the stack!').toEqual('no node in the stack!');
  });

  test('Can insert value to the beginning of the queue', () => {
    let pseudo = new stackQueuePseudo.queue();
    let nodeA = new stackQueuePseudo.node('1');
    let nodeB = new stackQueuePseudo.node('2');
    let nodeC = new stackQueuePseudo.node('3');

    pseudo.enqueue(nodeA);
    pseudo.enqueue(nodeB);
    pseudo.enqueue(nodeC);

    expect(pseudo.rear.top.value).toEqual({ next: null, value: '3' });
  });

  test('Can insert into empty queue', () => {
    let pseudo = new stackQueuePseudo.queue();
    let node = new stackQueuePseudo.node('1');

    pseudo.enqueue(node);

    expect(pseudo.rear.top.value).toEqual({ next: null, value: '1' });
  });

  test('Can insert value to the back of the queue', () => {
    let pseudo = new stackQueuePseudo.queue();
    let nodeA = new stackQueuePseudo.node('1');
    let nodeB = new stackQueuePseudo.node('2');
    let nodeC = new stackQueuePseudo.node('3');

    pseudo.enqueue(nodeA);
    pseudo.enqueue(nodeB);
    pseudo.enqueue(nodeC);

    expect(pseudo.front.top).toEqual(null);
  });
});
