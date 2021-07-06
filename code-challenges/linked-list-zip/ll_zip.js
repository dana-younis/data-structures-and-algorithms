'use strict';

const { Node, LinkedList } = require('./../linked-list/index');

function zipLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;

  let newLinkedList = new LinkedList();
  newLinkedList.head = new Node(current1.head);

  let count = 0;

  while (current1 || current2) {
    if (count === 0 && current1) {
      newLinkedList.append(current2.head);
      count++;
    } else {
      if (current1) newLinkedList.append(current1.head);
      if (current2) newLinkedList.append(current2.head);
    }

    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }

  newLinkedList.size++;

  return newLinkedList;
}

module.exports = zipLists;
