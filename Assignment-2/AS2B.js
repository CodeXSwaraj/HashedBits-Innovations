// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(n1, n2, operation) {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            if (n2 !== 0) {
                return n1 / n2;
            } else {
                return 'Division by zero is not allowed';
            }
        default:
            return 'Invalid operation';
    }
}

// Test the function
console.log(calculate(10, 5, 'add'));      // 15
console.log(calculate(10, 5, 'subtract')); // 5
console.log(calculate(10, 5, 'multiply')); // 50
console.log(calculate(10, 5, 'divide'));   // 2
console.log(calculate(10, 0, 'divide'));   // Division by zero is not allowed

