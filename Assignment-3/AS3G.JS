
// Q7: Calculate average scores using array.map and array.reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  const studentAverages = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
  }));
  
  console.log(studentAverages); 
  // Output: [
  //   { name: "Ram", average: 70 },
  //   { name: "Mohan", average: 80 },
  //   { name: "Sai", average: 70 },
  //   { name: "Hemang", average: 85 },
  // ]