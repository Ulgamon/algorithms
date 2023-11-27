import constructNote from "../../src/freq-counter/construct-note";

describe("Tests for constructNote function.", () => {
    it("message = 'aa', letters = 'abc' should return false.", () => {
        expect(constructNote("aa", "abc")).toEqual(false)
    })

    it("message = 'abc', letters = 'dcba' should return false.", () => {
        expect(constructNote("abc", "dcba")).toEqual(true)
    })

    it("message = 'aabbcc', letters = 'bcabcaddff' should return false.", () => {
        expect(constructNote("aabbcc", "bcabcaddff")).toEqual(true)
    })

    it("message = 'aabbcc', letters = 'bc' should return false.", () => {
        expect(constructNote("aabbcc", "bc")).toEqual(false)
    })
})