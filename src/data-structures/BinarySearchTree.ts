import Queue from "./Queue";

class TreeNode<Type> {
  value: Type;
  left: TreeNode<Type> | null;
  right: TreeNode<Type> | null;

  constructor(value: Type) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree<Type> {
  root: TreeNode<Type> | null;

  constructor() {
    this.root = null;
  }

  insert(value: Type) {
    let node = new TreeNode<Type>(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current: TreeNode<Type> | null = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return this;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return this;
        }
      } else {
        return undefined;
      }
    }
  }

  find(value: Type) {
    if (!this.root) return undefined;
    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return undefined;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return undefined;
        }
      } else {
        // Because we checked if value is less and if it's bigger than node value only thing remaining is equal
        return current.value;
      }
    }
  }

  // Breadth First Search
  bfs() {
    if (!this.root) return [];
    let queue = new Queue();
    queue.add(this.root);
    let visited = [];

    while (queue.size) {
      let node = queue.poll();
      visited.push(node.value);
      if (node.left !== null) queue.add(node.left);
      if (node.right !== null) queue.add(node.right);
    }

    return visited;
  }

  // Depth First Search
  dfsPreOrder() {
    if (!this.root) return [];
    let elements: Array<Type> = [];

    const preOrder = (node: TreeNode<Type> | null) => {
      if (!node) return;
      elements.push(node.value);
      preOrder(node.left);
      preOrder(node.right);
    };

    preOrder(this.root);

    return elements;
  }
}
