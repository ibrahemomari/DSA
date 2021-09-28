"use strict";
const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(start, end) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log("Vertex dose not exist or invalid vertex");
    }
    const list = this.adjacencyList.get(start);
    list.push(new Edge(end));
  }

  display() {
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      console.log("vertex = ", vertex, "his neighbors: ", edge);
    }
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log("Vertex dose not exist or invalid vertex");
      return;
    }
    return this.adjacencyList.get(vertex);
  }

  getNode() {
    try {
      let collectionOfNodes = [];
      for (const [vertex, edge] in this.adjacencyList.entries()) {
        collectionOfNodes.push(vertex);
      }
      return collectionOfNodes;
    } catch (error) {
      console.log(error.message);
    }
  }

  size() {
    try {
      let size = 0;
      for (const vertex of this.adjacencyList.keys()) {
        size++;
      }
      return size;
    } catch (error) {
      console.log(error.message);
    }
  }

  BreadthFirst(node){
   const queue=[];
   const visited=[];
   

   queue.unshift(node);
   visited.push(node);
   while (queue.length) {
     const current=queue.pop();
     const neighbors=this.getNeighbors(current);
     for (const neighbor of neighbors) {
       const vertex=neighbor.vertex;
       if(visited.includes(vertex)){
         continue;
       }else{
         visited.push(vertex);
         queue.unshift(vertex);
       }
     }
   }
   let result=visited.map(el=>{
     return el.value
   })
   return result.toString();
  }

  depthFirst(node){
    const visitedNode=new Set();
    visitedNode.add(node);

    const travers=(current,visited)=>{
      visitedNode.add(current);
      const neighbors=this.getNeighbors(current);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          travers(neighbor.vertex,visited);
        }
      }
    }
    travers(node,visitedNode);
    let result='';
    for (const iterator of visitedNode) {
      result+=iterator.value+" , ";
    }
    return result;
  }
}

const myGraph = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);
    myGraph.addVertex(three);
    myGraph.addVertex(four);
    myGraph.addVertex(five);

    myGraph.addDirectedEdge(zero, two);
    myGraph.addDirectedEdge(two, four);
    myGraph.addDirectedEdge(two, three);
    myGraph.addDirectedEdge(four, five);

    console.log(myGraph.depthFirst(two));



module.exports=Graph;
