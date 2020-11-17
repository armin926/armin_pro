//! matchAll
// matchAll() 方法返回一个包含所有匹配正则表达式的结果的迭代器。
// 使用 for...of 遍历或者使用 操作符 ... Array.from 将其转换成数组。
const reg = /[0-3]/g
const data = '2020'
console.log(data.matchAll(reg)) // data.matchAll 的返回值是一个迭代器
console.log([...data.matchAll(reg)])

//! Dynamic import
// 以前(静态导入)：
if(true){
  const menu = require('./index.html')
}
// 现在(动态导入)：
if(true){
  const menu = import('./index.html')
}
// *注意： 不要滥用动态导入

//! import.meta
// import.meta 会返回一个对象，有一个 url 属性，返回当前模块的url路径，只能在模块内部使用。

//! export * as ns from 'module'

export * as ns from './info'
// 可以理解为是将下面两条语句合并成一句
import * as ns from './info'
export {ns}
// 不过需要注意的是 export * as ns from './info' 并不会真的将导入模块，
// 因此在该模块(menu.js)中，我们是获取不到 ns 的。

//! Promise.allSettled
// Promise.allSettled() 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise ，
// 并带有一个对象数组，每个对象表示对应的 promise 结果。

const promise1 = Promise.resolve(100);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'info'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'name'))

Promise.allSettled([promise1, promise2, promise3]).
    then((results) => console.log(result));
/* 
    [
        { status: 'fulfilled', value: 100 },
        { status: 'rejected', reason: 'info' },
        { status: 'fulfilled', value: 'name' }
    ]
*/

// !BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数。 和 Number 是两种数据类型
console.log(BigInt(999))

//! GlobalThis 顶层对象 任何环境下均可以使用globalThis拿到顶层对象

//! Nullish coalescing Operator(空值合并操作符:??)

// ES2020 新增了一个运算符 ??。当左侧的操作数为 null 或者 undefined时，返回其右侧操作数，否则返回左侧操作数。

const defalutValue = 100
let value = someValue ?? defalutValue // someValue 为 0, value 的值是0

//! Optional Chaining(可选链操作符:?.)

// 例如，我们要访问 info 对象的 animal 的 reptile 的 tortoise。
// 但是我们不确定 animal, reptile 是否存在，因此我们需要这样写：
const tortoise = info.animal && info.animal.reptile && info.animal.reptile.tortoise;

// 而有了可选链，我们在访问 reptile 之前，不再需要校验 info.animal 的值。
// 同样，在访问 info.animal.reptile.tortoise 之前，也不需要校验 info.animal.reptile 的值。
// 简化为：
const tortoise = info.animal?.reptile?.tortoise;
