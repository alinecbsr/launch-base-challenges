/** Create a program that stores Rocketseat company data within an object called the company. 
* The data to be stored are:

Name: Rocketseat
Purple color
Focus: Programming
Address:
Street: Street Guilherme Gembala
Number: 260

Print on screen using console.log the name of the company and its address in the following format:

The company Rocketseat is located at Street Guilherme Gembala, 260 */

const user = {
  name: "Mayk Brito",
  company: {
    name: "Rocketseat",
    color: "purple",
    field: "programming",
    address: {
      street: "Street Guilherme Gembala",
      number: 260
    }
  }
} 

console.log(`The company ${user.company.name} is located at ${user.company.address.street}, ${user.company.address.number}`)