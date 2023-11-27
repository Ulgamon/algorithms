import areThereDuplicates from "../../src/freq-counter/are-there-duplicates";

describe("Are there duplicates in arguments checker O(n).", () => {
  it("check with no duplicates args = (1, 2, 3, 4, 5, 6, 7, 8, 9, 'Hallo', 10, 11, 12, 13, 14)", () => {
    expect(
      areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, "Hallo", 10, 11, 12, 13, 14)
    ).toEqual(false);
  });

  it("check if no arguments are passed", () => {
    expect(areThereDuplicates()).toEqual(false);
  });

  it("should equal true passing args = (1, 2, 3, 4, 5, 6, 7, 8, 9, 'Hallo', 10, 11, 12, 13, 14, 'Hallo')", () => {
    expect(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, "Hallo", 10, 11, 12, 13, 14, "Hallo")).toEqual(true)
  })
});
