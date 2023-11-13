import { validAnagram } from "../../src/freq-counter/anagram";

describe("Test whether strings are anagrams", () => {
  it("Empty strings should match", () => {
    expect(validAnagram("", "")).toEqual(true);
  });

  it("Strings 'aaz', 'zza' shouldn't match", () => {
    expect(validAnagram("aaz", "zza")).toEqual(false);
  });

  it("Strings 'anagram', 'nanagram' should match", () => {
    expect(validAnagram("anagram", "nanagram")).toEqual(false);
  });

  it("Strings 'rat', 'car' shouldn't match", () => {
    expect(validAnagram("rat", "car")).toEqual(false);
  });

  it("Strings 'awesome', 'awesom' shouldn't match", () => {
    expect(validAnagram("awesome", "awesom")).toEqual(false);
  });

  it("Strings 'qwerty', 'qeywrt' should match", () => {
    expect(validAnagram("qwerty", "qeywrt")).toEqual(true);
  });

  it("Strings 'texttwisttime', 'timetwisttext' should match", () => {
    expect(validAnagram("texttwisttime", "timetwisttext")).toEqual(true);
  });
});
