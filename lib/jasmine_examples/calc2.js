function CalcF() {
    this.currentVal = 0
    this.strnumber = "0123"
    this.boolean = true
    this.decimal = .995
    this.add = function (num1) {
        this.currentVal += num1
        return this.currentVal
    }
    this.addAny = function (arr) {
        arr.map((num) => this.currentVal += num)
        return this.currentVal
    }
    this.badFunction = function () {
        throw new Error
    }
}


class Calculator2 {
    constructor() {
        this.currentVal = 0
        this.strnumber = "0123"
        this.boolean = true
        this.decimal = .995
    }
    add(num1) { return this.currentVal += num1 }

    addAny(arr) {
        arr.map(num => this.currentVal += num)
        return this.currentVal
    }

    badFunction() {
        throw new Error()
    }
}



module.exports = Calculator2, CalcF



