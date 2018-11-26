class Complex {
    private real: number;
    private imaginary: number;
    constructor(r: number, i: number){
        this.real = r;
        this.imaginary = i;
    }

    add( a: Complex, b: Complex):Complex {
        return new Complex(a.real + b.real, a.imaginary + b.imaginary);
    }

    substract(a: Complex, b: Complex):Complex{
        return new Complex(a.real - b.real, a.imaginary - b.imaginary);
    }

    string(){
        return a.toString();
    }
}


let a: Complex = new Complex(5, 10);
let b: Complex = new Complex(1, 11);
console.log(a.add(a,b));
console.log(a.substract(a,b));
console.log(a.string);