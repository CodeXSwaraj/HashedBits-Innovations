// Q3: Replace 'INDIA' with 'INDONESIA' using array.splice
let stringArr = "INDIA".split("");
stringArr.splice(0, 5, "I", "N", "D", "O", "N", "E", "S", "I", "A");
console.log(stringArr.join("")); // Output: "INDONESIA"