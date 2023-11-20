export default class MaxBinaryHeap {
  values: Array<number>;
  constructor() {
    this.values = [];
  }

  insert(value: number) {
    this.values.push(value);
    let valueIndex = this.values.length - 1;

    let parentIndex = 0;
    while (valueIndex > 0) {
      parentIndex = this.getParent(valueIndex);
      if (this.values[parentIndex] < this.values[valueIndex]) {
        this.swap(valueIndex, parentIndex);
        valueIndex = parentIndex;
      } else {
        break;
      }
    }
    return this;
  }

  extractMax() {
    if (this.values.length === 0) return undefined;
    this.swap(0, this.values.length - 1);
    let max = this.values.pop();
    let rootIndex = 0;

    while (2 * rootIndex + 1 < this.values.length) {
      let leftIdx = 2 * rootIndex + 1;
      let rightIdx = 2 * rootIndex + 2;

      if (this.values[leftIdx] && this.values[rightIdx]) {
        let maxIdx =
          this.values[leftIdx] > this.values[rightIdx] ? leftIdx : rightIdx;

        if (this.values[maxIdx] > this.values[rootIndex]) {
          this.swap(maxIdx, rootIndex);
          rootIndex = maxIdx;
        } else {
          break;
        }
      } else {
        // I'm using else because from the wkile condition I know that my first child is defined
        if (this.values[leftIdx] > this.values[rootIndex]) {
          this.swap(leftIdx, rootIndex);
          rootIndex = leftIdx;
        } else {
          break;
        }
      }
    }
    return this;
  }

  getParent(index: number) {
    if (index >= this.values.length || index < 0 || index === 0) return 0;
    let parentIndex = Math.floor((index - 1) / 2);
    return parentIndex;
  }

  swap(j: number, k: number) {
    if (j >= this.values.length || k >= this.values.length || j < 0 || k < 0)
      return false;
    let temp = this.values[j];
    this.values[j] = this.values[k];
    this.values[k] = temp;
    return true;
  }
}

// Mutating function
