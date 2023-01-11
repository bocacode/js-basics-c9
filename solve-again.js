
function addListOfNums(list) {
  // lets start with the first number of the array
  let sum = list[0]
  // loop through the array as long as we still have numbers...
  for(let i = 1; i < list.length; i++){
    // ...add the next number
    sum = sum + list[i]
  }
  // finally, return the sum
  return sum
}

const givenListOfNumbers = [100, 200, 85, 25, 15, 10, 2]

const answer = addListOfNums(givenListOfNumbers)

console.log(answer)
