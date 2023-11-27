import sameFrequency from "../../src/freq-counter/same-frequency";

describe("sameFrequency function", () => {
    it("args = (34, 14) should return false", () => {
        expect(sameFrequency(34, 14)).toEqual(false)
    })

    it("args = (3589578, 5879385) should return true", () => {
        expect(sameFrequency(3589578, 5879385)).toEqual(true)
    })
});
