let height = 1.75
let weight = 80.5

let bmi = parseFloat(weight / (height ** 2)).toFixed(2)
console.log(bmi)

if (bmi < 18.5) {
  console.log('过轻')
} else if (18.5 <= bmi && bmi < 25) {
  console.log('正常')
} else if (25 <= bmi && bmi < 28) {
  console.log('过重')
} else if (28 <= bmi && bmi < 32) {
  console.log('肥胖')
} else {
  console.log('严重肥胖')
}
