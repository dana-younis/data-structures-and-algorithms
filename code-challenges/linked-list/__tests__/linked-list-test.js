'use strict';


const LinkedList = require('../index.js');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('linked List test',()=>{
  it('Can successfully instantiate an empty linked list',()=>{
    let testList= new LinkedList;
    expect(testList.head).toEqual(null);
  });
  it(' insert into the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    expect(testList.head.value).toEqual(5);
  });
  it(' point to the first node in the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.head.value).toEqual(7);
  });
  it(' multiple nodes into the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });
  it('Will return true when finding a value within the linked list that exists',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.includes(6)).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.includes(8)).toEqual(false);
  });
  it(' insert into the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    expect(testList.head.value).toEqual(5);
  });
  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.toString()).toEqual(' {7} ->  {6} ->  {5} -> null');
  });

});
