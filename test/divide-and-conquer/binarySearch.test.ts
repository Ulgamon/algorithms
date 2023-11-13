import { binarySearch } from "../../src/divide-and-conquer/binarySearch";

describe("Binary search algorithm", () => {
  it("input: ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9) => 8 ", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)).toBe(8);
  });
});
