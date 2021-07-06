'use strict';

const { LinkedList } = require('./../linked-list/index');
const zipLists = require('./ll_zip');

const ll = new LinkedList();
const ll2 = new LinkedList();

describe('testing the linked list', () => {
  test('init node class', () => {
    ll.insert(100);
    ll.append(300);
    ll2.insert(200);
    ll2.append(400);
    zipLists(ll, ll2);
    expect(zipLists(ll, ll2).head.head).toEqual(100);
    expect(zipLists(ll, ll2).head.next.head).toEqual(200);
  });
});
