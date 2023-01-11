// Given an array of numbers, write a function to return the sum

function calculateSum(arr) {
  let sum = arr[0]
  let index = 1 // not starting at 0 only because we got that one above
  if(index < arr.length) {
    sum = sum + arr[index]
    index++
    // somehow we need to jump back to if statement
  }
  return sum
}

const myArray = [23, 74, 18, 42, 69, 91, 88]

const mySum = calculateSum(myArray)

console.log(mySum)
