import { selectionSort } from "../../src/sorting/selectionSort";

selectionSort;

describe("Selection Sort Algorithm", () => {
  it("array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] needs to be sorted ascending.", () => {
    expect(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("array = [18, 23, -1, -100, 0, 1000, 32, 54, 765,123, 234, 234, 54, 6] needs to be sorted ascending.", () => {
    expect(
      selectionSort([
        18, 23, -1, -100, 0, 1000, 32, 54, 765, 123, 234, 234, 54, 6,
      ])
    ).toEqual([-100, -1, 0, 6, 18, 23, 32, 54, 54, 123, 234, 234, 765, 1000]);
  });
});
