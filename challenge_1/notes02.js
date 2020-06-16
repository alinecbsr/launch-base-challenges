/** Check person's age
If older than 18, 'Entry Cleared', if not 'Entry Prohibited' */

const age = 18

if (!(age >= 18) || age ===17) {
  console.log('Entry Prohibited')
} else {
  console.log('Entry Cleared')
}
