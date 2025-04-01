class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}

// Test it (Unit Test)
const calculator = new Calculator();
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");



