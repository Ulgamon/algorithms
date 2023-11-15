export class NodeD<Type> {
  prev: NodeD<Type> | null;
  next: NodeD<Type> | null;
  value: Type;
  constructor(value: Type) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

export default class DoublyLinkedList {
  head: NodeD<any> | null;
  tail: NodeD<any> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    let valueNode = new NodeD<any>(value);
    // I added this.tail === null but it's implied because if length is 0 than this.tail is also 0
    if (this.length === 0 || this.tail === null) {
      this.head = valueNode;
      this.tail = valueNode;
    } else {
      this.tail.next = valueNode;
      valueNode.prev = this.tail;
      this.tail = valueNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0 || this.tail === null) return undefined;
    if (this.length === 1) this.head = null;
    this.tail = this.tail.prev;
    this.length--;
    return this;
  }

  shift() {
    if (this.length === 0 || this.head === null) return undefined;
    if (this.length === 1) this.tail = null;
    this.head = this.head.next;
    this.length--;
    return this;
  }

  unshift(value: any) {
    let valueNode = new NodeD<any>(value);
    // I added this.tail === null but it's implied because if length is 0 than this.tail is also 0
    if (this.length === 0 || this.head === null) {
      this.head = valueNode;
      this.tail = valueNode;
    } else {
      this.head.prev = valueNode;
      valueNode.next = this.head;
      this.head = valueNode;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;

    if (index <= Math.floor(this.length / 2)) {
      let current: any = this.head;
      for (let i = 0; i < this.length; i++) {
        if (i === index) {
          return current;
        }
        current = current.next;
      }
    } else {
      let current: any = this.tail;
      for (let i = this.length - 1; i >= 0; i--) {
        if (i === index) {
          return current;
        }
        current = current.prev;
      }
    }
  }

  set(value: any, index: number) {
    let node: NodeD<any> | undefined = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(value: any, index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) this.push(value);
    if (index === 0) this.unshift(value);

    let newNode = new NodeD<any>(value);
    let temp = this.get(index);
    temp.prev.next = newNode;
    newNode.prev = temp.prev;
    newNode.next = temp;
    temp.prev = newNode;
    this.length++;
    return this;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();

    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    this.length--;
    return this;
  }

  traverse() {
    if (this.length === 0) return undefined;
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
