/** Create a program with an object to store data for a programmer with name, age and technology that works.

A program can work with several technologies, so it stores those technologies in an array.

Print on the screen the name and specialty of the first technology that the user uses in the following format:

The user 'name' is 'age' years old and uses 'technology' technology with a expertise in 'specialty' */

const developer = {
  name: "Aline",
  age: 30,
  technologies: [
      {name: 'JavaScript', speciality: 'Web/Desktop'},
      {name: 'JavaScript', speciality: 'Web/Mobile'}
  ]
}

console.log (`The user ${developer.name} is ${developer.age} years old and uses ${developer.technologies[0].name} technology with expertise in ${developer.technologies[0].speciality} `)
