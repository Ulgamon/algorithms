import { factorial } from "../../src/recursion/factorial";

describe("Recursive factorial function", () => {
  it("INPUT: 10; FUNCTION: !; OUTPUT: 3628800;", () => {
    expect(factorial(10)).toEqual(3628800);
  });

  it("INPUT: 1; FUNCTION: !; OUTPUT: 3628800;", () => {
    expect(factorial(1)).toEqual(1);
  });

  it("INPUT: 0; FUNCTION: !; OUTPUT: 3628800;", () => {
    expect(factorial(0)).toEqual(1);
  });

  it("INPUT: 13; FUNCTION: !; OUTPUT: 6227020800;", () => {
    expect(factorial(13)).toEqual(6227020800);
  });

  it("INPUT: 14; FUNCTION: !; OUTPUT: 87178291200;", () => {
    expect(factorial(14)).toEqual(87178291200);
  });
});
