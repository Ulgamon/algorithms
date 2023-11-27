import findAllDuplicates from "../../src/freq-counter/findAllDuplicates";

describe("Take array on integers and return array of integers that contains duplicates.", () => {
    it("Takes [4, 3, 2, 1, 0] should return []", () => {
        expect(findAllDuplicates([4, 3, 2, 1, 0])).toEqual([])
    })

    it("Takes [4, 3, 2, 1, 0, 1, 2, 3] should return [1, 2, 3]", () => {
        expect(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])).toEqual([1, 2, 3])
    })
});