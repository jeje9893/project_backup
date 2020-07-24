const klunch = require('k-lunch')

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

const form = {
  year: 2020,
  month: 7,
  day: 6,
  time: 2, // Breakfast = 1, Lunch = 2, Dinner = 3
  name: '동래고등학교',
  phase: 4 // Elementary School = 2, Middle School = 3, High School = 4
}

const options = {
  autoCode: true,
  autoDomain: true
}

klunch.getLunch(form, (err, output) => {
  if(err) throw err
  console.log(output)
}, options)