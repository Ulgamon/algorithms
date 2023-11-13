import { countUniqueValues } from "../../src/multiple-pointers/countUniqueValues";

describe("Count Unique Values Challenge", () => {
  it("takes [1, 1, 1, 1, 1, 2] should return 2", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
  });

  it("takes [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] should return 7", () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  it("takes [] should return 0", () => {
    expect(countUniqueValues([])).toBe(0);
  });

  it("takes [-2, -1, -1, 0, 1] should return 4", () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});
