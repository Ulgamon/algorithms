import { quickSort, pivot } from "../../src/sorting/quickSort";

describe("Quick Sort Algorithm", () => {
  it("array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] needs to be sorted ascending.", () => {
    expect(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("array = [18, 23, -1, -100, 0, 1000, 32, 54, 765,123, 234, 234, 54, 6] needs to be sorted ascending.", () => {
    expect(
      quickSort([18, 23, -1, -100, 0, 1000, 32, 54, 765, 123, 234, 234, 54, 6])
    ).toEqual([-100, -1, 0, 6, 18, 23, 32, 54, 54, 123, 234, 234, 765, 1000]);
  });

  it("array = [] needs to be returned.", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("array = [1] needs to be returned.", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it("Pivot for the Quick Sort Algorithm input [5, 2, 1, 8, 4, 7, 6, 3]", () => {
    expect(pivot([5, 2, 1, 8, 4, 7, 6, 3])).toEqual(4);
  });
});
