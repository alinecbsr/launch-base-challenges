/**Calculating the average of students */

let student01 = 'Aline'
let noteStudent01 = 9.8

let student02 = 'Maria'
let noteStudent02 = 10

let student03 = 'Josefa'
let noteStudent03 = 2

const average = (noteStudent01 + noteStudent02 + noteStudent03) / 3

console.log(average)

if (average > 5) {
  console.log(`The average was ${average}. Congratulation!!!`);
} else {
  console.log('Sorry, but you need to improve');
}
