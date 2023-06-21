import {alcoholAmountCalc, alcoholInOrganism, alcoholTotalPure, timeToBeSober} from "./AlcoholFunctions";

describe('alcohol functions test', () => {
    it('alcoholAmountCalc tests', () => {
        expect(alcoholAmountCalc(20, 20)).toBe(1)
        expect(alcoholAmountCalc(20, 40)).toBe(2)
        expect(alcoholAmountCalc(20, 60)).toBe(3)
        expect(alcoholAmountCalc(20, 10)).toBe(0)
    })
    it('alcoholTotalPure tests', () => {
        expect(alcoholTotalPure(0.3, 500, 1)).toBe(150)
        expect(alcoholTotalPure(0.4, 500, 1)).toBe(200)
        expect(alcoholTotalPure(0.3, 1000, 1)).toBe(300)
        expect(alcoholTotalPure(0.3, 500, 2)).toBe(300)
        expect(alcoholTotalPure(0.3, 500, 0)).toBe(0)

    })
    it('alcoholInOrganism tests', () => {
        expect(alcoholInOrganism(300, 90)).toBe('4.76')
        expect(alcoholInOrganism(600, 90)).toBe('9.52')
        expect(alcoholInOrganism(300, 45)).toBe('9.52')
        expect(alcoholInOrganism(300, 0)).toBe(undefined)
        expect(alcoholInOrganism(300)).toBe(undefined)
    })
    it('timeToBeSober tests', () => {
        expect(timeToBeSober(4.76)).toBe('31 godz. 44 min.')
        expect(timeToBeSober(9.72)).toBe('64 godz. 48 min.')
        expect(timeToBeSober()).toBe(undefined)
        expect(timeToBeSober(0)).toBe(undefined)

    })
})