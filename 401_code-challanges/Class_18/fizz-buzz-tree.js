"use strict";

// const BinaryTree = require("./binaryTree");
// const Node = require("./node");

function fizzBuzzTree(tree) {
  function replaceValue(value) {
    let newValue;
    if (value % 5 === 0 && value % 3 === 0) {
      newValue = "FizzBuzz";
    } else if (value % 5 === 0) {
      newValue = "Buzz";
    } else if (value % 3 === 0) {
      newValue = "Fizz";
    } else {
      newValue = value.toString();
    }
    return newValue;
  }

  function trevers(tree) {
    let result = {};
    for (const key in tree) {
      const value = tree[key];
      if (value && typeof value === "object") {
        result[key] = trevers(value);
      } else {
        result[key] = replaceValue(value);
      }
    }
    return result;
  }
  return trevers(tree);
}

// let tree = new BinaryTree();
// let node0= new Node(3);
// let node1=new Node(5);
// let node3=new Node(7);
// let node4=new Node(15);

// node0.children.push(node1);
// node0.children.push(node3);
// node0.children.push(node4);

// tree.root=node0;

// let result = fizzBuzzTree(tree);

// console.log(result.root.children[2]);
module.exports = fizzBuzzTree;
