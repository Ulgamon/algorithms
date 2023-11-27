import isSubsequence from "../../src/multiple-pointers/is-subsequence";

describe("isSubsequenxe function", () => {
  it("args = ('sing', 'sting') should return true", () => {
    expect(isSubsequence("sing", "sting")).toEqual(true);
  });

  it("args = ('abc', 'abracadabra') should return true", () => {
    expect(isSubsequence("abc", "abracadabra")).toEqual(true);
  });

  it("args = ('abc', 'acb') should return false", () => {
    expect(isSubsequence("abc", "acb")).toEqual(false);
  });

  it("args = ('', 'cat') should return true", () => {
    expect(isSubsequence("", "cat")).toEqual(true);
  });
});
