

describe("Calculator", function () {
    var Calculator = require('../../lib/jasmine_examples/calc.js')
    var calc = new Calculator

    beforeEach(function () {
        calc.currentVal = 5;
    });

    // afterEach(function () {
    //     Calculator.currentVal = 5;
    // });

    //toBeDefined:  
    it("Should retain the current value of all time", function () {
        expect(calc.currentVal).toBeDefined();
        expect(calc.currentVal).toEqual(calc.currentVal);
    });
    //toEqual: 
    it("Should add numbers", function () {
        expect(calc.add(5)).toEqual(10);
        expect(calc.add(5)).toEqual(15);
    });
    //toEqual:  
    it("Should add any number of numbers", function () {
        expect(calc.addAny([1, 2, 3])).toEqual(11);
    });
    //not.toEqual:
    it("Should not equal", function () {
        expect(calc.addAny([1, 2, 3])).not.toEqual(5)
    })
    //toBe: not sure how toBe is any different
    it("Should be exactly equal to", function () {
        expect(calc.strnumber).toBe("0123")
        expect(calc.strnumber).toEqual("0123")
    })
    //toBeTruthy
    it("Should be truthy", function () {
        expect(calc.boolean).toBeTruthy()
        //expect(calc.boolean).toBeFalsy()
    })
    //toContain:
    it("Should contain", function () {
        expect(calc.strnumber).toContain("0", "2")
    })
    //toBeCloseTo:
    it("Decimal should be close to", function () {
        expect(calc.decimal).toBeCloseTo(1)
    })
    //toMatch: can use regex like syntax /word/
    it("Should match", function () {
        expect(calc.strnumber).toMatch("01")
        expect(calc.strnumber).toMatch(/01/)
    })
    //toBeNull
    //toBeGreaterThan
    //toBeLessThan
    //toBeNaN

    //toThrow: exceptions
    it("Should throw error", function () {
        expect(calc.badFunction).toThrow()
    })
    //jasmine.Any
    it("Should check type", function () {
        expect(calc.decimal).toEqual(jasmine.any(Number))
    })


}); 