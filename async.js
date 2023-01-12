function needsName() {

}


setTimeout(function () {
  console.log("OTHER THING")
}, 2)


setTimeout(() => {
  console.log("Two second OTHER THING")
}, 0)





function sayHey(i) {
  console.log(i, 'Ho')
}

sayHey(1)
sayHey(2)
sayHey(3)
