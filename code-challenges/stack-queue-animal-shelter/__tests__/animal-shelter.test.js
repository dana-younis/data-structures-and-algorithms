'use strict';


const animal = require('../stack-queue-animal-shelter');



const dog = new animal.Node('dog');
const cat = new animal.Node('cat');
const Lion = new animal.Node('Lion');


describe('tests for animal shelter code', () => {

  const animalShelter = new animal.stackQueueAnimalShelter();


  animalShelter.enqueue(Lion);
  animalShelter.enqueue(cat);
  animalShelter.enqueue(dog);


  test('a cat is dequeued', () => {

    expect(animalShelter.dequeue('cat')).toEqual('cat');
  });


  test(' a dog is dequeued', () => {

    expect(animalShelter.dequeue('dog')).toEqual('dog');
  });


  test(' only dogs and cats are in the queue', () => {

    expect(animalShelter.enqueue(Lion)).toEqual('enter cat or dog');
  });



});
