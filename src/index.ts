// import SinglyLinkedList, { Node2 } from "./data-structures/SinglyLinkedList";
// import { validAnagram } from "./freq-counter/anagram";
// import { mergeSort } from "./sorting/mergeSort";

import PriorityQueue from "./data-structures/PriorityQueue";

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

// import Stack from "./data-structures/Stack";

// const stack = new Stack();

// console.log(stack.pop());
// console.log(stack.push("TOJA"));
// console.log(stack.push("HAHAHAAH"));
// console.log(stack.push("HIHIHDASDNsdnka"));
// console.log(stack.pop());

// import Queue from "./data-structures/Queue";

// const queue = new Queue();

// console.log(queue.poll());
// console.log(queue.add("HAHAAHHA"));
// console.log(queue.add("gfdgfdssdf"));
// console.log(queue.add("&*(&*)()(*)(*"));
// console.log(queue.add("8979754564456"));
// console.log(
//   queue.poll(),
//   queue.poll(),
//   queue.poll(),
//   queue.poll(),
//   queue.poll()
// );

// import BinarySearchTree from "./data-structures/BinarySearchTree";

// let bst = new BinarySearchTree<number>();

// console.log(bst.insert(10));
// console.log(bst.insert(6));
// console.log(bst.insert(15));
// console.log(bst.insert(3));
// console.log(bst.insert(8));
// console.log(bst.insert(20));
// console.log(bst.find(60));
// console.log(bst.find(100));

// console.log(bst.bfs());

// console.log(bst.dfsPreOrder());
// console.log(bst.dfsPostOrder());
// console.log(bst.dfsInOrder());

// import MaxBinaryHeap from "./data-structures/MaxBinaryHeap";

// let bh = new MaxBinaryHeap();

// console.log(bh.insert(10));
// console.log(bh.insert(15));
// console.log(bh.insert(1));
// console.log(bh.insert(2));
// console.log(bh.insert(3));
// console.log(bh.insert(4));
// console.log(bh.insert(5));
// console.log(bh.insert(6));
// console.log(bh.insert(7));
// console.log(bh.insert(8));
// console.log(bh.insert(9));
// console.log(bh.insert(11));
// console.log(bh.insert(100));

// console.log(bh.extractMax());
// console.log(bh.extractMax());
// console.log(bh.extractMax());
// console.log(bh.extractMax());

let bh = new PriorityQueue();

console.log(bh.enqueue("Hello", 10));
console.log(bh.enqueue("HIHI", 15));
console.log(bh.enqueue("Justin", 1));
console.log(bh.enqueue("Gora", 2));
console.log(bh.enqueue("Evropa", 3));
console.log(bh.enqueue("1247", 4));
console.log(bh.enqueue(1000, 5));
console.log(bh.enqueue(666, 6));
console.log(bh.enqueue("Tripaloski", 7));
console.log(bh.enqueue("Bolivija", 8));
console.log(bh.enqueue("Ambis", 9));
console.log(bh.enqueue(false, 11));
console.log(bh.enqueue(true, 100));

console.log(bh.dequeue());
console.log(bh.dequeue());
console.log(bh.dequeue());
console.log(bh.dequeue());
