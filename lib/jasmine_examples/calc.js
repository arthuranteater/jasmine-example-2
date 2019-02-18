
function Calculator() {
    this.currentVal = 0
    this.strnumber = "0123"
    this.boolean = true
    this.decimal = .995
}
Calculator.prototype.add = function (num1) {
    this.currentVal += num1;
    return this.currentVal;
}

Calculator.prototype.addAny = function (arguments) {
    for (var i = 0; i < arguments.length; i++) {
        this.currentVal += arguments[i];
    }
    return this.currentVal
}

Calculator.prototype.badFunction = () => {
    throw new Error()
}


module.exports = Calculator

