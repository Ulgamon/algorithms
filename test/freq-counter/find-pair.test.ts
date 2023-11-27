import findPair from "../../src/freq-counter/find-pair";

describe('findPair function that search array of numbers for elements whose difference is n', () => {
    it("args ([6, 1, 4, 10, 2, 4], 2) should return true", () => {
        expect(findPair([6, 1, 4, 10, 2, 4], 2)).toEqual(true)
    })

    it("args ([8, 6, 2, 4, 1, 0, 2, 5, 13], 1) should return true", () => {
        expect(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)).toEqual(true)
    })

    it("args ([4, -2, 3, 10], -6) should return true", () => {
        expect(findPair([4, -2, 3, 10], -6)).toEqual(true)
    })
    
    it("args ([6, 1, 4, 10, 2, 4], 22) should return true", () => {
        expect(findPair([6, 1, 4, 10, 2, 4], 22)).toEqual(false)
    })
    
    it("args ([], 0) should return true", () => {
        expect(findPair([], 0)).toEqual(false)
    })

    it("args ([5, 5], 0) should return true", () => {
        expect(findPair([5, 5], 0)).toEqual(true)
    })

    it("args ([-4, 4], -8) should return true", () => {
        expect(findPair([-4, 4], -8)).toEqual(true)
    })

    it("args ([-4, 4], 8) should return true", () => {
        expect(findPair([-4, 4], 8)).toEqual(true)
    })

    it("args ([1, 3, 4, 6], -2) should return true", () => {
        expect(findPair([1, 3, 4, 6], -2)).toEqual(true)
    })

    it("args ([0, 1, 3, 4, 6], -2) should return true", () => {
        expect(findPair([0, 1, 3, 4, 6], -2)).toEqual(true)
    })
})
