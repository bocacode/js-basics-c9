// There are 4 types of function --
// I. DO SOMETHING / NO PARAMS
// II. DO SOMETHING / WITH PARAMS
// III. RETURN SOMETHING / NO PARAMS
// IV. RETURN SOMETHING / WITH PARAMS

// I. Example
function sayHelloWorld() {
  console.log("Hello, world.")
}

sayHelloWorld() // calls the function

// II. Example

function greetFriend(name) {
  console.log("Hello, " + name)
}

greetFriend('Joe') // should console.log "Hello, Joe"

// III. Example

function addTwoPlusTen() {
  const result = 2 + 10
  return result
}

const answer = addTwoPlusTen() // answer = 12

console.log(answer)

// IV. Example

function addTwoNumbers(a, b) {
  const result = a + b
  return result
}

const mySum = addTwoNumbers(23, 17)

console.log(mySum)

// Real world type example

function calculateSalesTax(subtotal, taxRate) {
  const salesTax = (subtotal * taxRate).toFixed(2)
  return salesTax
}
