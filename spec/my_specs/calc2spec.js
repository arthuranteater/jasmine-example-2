
describe("CalculatorTwo", function () {
    var Calculator2 = require('../../lib/jasmine_examples/calc2.js')
    Calc = new Calculator2

    beforeEach(function () {
        Calc.currentVal = 5;
    });

    // afterEach(function () {
    //     calculator.currentVal = 5;
    // });

    //toBeDefined:  
    it("Should retain the current value of all time", function () {
        expect(Calc.currentVal).toBeDefined();
        expect(Calc.currentVal).toEqual(Calc.currentVal);
    });
    //toEqual: 
    it("Should add numbers", function () {
        expect(Calc.add(5)).toEqual(10);
        expect(Calc.add(5)).toEqual(15);
    });
    //toEqual:  
    it("Should add any number of numbers", function () {
        expect(Calc.addAny([1, 2, 3])).toEqual(11);
    });
    //not.toEqual:
    it("Should not equal", function () {
        expect(Calc.addAny([1, 2, 3])).not.toEqual(5)
    })
    //toBe: not sure how toBe is any different
    it("Should be exactly equal to", function () {
        expect(Calc.strnumber).toBe("0123")
        expect(Calc.strnumber).toEqual("0123")
    })
    //toBeTruthy
    it("Should be truthy", function () {
        expect(Calc.boolean).toBeTruthy()
        //expect(Calc.boolean).toBeFalsy()
    })
    //toContain:
    it("Should contain", function () {
        expect(Calc.strnumber).toContain("0", "2")
    })
    //toBeCloseTo:
    it("Decimal should be close to", function () {
        expect(Calc.decimal).toBeCloseTo(1)
    })
    //toMatch: can use regex like syntax /word/
    it("Should match", function () {
        expect(Calc.strnumber).toMatch("01")
        expect(Calc.strnumber).toMatch(/01/)
    })
    //toBeNull
    //toBeGreaterThan
    //toBeLessThan
    //toBeNaN

    //toThrow: exceptions
    it("Should throw error", function () {
        expect(Calc.badFunction).toThrow()
    })
    //jasmine.Any
    it("Should check type", function () {
        expect(Calc.decimal).toEqual(jasmine.any(Number))
    })


}); 