import { sumZero } from "../../src/multiple-pointers/sumZero";

describe("Tests for sumZero", () => {
  it("[-3, -2, -1, 0, 1, 2, 3] should return [-3, 3]", () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  });

  it("[-2, 0, 1, 3] should return undefined", () => {
    expect(sumZero([-2, 0, 1, 3])).toEqual(undefined);
  });

  it("[1, 2, 3] should return undefined", () => {
    expect(sumZero([1, 2, 3])).toEqual(undefined);
  });

  it("[-3, -2, -1, 0, 1, 2, 3, 10, 20, 30, 40, 50] should return [-3, 3]", () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3, 10, 20, 30, 40, 50])).toEqual([
      -3, 3,
    ]);
  });
});
