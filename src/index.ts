import SinglyLinkedList, { Node2 } from "./data-structures/SinglyLinkedList";
import { validAnagram } from "./freq-counter/anagram";
import { mergeSort } from "./sorting/mergeSort";

console.log(validAnagram("iceman", "cineag"));

let arr = mergeSort([
  18, 23, -1, -100, 0, 1000, 32, 54, 765, 123, 234, 234, 54, 6,
]);

console.log(arr.length);

let list = new SinglyLinkedList();

list.push("TOJICA");
console.log(list);
list.push(123);
list.push(222);
list.push(333);
list.push(444);

console.log(list, list.head, list.tail);
list.shift();
list.unshift("MMMM SE VRACA");
console.log(list);

list.traverse();
console.log(list.get(2), "GET METHOD");
console.log(list.set(2, 1000), "SET METHOD");
list.insert(0, "HAHAHA");
list.remove(1);
list.traverse();
console.log(list);
list.reverse();
list.traverse();
