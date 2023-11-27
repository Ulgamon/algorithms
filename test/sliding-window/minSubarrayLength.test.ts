import minSubArrayLen from "../../src/sliding-window/minSubarrayLength";

describe("minSubarrayLength function", () => {
  it("args = ([2, 3, 1, 2, 4, 3], 7) should return 2", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
  });

  it("args = ([2, 1, 6, 5, 4], 9) should return 2", () => {
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2);
  });

  it("args = ([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) should return 1", () => {
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(
      1
    );
  });
});
