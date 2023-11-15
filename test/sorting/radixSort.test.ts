import {
  radixSort,
  getDigit,
  digitCount,
  mostDigits,
} from "../../src/sorting/radixSort";

describe("Quick Sort Algorithm", () => {
  it("array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] needs to be sorted ascending.", () => {
    expect(radixSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("array = [18, 23, 1, 100, 0, 1000, 32, 54, 765,123, 234, 234, 54, 6] needs to be sorted ascending.", () => {
    expect(
      radixSort([18, 23, 1, 100, 0, 1000, 32, 54, 765, 123, 234, 234, 54, 6])
    ).toEqual([0, 1, 6, 18, 23, 32, 54, 54, 100, 123, 234, 234, 765, 1000]);
  });

  it("array = [] needs to be returned.", () => {
    expect(radixSort([])).toEqual([]);
  });

  it("array = [1] needs to be returned.", () => {
    expect(radixSort([1])).toEqual([1]);
  });

  it("getDigit(1000, 0) should return 0", () => {
    expect(getDigit(1010, 0)).toEqual(0);
  });

  it("getDigit(990, 1) should return 9", () => {
    expect(getDigit(990, 1)).toEqual(9);
  });

  it("getDigit(880, 2) should return 8", () => {
    expect(getDigit(880, 2)).toEqual(8);
  });

  it("getDigit(222333344444555, 5) should return 4", () => {
    expect(getDigit(222333344444555, 5)).toEqual(4);
  });

  it("getDigit(-880, 2) should return 8", () => {
    expect(getDigit(-880, 2)).toEqual(8);
  });

  it("digitCount(1111111111) should return 10", () => {
    expect(digitCount(1111111111)).toEqual(10);
  });

  it("digitCount(9) should return 1", () => {
    expect(digitCount(9)).toEqual(1);
  });

  it("digitCount(444) should return 3", () => {
    expect(digitCount(444)).toEqual(3);
  });

  it("maxDigits([11111111, 234, 53, 54, 0, 10]) should return 3", () => {
    expect(mostDigits([11111111, 234, 53, 54, 0, 10])).toEqual(8);
  });

  it("maxDigits([1, 2, 3, 4, 5, 666, 7777]) should return 3", () => {
    expect(mostDigits([1, 2, 3, 4, 5, 666, 7777])).toEqual(4);
  });
});
