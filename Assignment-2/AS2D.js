function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let sum = 0;

    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let digit1 = parseInt(str1[i] || 0, 10); // Use 0 if digit is undefined
        let digit2 = parseInt(str2[i] || 0, 10);
        sum += digit1 * digit2;
    }

    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // Output: 24
