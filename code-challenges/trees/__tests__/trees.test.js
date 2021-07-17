"use strict";

const binaryTree = require("../trees");

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
});
