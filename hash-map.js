const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
}

function getNameOfMonth(monthNumber) {
  const monthName = months[monthNumber]
  if (monthName) {
    return monthName
  }
  throw 'ERROR: Invalid month!'
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
