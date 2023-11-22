import Queue from "./Queue";

export default class Graph {
  adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value: any) {
    if (!this.adjacencyList[value]) this.adjacencyList[value] = [];
  }

  addEdge(first: any, second: any) {
    let vertex1 = this.adjacencyList[first];
    let vertex2 = this.adjacencyList[second];

    if (
      vertex1 === undefined ||
      vertex1.includes(second) ||
      vertex2 === undefined ||
      vertex2.includes(first)
    )
      return false;

    vertex1.push(second);
    vertex2.push(first);

    return this;
  }

  removeEdge(first: any, second: any) {
    let vertex1 = this.adjacencyList[first];
    let vertex2 = this.adjacencyList[second];

    if (
      vertex1 === undefined ||
      !vertex1.includes(second) ||
      vertex2 === undefined ||
      !vertex2.includes(first)
    )
      return false;

    vertex1 = vertex1.filter((el: any) => el !== second);
    this.adjacencyList[first] = vertex1;

    vertex2 = vertex2.filter((el: any) => el !== first);
    this.adjacencyList[second] = vertex2;
    return this;
  }

  removeVertex(key: any) {
    let vertex = this.adjacencyList[key];

    if (vertex === undefined) return false;
    while (vertex.length > 0) {
      let ver = vertex.pop();
      this.removeEdge(key, ver);
    }

    delete this.adjacencyList[key];
    return this;
  }

  dfsRecursive(start: any) {
    const result: any[] = [];
    const visited: any = {};

    const dfs = (vertex: any) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((element: any) => {
        if (!visited[element]) {
          return dfs(element);
        }
      });
    };

    dfs(start);
    return result;
  }

  dfsIterative(start: any) {
    const stack: any[] = [...this.adjacencyList[start]];
    const result: any[] = [];
    const visited: any = {};

    result.push(start);
    visited[start] = true;

    while (stack.length > 0) {
      let el = stack.pop();
      if (!visited[el]) {
        visited[el] = true;
        result.push(el);
        stack.splice(stack.length, 0, ...this.adjacencyList[el]);
      }
    }
    return result;
  }

  bfsIterative(start: any) {
    const queue = new Queue();
    queue.add(start);
    const result: any[] = [];
    const visited: any = {};

    while (queue.size > 0) {
      const node = queue.poll();
      if (!visited[node]) {
        result.push(node);
        visited[node] = true;
        const adjList = this.adjacencyList[node];
        for (let i = 0; i < adjList.length; i++) {
          queue.add(adjList[i]);
        }
      }
    }
    return result;
  }
}
