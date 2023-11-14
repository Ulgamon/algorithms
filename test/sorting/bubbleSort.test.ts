import { bubbleSort } from "../../src/sorting/bubbleSort";

describe("Bubble Sort Algorithm", () => {
  it("array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] needs to be sorted ascending.", () => {
    expect(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
