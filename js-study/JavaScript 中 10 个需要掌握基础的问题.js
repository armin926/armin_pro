//! 1.如何从数组中移除一个特定的项
// *思路：首先，使用indexOf查找要删除的数组元素的索引(index)，然后使用splice方法删除该索引所对应的项。
// *splice()是一个非纯函数，通过删除现有元素和/或添加新元素来更改数组的内容。

const array = [2,5,9]

const index = array.indexOf(5)
if(index>-1){
  array.splice(index,1)
}

console.log(array);  // [2,9]

// *splice的第二个参数是要删除的元素数量。
// *注意，splice会在适当的位置修改数组，并返回一个包含已删除元素的新数组。

// *接着，我们可以来完善一下。下面有两个函数，
// *第一个函数仅删除一个匹配项（即从[2,5,9,1,5,8,5]中删除第一个匹配项5），而第二个函数则删除所有匹配项：

// 仅删除第一个匹配项
function removeItemOnce(arr,value) {
  let index = arr.indexOf(value)
  if(index>-1){
    arr.splice(index,1)
  }
  return arr
}

// 删除所有匹配项
function removeItemAll(arr,value) {
  let i =0
  while(i<arr.length){
    if(arr[i]=== value){
      arr.splice(i,1) // 删除数组索引 i 处的元素
    } else {
      i++
    }
  }
}

// *如果你想从数组中删除值为number的每个元素，可以这样做：
for(let i = array.length - 1;i>=0;i--) {
  if(array[i]===number){
    array.splice(i,1)
  }
}

// *如果你只想使索引i处的元素不再存在，但又不想更改其他元素的索引：
delete array[i]


// !2. 如何使用 jQuery 或纯 JS 将用户从一个页面重定向到另一个页面

// *如果要模拟单击链接，可以使用location.href，
// *如果要模拟HTTP重定向，请使用location.replace。

// 模拟HTTP重定向
window.location.replace("http://stackoverflow.com")
// 模拟单击链接
window.location.href = "http://stackoverflow.com"

// !3.JavaScript 闭包是如何工作的

// 在下面的代码中，inner与调用foo时创建的执行上下文的词法环境一起形成一个闭包，并对外部隐藏了变量secret：
function foo(){
  const secret = Math.trunc(Math.random()*100)  //Math.trunc()方法会将数字的小数部分去掉,只保留整数部分。
  return function inner(){
    console.log(`The secret number is ${secret}.`)
  }
}

const f = foo() // secret 不能从 foo 外部直接访问
f() // 访问 secret 的唯一办法就是调用 f

// 私有实例变量
// 在下面的事例中，函数 toString 隐藏了 Car 类的一些细节。
function Car(manufacturer, modal, year, color){
  return{
    toString() {
      return `${manufacturer}${modal}${year},${color}`
    }
  }
}
const car = new Car('Aston Martin','V8 Vantage','2012','Quantum Silver')
console.log(car.toString())

// 函数式编程
// 在下面的代码中，函数inner隐藏了fn和args。
function curry(fn) {
  const args = []
  return function inner(arg){
    if(args.length === fn.length) return fn(...args)
    args.push(arg)
    return inner
  }
}

function add(a,b){
  return a + b
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)()) // 5

// 面向事件的编程
// 在以下代码中，函数onClick隐藏了变量BACKGROUND_COLOR。
const $ = document.querySelector.bind(document)
const BACKGROUND_COLOR = 'rgba(200,200,242,1)'

function onClick(){
  $('body').style.background = BACKGROUND_COLOR
}

$('button').addEventListener('click',onClick)

// html
// <button>Set background color</button>

//! 模块化
// 在下面的示例中，所有实现细节都隐藏在一个立即执行的函数表达式中。
// 函数tick和toString隐藏了私有状态和函数，它们需要完成自己的工作。闭包使我们能够模块化和封装我们的代码。

let namespace = {}

(function foo(n){
  let numbers = []
  function format(n){
    return Math.trunc(n)
  }
  function tick() {
    numbers.push(Math.random()*100)
  }
  function toString(){
    return numbers.map(format)
  }
  n.counter = {
    tick,
    toString
  }
}(namespace))

const counter = namespace.counter
counter.tick()
counter.tick()
console.log(counter.toString())

//! 4.use strict 在 JavaScript 中做了什么，背后的原因是什么
/*
 *它捕获了一些常见的编码漏洞，并抛出异常。
 *当采取相对不安全的操作(例如访问全局对象)时，它可以防止错误或抛出错误。
 *它禁用令人困惑或考虑不周到的特性。
*/

// 可以用于整个文件，也可以仅将其用于特定函数
(function(){
  "use strict"
})()

//! 5.如何检查字符串是否包含子字符串？ string.prototype.includes
const string = 'foo'
const substring = 'oo'

//console.log(string.includes(substring))
// IE浏览器下不支持includes,所以可使用indexOf
console.log(string.indexOf(substring)!==-1);

//! 6. var functionName = function() {} 与 function functionName() {}
// 不同之处在于functionOne是一个函数表达式，因此只在到达这一行时才会定义，
// 而functionTwo是一个函数声明，在它周围的函数或脚本被执行(由于提升)时就定义。
// 如：函数表达式
// TypeError: functionOne is not a function
functionOne()

var functionOne = function() {
  console.log("Hello!");
}
// 函数声明：

// "Hello!"
functionTwo()

function functionTwo(){
  console.log("Hello!")
}

//! 7.如何从 JavaScript 对象中删除属性？ delete操作符用于一次删除一个键(通常称为对象属性)。
delete myObject.regex;
// 或者
delete myObject['regex']
// 或者
var prop = "regex"
delete myObject[prop]

// * 事例
var myObject = {
  "ircEvent": "PRIVMSG",
  "method": "newURI",
  "regex": "^http://.*"
}
delete myObject.regex

console.log(myObject)

//! 8.JS 的比较中应使用哪个等于运算符（== vs ===）？

// ==运算符会进行类型转换后比较相等性。 
// ===运算符不会进行转换，因此如果两个值的类型不同，则===只会返回false。

//! 9.在 JavaScript 中深拷贝一个对象的最有效方法是什么？
// 最简单的深拷贝
JSON.parse(JSON.stringify(obj))
//
const a = {
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: new Date(), 
  undef: undefined,  // 丢失
  inf: Infinity,  // 被设置为 null
  re: /.*/,  // 丢失
}
console.log(a);
console.log(typeof a.date);  // object
const clone = JSON.parse(JSON.stringify(a));
console.log(clone);
/*
object
{
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: '2020-09-04T00:45:41.823Z',
  inf: null,
  re: {}
}

*/
console.log(typeof clone.date);  // string

// ES6 提供了两种浅拷贝机制:Object.assign()和spread语法。
// 它将所有可枚举的自有属性的值从一个对象复制到另一个对象。例如
var A1 = {a:'2'}
var A2 = Object.assign({},A1)
var A3 = {...A1}

//! 10.如何在另一个JavaScript文件中包含一个JavaScript文件？
