/** Create a program that calculates the sum of income and expenses of users and 
at the end returns the balance (income - expenses).

Scroll through the user array and for each user call a function called calculaSaldo 
that takes the user's income and expenses as a parameter

Create a second function that takes as an parameter an array of numbers and returns the sum of 
them and use it to calculate the sum of income and expenses within the function calculaSaldo

The function calculaSaldo must use the sumNumeros function to calculate the sum of income and 
expenses and at the end return the user's balance, that is, income - expenses

At the end, display all users on screens, their respective balance and IF the balance is POSITIVE or NEGATIVE */

const users = [
  {
    name: 'Aline',
    income: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: 'Maria',
    income: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: 'Josefa',
    income: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
]

function calculationBalance (income, expenses) {
  const sumIncomes = sumNumbers (income)
  const sumExpenses = sumNumbers (expenses)
 
  return sumIncomes - sumExpenses
}

function sumNumbers (numbers) {
  let sum = 0

  for (let number of numbers) {
      sum = sum + number
  }

  return sum
}

for (let user of users) {
  const balance = calculationBalance (user.income, user.expenses)

  if (balance> 0) {
      console.log (`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}`)
  } else {
      console.log (`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`)
  }
}
