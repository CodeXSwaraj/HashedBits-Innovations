// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow.

function findTax(salary) {
    if (salary <= 0) {
        return 'Invalid salary'; // Invalid salary
    }

    switch (true) {
        case (salary <= 500000):
            return 0; // 0% tax
        case (salary <= 1000000):
            return salary * 0.10; // 10% tax
        case (salary <= 1500000):
            return salary * 0.20; // 20% tax
        case (salary > 1500000):
            return salary * 0.30; // 30% tax
        default:
            return 'Invalid salary'; // This shouldn't be hit
    }
}

// Test the function
console.log(findTax(400000));   // 0 (0% tax)
console.log(findTax(800000));   // 80000 (10% tax)
console.log(findTax(1200000));  // 240000 (20% tax)
console.log(findTax(1600000));  // 480000 (30% tax)
console.log(findTax(-50000));   // Invalid salary
console.log(findTax(0));        // Invalid salary
