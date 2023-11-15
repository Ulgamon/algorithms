import { createSecureContext } from "tls";

export class Node2<Type> {
  value: Type;
  next: any;

  constructor(value: Type) {
    this.value = value;
    this.next = null;
  }
}

export default class SinglyLinkedList {
  head: Node2<any> | null;
  tail: Node2<any> | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  push(element: any) {
    let node = new Node2<any>(element);
    if (this.length === 0 || this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current: Node2<any> = this.head;
    let newTail: Node2<any> = current;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
    this.length === 0 ? (this.tail = null) : null;
    return this;
  }

  unshift(value: any) {
    let newVal: Node2<any> = new Node2<any>(value);
    if (!this.head) {
      this.head = newVal;
      this.tail = newVal;
    } else {
      newVal.next = this.head;
      this.head = newVal;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (this.length <= index || this.head === null || index < 0)
      return undefined;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return current;
      current = current.next;
    }
  }

  set(index: number, value: any) {
    if (this.length <= index || this.head === null || index < 0)
      return undefined;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        current.value = value;
        return current;
      }
      current = current.next;
    }
  }

  insert(index: number, value: any) {
    if (this.length < index || this.head === null || index < 0) return false;
    // in this special cases I would rather to have O(1)
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let previous = this.head;
    let current = this.head;
    for (let i = 1; i < this.length; i++) {
      current = current.next;
      if (i === index) {
        previous.next = new Node2<any>(value);
        this.length++;
        previous.next.next = current;
        return true;
      }
      previous = current;
    }
    return false;
  }

  remove(index: number) {
    if (this.length <= index || this.head === null || index < 0) return false;
    // in this special cases I would rather to have O(1)
    if (index === this.length) return !!this.pop();
    if (index === 0) return !!this.shift();

    let previous = this.head;
    let current = this.head;
    for (let i = 1; i < this.length; i++) {
      current = current.next;
      if (i === index) {
        this.length--;
        previous.next = current.next;
        return true;
      }
      previous = current;
    }
    return false;
  }

  reverse() {
    if (this.length <= 1 || this.head === null) {
      return this;
    }
    let first = this.head;
    this.tail = first;
    let second = first.next;
    first.next = null;
    let third = second.next;
    while (third !== null) {
      second.next = first;
      first = second;
      second = third;
      third = third.next;
    }
    second.next = first;
    this.head = second;
    return this;
  }
}
