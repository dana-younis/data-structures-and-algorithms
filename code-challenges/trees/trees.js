"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTreeSearch {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let exists = false;
    while (current && !exists) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        exists = true;
      }
    }

    if (!exists) {
      return undefined;
    }

    return exists;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const array = [];
    const preOrder = (node) => {
      array.push(node.value);

      if (node.left) {
        preOrder(node.left);
      }

      if (node.right) {
        preOrder(node.right);
      }
    };

    preOrder(this.root);

    return array;
  }

  preOrderTraversal() {
    const stack = [];

    if (this.root !== null) {
      stack[stack.length] = this.root;
    }

    const result = [];

    while (stack.length > 0) {
      let node = stack.pop();
      result[result.length] = node.value;

      if (node.right !== null) {
        stack[stack.length] = node.right;
      }

      if (node.left !== null) {
        stack[stack.length] = node.left;
      }
    }

    return result;
  }

  postOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    const array = [];

    const inOrder = (node) => {
      if (node.left) {
        inOrder(node.left);
      }

      array.push(node.value);

      if (node.right) {
        inOrder(node.right);
      }
    };

    let current = this.root;
    inOrder(current);

    return array;
  }

  stackTraversal() {
    let current = this.root;
    let stack = [];
    stack.push(current);

    while (stack.length) {
      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }

      current = stack.pop();
    }
  }

  breadth() {
    let current = this.root;
    let queue = [];

    queue.unshift(current);

    while (queue.length) {
      current = queue.pop();

      if (current.left) {
        queue.unshift(current.left);
      }

      if (current.right) {
        queue.unshift(current.right);
      }
    }
  }
  findMaxValue() {

    let current = this.root;

    const findMax = (node) => {
      if (node === null) {
        return;
      }

      let actualMax = node.value;
      let leftSideMax = findMax(node.left);
      let rightSideMax = findMax(node.right);

      if (leftSideMax > actualMax) {
        actualMax = leftSideMax;
      }

      if (rightSideMax > actualMax) {
        actualMax = rightSideMax;
      }

      return actualMax;
    };

    return findMax(current);
  }

}



module.exports = {
  BinaryTree: BinaryTree,
  BinaryTreeSearch: BinaryTreeSearch,
  Node: Node,
};
