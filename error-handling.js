function getNameOfMonth(monthNumber) {
  switch(monthNumber) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
    default:
      throw `Error: ${monthNumber} is an Invalid Month`
  }
}

try {
  console.log('Here we go...')
  const nameOfMonth = getNameOfMonth(40)
  console.log('Your month:', nameOfMonth)
}
catch (err) {
  console.error('~~~~~~~~~~~~~~~~~~~~')
  console.error(err)
  console.error('~~~~~~~~~~~~~~~~~~~~')
}

console.log('This is something else...')
