"use strict";

const BinaryTree = require("../binaryTree");
const Node = require("../node");

describe("Comparing two file different file directories are same", () => {
  it("if ", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;
    // -----------------------------------------
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);

    node1.left = node2;
    node1.right = node3;
    node3.left = node4;
    node3.right = node5;

    let tree2 = new BinaryTree();

    tree2.root = node1;
    expect(tree.sameStructure(one,node1)).toEqual(true);
  });

  it("Comparing two file different file directories are not same", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;
    // -----------------------------------------
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);

    node1.left = node2;
    node1.right = node3;
 

    let tree2 = new BinaryTree();

    tree2.root = node1;
    expect(tree.sameStructure(one,node1)).toEqual(false);
  });
});
