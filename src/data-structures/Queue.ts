class QueueNode {
  value: any;
  next: QueueNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export default class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(value: any) {
    let node = new QueueNode(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }

  poll() {
    if (!this.first) return undefined;
    let value = this.first.value;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return value;
  }
}
