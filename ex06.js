// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [3, 77, 51, 90, 43, 34, 22, 5]
const isPositive = (num) => {
  return num > 0
}
console.log(numbers.every(isPositive))

