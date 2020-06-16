/** Create a program to calculate a person's BMI and obesity level */

const name = 'Yoda'
const weight = 80
const height = 1.30

const imc = weight / (height * height)

let message = ""

if (imc >= 30) {
  message = `${name}, are you overweight`
} else {
  message= `${name}, you are not overweight`
}

console.log(message)
