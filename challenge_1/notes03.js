/** Object and array */

const students = [  
  {
    name: "Aline",
    note: 9.8
  },
  {
    name: "Maria",
    note: 10
  },
  {
    name: "Josefa",
    note: 2
  }
]

const average = (students[0].note + students[1].note + students[2].note) / 3

console.log(students);

console.log(`   The average student is ${average}`);