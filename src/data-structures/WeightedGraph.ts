export default class WeightedGraph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: any) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: any, vertex2: any, weight: number) {
    let ver1 = this.adjacencyList[vertex1];
    let ver2 = this.adjacencyList[vertex2];

    if (ver1 === undefined || ver2 === undefined) return undefined;

    ver1.push({ node: vertex2, weight: weight });
    ver2.push({ node: vertex1, weight: weight });
  }
}

// {
//     "A": [{node: "B", weight: 10}]
// }
