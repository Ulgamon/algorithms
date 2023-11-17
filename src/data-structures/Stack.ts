// Stack made with singly linked list
class NodeStack {
  value: any;
  next: NodeStack | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack {
  head: NodeStack | null;
  tail: NodeStack | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    const nodeValue = new NodeStack(value);
    if (this.head === null || this.length === 0) {
      this.head = nodeValue;
      this.tail = nodeValue;
    } else {
      nodeValue.next = this.head;
      this.head = nodeValue;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0 || this.head === null) return undefined;
    let value = this.head.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return value;
  }
}
