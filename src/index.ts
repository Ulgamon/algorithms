// import SinglyLinkedList, { Node2 } from "./data-structures/SinglyLinkedList";
// import { validAnagram } from "./freq-counter/anagram";
// import { mergeSort } from "./sorting/mergeSort";

// console.log(validAnagram("iceman", "cineag"));

// let arr = mergeSort([
//   18, 23, -1, -100, 0, 1000, 32, 54, 765, 123, 234, 234, 54, 6,
// ]);

// console.log(arr.length);

// let list = new SinglyLinkedList();

// list.push("TOJICA");
// console.log(list);
// list.push(123);
// list.push(222);
// list.push(333);
// list.push(444);

// console.log(list, list.head, list.tail);
// list.shift();
// list.unshift("MMMM SE VRACA");
// console.log(list);

// list.traverse();
// console.log(list.get(2), "GET METHOD");
// console.log(list.set(2, 1000), "SET METHOD");
// list.insert(0, "HAHAHA");
// list.remove(1);
// list.traverse();
// console.log(list);
// list.reverse();
// list.traverse();

// import DoublyLinkedList from "./data-structures/DoublyLinkedList";

// let dll = new DoublyLinkedList();

// console.log(dll);

// dll.push("HAHAHAHHA");
// console.log(".");
// dll.traverse();
// dll.push("TOJICA");
// console.log(".");
// dll.traverse();
// dll.push(888);
// console.log("./");
// dll.traverse();
// dll.unshift(66);
// console.log(".");
// dll.traverse();
// dll.unshift("KOLICA");
// console.log(".");
// dll.traverse();
// console.log(dll.get(4));
// console.log(dll.set(50, 4));
// dll.traverse();
// dll.insert("EEEEEEEEEEEE", 3);
// console.log(".");
// dll.traverse();
// dll.remove(3);
// console.log(".");
// dll.traverse();

import Stack from "./data-structures/Stack";

const stack = new Stack();

console.log(stack.pop());
console.log(stack.push("TOJA"));
console.log(stack.push("HAHAHAAH"));
console.log(stack.push("HIHIHDASDNsdnka"));
console.log(stack.pop());

import Queue from "./data-structures/Queue";

const queue = new Queue();

console.log(queue.poll());
console.log(queue.add("HAHAAHHA"));
console.log(queue.add("gfdgfdssdf"));
console.log(queue.add("&*(&*)()(*)(*"));
console.log(queue.add("8979754564456"));
console.log(
  queue.poll(),
  queue.poll(),
  queue.poll(),
  queue.poll(),
  queue.poll()
);
