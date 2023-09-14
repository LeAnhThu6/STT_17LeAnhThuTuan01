// const mark = {
//     height: 1.69,
//     mass: 78
// }
// const john = {
//     height: 1.95,
//     mass: 92
// }

const mark = {
    height: 1.88,
    mass: 95
}
const john = {
    height: 1.76,
    mass: 85
}

function getBMI(height, mass) {
    return mass / (height * height)
}

const bmiOfMark = getBMI(mark.height, mark.mass)
const bmiOfJohn = getBMI(john.height, john.mass)

console.log('BMI of Mark: ', bmiOfMark)
console.log('BMI of John: ', bmiOfJohn)

const markHigherBMI = bmiOfMark > bmiOfJohn

console.log('Mark has higher BMI than John is ', markHigherBMI)