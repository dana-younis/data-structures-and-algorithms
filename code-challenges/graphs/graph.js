"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      throw Error("Invalid Vertices");
    }

    let edgesArray = this.adjacencyList.get(startVertex);
    edgesArray.push(new Edge(endVertex, weight));
  }

  getNodes() {
    return this.adjacencyList;
  }

  breadthFirst(startVertex) {
    let queue = [];

    let visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);
    while (queue.length) {
      const current = queue.shift();

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        let neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);

          queue.push(neighborNode);
        }
      }
    }

    return visitedNodes;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log(vertex);
      throw Error("Invalid Vertex", vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
