// Q1: Remove state names starting with vowels using array.filter
const states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Goa", "Kerala", "Tamil Nadu"];
const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates); // Output: ["Bihar", "Tamil Nadu"]