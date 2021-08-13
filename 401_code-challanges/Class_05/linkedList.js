const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this.head;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(`the ${value} is founded in list`);
        return true;
      }
      current = current.next;
    }
    console.log(`the ${value} is not found in list`);
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error("the linked list does not exisit");
    }

    let format = "";
    while (current) {
      format += `{${current.value}}-->`;
      current = current.next;
    }
    return (format += "NULL");
  }
}

let list = new LinkedList();
list.insert(1);
list.append(2);


console.log(list.toString());
console.log(list.includes(2));




module.exports=LinkedList