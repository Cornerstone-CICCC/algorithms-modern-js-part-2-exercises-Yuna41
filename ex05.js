// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [6, 91, 83, 55, 29, 37, 66, 46]
const isEven = (num) => {
  return num % 2 === 0
} 
console.log(numbers.some(isEven))
