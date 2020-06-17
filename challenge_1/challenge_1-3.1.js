/** Create a program that stores an array of users (objects), 
 * each user has a name and their technologies (new array)
Scroll through the list of users with a repetition structure 
by printing the user information on screen */



const users = [
  { name: "Aline", technologies: ["HTML", "CSS"] },
  { name: "Maria", technologies: ["JavaScript", "CSS"] },
  { name: "Josefa", technologies: ["HTML", "Node.js"] }
];

for (let user of users) {
  console.log(`${user.name} works with ${user.technologies.join(', ')}`)
}

/** Create a function that receives data from a user object and returns IF the user works with CSS or not. 
 * This function must return a boolean true / false.

Scroll through the user array and, for each one, check if it works with CSS using the function built above,
 if YES, print the user information on screen */

 
function checkUserCSS(user) {
  for (let technologies of user.technologies) {
      if (technologies == 'CSS') return true
  }

  return false
}

for (let i = 0; i < users.length; i++) {
  const userWorksCSS = checkUserCSS(users[i])

  if(userWorksCSS) {
      console.log(`The user ${users[i].name} work with CSS`)
  }
}