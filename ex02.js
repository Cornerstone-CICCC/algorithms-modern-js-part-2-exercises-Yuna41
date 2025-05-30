// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const numbers = [4, 9, 50, 82, 52, 38, 11]
const numAsc = numbers.sort((a, b) => a > b ? 1 : -1)
// console.log(numAsc)
const firstTen = numAsc.find((num) => {
  return num > 10
})
console.log(firstTen)
