const Calculator = require('./calculator.js');

test("Check if the object returns the correct operations", () =>{
    const calc = new Calculator();
    expect(calc.add(3,3)).toEqual(6);
    expect(calc.add(3.3,3.1)).toBeCloseTo(6.4);
    expect(calc.subtract(6,3)).toEqual(3);
    expect(calc.subtract(3.3,0.1)).toBeCloseTo(3.2);
    expect(calc.divide(6,3)).toEqual(2);
    expect(calc.divide(6.6,2)).toBeCloseTo(3.3);
    expect(calc.multiply(6,3)).toEqual(18);
    expect(calc.multiply(3.3,3)).toBeCloseTo(9.9);
})