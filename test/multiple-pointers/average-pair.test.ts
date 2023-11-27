import averagePair from "../../src/multiple-pointers/average-pair";

describe("find if there is pair of numbers that have average equal to the given average", () => {
    it("args = ([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) should be true", () => {
        expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toEqual(true)
    })

    it("args = ([-1, 0, 3, 4, 5, 6], 4.1)) should be true", () => {
        expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toEqual(false)
    })

    it("args = ([], 4)) should be true", () => {
        expect(averagePair([], 4)).toEqual(false)
    })
})