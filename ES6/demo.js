// const a = ['foo', 'bar', 'baz', 'qux']

// for (const [key, value] of a.entries()) {
//   console.log(key, value);
// }

const zeroes = [0, 0, 0, 0, 0]
// 用 5 填充整个数组
// zeroes.fill(5)
// console.log(zeroes);
// zeroes.fill(0) // 重置

// 用6填充索引大于等于3的元素
// zeroes.fill(6,3)
// console.log(zeroes);

// 用7填充索引大于等于1且小于等于3的元素
// zeroes.fill(7,1,3)
// console.log(zeroes);

let colors = ['red','green','blue']

let remove = colors.splice(1,1)

colors.splice(0,0,'yellow')


colors.splice(0,1,'orange','green')
// console.log(colors);

let arr = [1,2,3,4,5,4,3,2,1]

let four = arr.lastIndexOf(4)

console.log(four);