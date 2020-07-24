const School = require('school-kr') 
const school = new School()

function tdmeal(){
    school.init(School.Type.HIGH, School.Region.BUSAN,'C100000394')
    const meal = school.getMeal()
    return meal
}   
console.log(tdmeal())