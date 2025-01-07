// Q9: Count the number of words in a paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
  }
  console.log(countWords("This is a sample paragraph with multiple words.")); // Output: 7