// Q4: Count vowels and consonants in a string
const text = "This is a sample string with vowels and consonants.";
const vowels = text.match(/[aeiou]/gi)?.length || 0;
const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`); // Output: Vowels: 12, Consonants: 27