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
}
