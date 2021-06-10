document.getElementById('button').addEventListener('click', workschool)
let age = '12'
let day = 'Sunday'
// And is &&
// OR is ||

function workschool () {
  // gets the age and day of the week and coverts it to an integer
  age = document.getElementById('input-one').value
  age = parseInt(age)

  day = document.getElementById('input-two').value

 // the first example checks if the users is a student and it's a weekday
    if ((age < 18 ) && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday')) {
    document.getElementById('answer').innerHTML = 'Time for school'
    }  else if ((age < 18 ) && (day === 'Saturday' || day === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend'
 }  else if ((age >= 18) && (day !== 'Saturday' && day !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Time for work'
  } else if ((age >= 18) && (day === 'Saturday' || day === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend'
  }
}
