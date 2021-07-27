"use strict";

const binaryTree = require("../trees");
const fizzBuzzTree = require("../trees");
describe("Tests binary tree and binary tree search", () => {
  const bTree = new binaryTree.BinaryTree();

  test("Can successfully instantiate an empty tree", () => {
    expect(bTree.root).toEqual(null);
  });

  test("Can successfully instantiate a tree with a single root Node", () => {
    bTree.root = new binaryTree.Node(123);
    expect(bTree.root.value).toEqual(123);
  });

  test("Can successfully add a left child and right child to a single root Node", () => {
    bTree.root = new binaryTree.Node(123);
    bTree.root.left = new binaryTree.Node(345);
    bTree.root.right = new binaryTree.Node(567);

    expect(bTree.root.value).toEqual(123);
    expect(bTree.root.left.value).toEqual(345);
    expect(bTree.root.right.value).toEqual(567);
  });

  test("Can successfully return a collection from a preorder traversal", () => {
    bTree.root = new binaryTree.Node(1);
    bTree.root.left = new binaryTree.Node(2);
    bTree.root.right = new binaryTree.Node(3);

    const preOrder = bTree.preOrder();
    const preOrderTraversal = bTree.preOrderTraversal();

    expect(preOrder).toEqual([1, 2, 3]);
    expect(preOrderTraversal).toEqual([1, 2, 3]);
  });

  test("Can successfully return a collection from an inorder traversal", () => {
    bTree.root = new binaryTree.Node(10);
    bTree.root.left = new binaryTree.Node(2345234);
    bTree.root.right = new binaryTree.Node(44);

    const inOrder = bTree.inOrder();

    expect(inOrder).toEqual([2345234, 10, 44]);
  });

  test("Can successfully return a collection from a postorder traversal", () => {
    bTree.root = new binaryTree.Node(9);
    bTree.root.left = new binaryTree.Node(5);
    bTree.root.right = new binaryTree.Node(2);

    const postOrder = bTree.postOrder();

    expect(postOrder).toEqual([5, 2, 9]);
  });
  test("Finds the largest number in the tree", () => {
    bTree.root = new binaryTree.Node(9);
    bTree.root.left = new binaryTree.Node(5);
    bTree.root.right = new binaryTree.Node(2);

    const max = bTree.findMaxValue();

    expect(max).toEqual(9);
  });

  test("Finds the largest number in the tree again", () => {
    bTree.root = new binaryTree.Node(2);

    bTree.root.left = new binaryTree.Node(1);
    bTree.root.left.left = new binaryTree.Node(3);

    bTree.root.right = new binaryTree.Node(5);
    bTree.root.right = new binaryTree.Node(2342);

    const max = bTree.findMaxValue();

    expect(max).toEqual(2342);
  });
});
describe("K-Ary tree tests,", () => {
  const tree = new fizzBuzzTree.tree(2);

  tree.root = new fizzBuzzTree.Node(15, tree.k);

  tree.root.pointer[0] = new fizzBuzzTree.Node(2, tree.k);
  tree.root.pointer[1] = new fizzBuzzTree.Node(4, tree.k);
  tree.root.pointer[2] = new fizzBuzzTree.Node(6, tree.k);

  tree.root.pointer[0].pointer[0] = new fizzBuzzTree.Node(8, tree.k);
  tree.root.pointer[0].pointer[1] = new fizzBuzzTree.Node(10, tree.k);
  tree.root.pointer[1].pointer[0] = new fizzBuzzTree.Node(12, tree.k);

  const fbTree = fizzBuzzTree.fizzBuzzTree(tree);

  // === === k-ary tests start here === === //
  test("If the value is divisible by 3, replace the value with “Fizz”", () => {
    expect(fbTree.root.pointer[2].value).toEqual("Fizz");
  });

  test("If the value is divisible by 5, replace the value with “Buzz”", () => {
    expect(fbTree.root.pointer[0].pointer[1].value).toEqual("Buzz");
  });

  test("If the value is divisible by 3 and 5, replace the value with “FizzBuzz”", () => {
    // console.log(fbTree.root.value);
    expect(fbTree.root.value).toEqual("FizzBuzz");
  });

  test("If the value is not divisible by 3 or 5, simply turn the number into a String.", () => {
    // console.log(fbTree.root.pointer[1].value);
    expect(fbTree.root.pointer[1].value).toEqual("4");
  });
});
