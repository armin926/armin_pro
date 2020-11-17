// ! 基本用法
// * async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
// * 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

// 一个小例子
async function getStockPriceByName(name){
  const symbol = await getStockSymbol(name)
  const stockPrice = await getStockPriceByName(symbol)
  return stockPrice
}

getStockPriceByName('goog').then(result=>console.log(result))

// *上面代码是一个获取股票报价的函数，函数前面的async关键字，表明该函数内部有异步操作。
// *调用该函数时，会立即返回一个Promise对象。

// 另一个小例子  指定3000毫秒后输出‘hello world’
function timeout(ms){
  return new Promise(resolve=>{
    setTimeout(resolve,ms)
  })
}

async function asyncPrint(value,ms){
  await timeout(ms)
  console.log(value)
}

asyncPrint('hello world', 3000)

// async函数有多种使用形式。

// 函数声明
async function foo() {}

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async () => {};

// !返回Promise对象

// async函数内部return语句返回的值，会成为then方法回调函数的参数。

async function f(){
  return 'hello world'
}

f().then(v=>console.log(v))
// "hello world"

// await命令
async function f(){
  // 等同于
  // return 123
  return await 123
}

f().then(v=>console.log(v)) // 123

// 实现休眠效果的小例子
function sleep(interval) {
  return new Promise(resolve=>{
    setTimeout(resolve,interval)
  })
}
// 用法
async function one2FiveInAsync(){
  for(let i=1;i<=5;i++){
    console.log(i)
    await sleep(1000)
  }
}
one2FiveInAsync()

// await命令后面的Promise对象如果变为reject状态，则reject的参数会被catch的回调接收
async function f(){
  await Promise.reject('出错了')
}

f().then(v=>console.log(v)).catch(e=>console.log(e)) // 出错了

try{
  try{
    throw new Error('oops')
  }
  finally{
    console.log('finally');
  }
}
catch(ex){
  console.error('outer',ex.message);
}
// finally -> outer oops