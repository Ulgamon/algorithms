class PriorityNode {
  priority: number;
  value: any;
  constructor(value: any, priority: number) {
    this.priority = priority;
    this.value = value;
  }
}

export default class PriorityQueue {
  values: Array<PriorityNode>;
  constructor() {
    this.values = [];
  }

  enqueue(value: any, priority: number) {
    let node = new PriorityNode(value, priority);
    this.values.push(node);
    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      // We now compare each nodes priority the less the priority value is the bigger priority is
      if (this.values[idx].priority < this.values[parentIdx].priority) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      }
      // if parent is not bigger than our node value we are in the right spot and we brak the loop
      else break;
    }
    return this;
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    // First we swap first and the last element
    this.swap(0, this.values.length - 1);
    // Then we pop last element as its priority is the biggest
    let maxPriorityNode = this.values.pop();
    // And now we need to return order and find new root...

    let idx = 0;

    while (2 * idx + 1 < this.values.length) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;

      if (this.values[rightIdx]) {
        let maxPriorityIdx =
          this.values[leftIdx].priority < this.values[rightIdx].priority
            ? leftIdx
            : rightIdx;

        if (this.values[idx].priority > this.values[maxPriorityIdx].priority) {
          this.swap(idx, maxPriorityIdx);
          idx = maxPriorityIdx;
        } else break;
      } else {
        if (this.values[idx].priority > this.values[leftIdx].priority) {
          this.swap(idx, leftIdx);
        } else break;
      }
    }
    return maxPriorityNode;
  }

  swap(j: number, k: number) {
    if (j < 0 || k < 0 || k >= this.values.length || j >= this.values.length)
      return false;
    let temp = this.values[j];
    this.values[j] = this.values[k];
    this.values[k] = temp;
    return true;
  }
}
