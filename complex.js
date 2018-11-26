var Complex = /** @class */ (function () {
    function Complex(r, i) {
        this.real = r;
        this.imaginary = i;
    }
    Complex.prototype.add = function (a, b) {
        return new Complex(a.real + b.real, a.imaginary + b.imaginary);
    };
    Complex.prototype.substract = function (a, b) {
        return new Complex(a.real - b.real, a.imaginary - b.imaginary);
    };
    Complex.prototype.string = function () {
        return a.toString();
    };
    return Complex;
}());
var a = new Complex(5, 10);
var b = new Complex(1, 11);
console.log(a.add(a, b));
console.log(a.substract(a, b));
console.log(a.string);
