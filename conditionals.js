// There are 3 main ways to create conditionals in code:
// 1. if (comes in many flavors)
// 2. switch (great for many different conditions)
// 3. ternary (shorthand for if / else)

// First let's setup some variables

const age = 19;

// Let's start with the most basic if statement:

if (age >= 18) {
  console.log("Welcome. Come on in!")
}

// What about people that aren't yet 18?
// Let's use an if...else

if (age >= 21) {
  console.log("Drink up!")
} else {
  console.log('Here\'s some water.') // we escaped the apostrophe
}

// What if we have more than 2 possibilities?
// Then we can use an elseif

const hour = 23;

if (hour < 11) {
  console.log("Good morning.")
} else if (hour < 17) {
  console.log("Good afternoon.")
} else if (hour < 22) {
  console.log("Good evening.")
} else {
  console.log("Go to bed!")
}

// When dealing with MANY different conditions, we often use a switch

const yourPet = "dog"

switch(yourPet) {
  case "dog":
    console.log("woof woof")
    break
  case "cat":
    console.log("meow meow")
    break
  case "bird":
    console.log("tweet tweet")
    break
  case "fox":
    console.log("What's the fox say?")
    break
  case "raccoon":
  case "lizard":
  case "snake":
    console.log("That's a crazy pet, yo!")
    break
  case "turtle":
    console.log("I love turtles!")
    break
  default:
    console.log("Wow, I never even heard of that!")
    break
}
