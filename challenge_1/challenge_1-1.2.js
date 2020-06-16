/** Retirement fund

The minimum contribution time for men is 35 years and for women, 30 years;
Using the 85-95 rule, the sum of the age and the contribution time of the man must be at least 95 years old, 
while the woman must be at least 85 years old in the sum;
Based on the rules above, print the messages on the screen:

IF the person is retired: you can retire!
IF the person is NOT retired: you still cannot retire! */
const name = 'Aline'
const sex = 'F'
const age = 30
const contribution = 9

const resultContribution = age + contribution

const parameterMan = sex == 'M' && contribution >= 35 && resultContribution >= 95
const parameterWoman = sex == 'F' && contribution >= 30 && resultContribution >= 85

if ( parameterMan || parameterWoman) {
    console.log(`${name}, you can retire!`)
} else {
    console.log(`${name}, you cannot retire!`)
}
