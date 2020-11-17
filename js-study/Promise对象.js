// !所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
// !Promise是一个对象，从它可以获得异步操作的消息。

// Promise对象的特点：
// 1) 对象的状态不受外界影响。 
// 2) 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

// !基本用法 Promise对象是一个构造函数，用来生成Promise实例

const promise = new Promise((resolve, reject) => {
  // ...some code
  if (/* 异步操作成功 */) {
    resolve(value)
  } else {
    reject(error)
  }
});
// resovle：将Promise对象的状态从“未完成”变为“成功”，并将结果作为参数传递出去
// reject: 状态从“未完成”变为“失败”,将报出的错误作为参数传递出去

// 实例生成后，可以用then方法指定状态的回调
promise.then((value) => {
  // success
}, (error) => {
  // failure
});

// 一个简单的例子
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}
timeout(100).then(value => {
  console.log(value)
})
/*
 *上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。
 *过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。
*/

// Promise新建以后会立即执行
let promise = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
});
promise.then(() => {
  console.log('resolved.')
})

console.log('Hi!')

// 执行顺序： Promise->Hi!->resolved.

// !Promise.prototype.then() 它的作用是为 Promise 实例添加状态改变时的回调函数。
// then方法返回的是一个新的Promise

// !Promise.prototype.catch() 是.then(null,rejection)或.then(undefined,rejection)的别名，用于指定发生错误时的回调函数
getJSON('/post.json').then(posts => {
  // ...
}).catch(error => {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error)
})

// 一个小例子
const promise = new Promise((resolve, reject) => {
  throw new Error('test')
})
promise.catch(error => {
  console.log(error)
})
// Error: test
// *上面代码中，promise抛出一个错误，就被catch()方法指定的回调函数捕获。

// Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
getJSON('/post/1.json').then(function (post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  // some code
}).catch(function (error) {
  // 处理前面三个Promise产生的错误
});
// *上面代码中，一共有三个 Promise 对象：一个由getJSON()产生，两个由then()产生。
// *它们之中任何一个抛出的错误，都会被最后一个catch()捕获。

// !Promise.prototype.finally()  用于指定不管 Promise 对象最后状态如何，都会执行的操作。
// promise.then(result=>{...}).catch(error=>{...}).finally(()=>{...})

// 一个小例子 服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。
server.listen(port).then(() => {
  // ...
}).finally(server.stop)
// * finally方法的回调函数不接受任何参数，这表明，finally里面的操作，与状态无关，不依赖于 Promise 的执行结果

// !Promise.all() 用于将多个 Promise 实例，包装成一个新的 Promise 实例。
const p = Promise.all([p1, p2, p3])
// * p的状态由p1,p2,p3决定 只有都为fulfilled,p的状态才是fulfilled, 反之reject

// 一个小例子
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(id => {
  return getJSON('/post/' + id + '.json')
})
Promise.all(promises).then(posts => {
  // ...
}).catch(reason => {
  // ...
})

// * 注意，如果作为参数的 Promise 实例，自己定义了catch方法，
// * 那么它一旦被rejected，并不会触发Promise.all()的catch方法。

// !Promise.race() 同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
const p = Promise.race([p1, p2, p3])
// *上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
// *那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

// 下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve。
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
])

p.then(console.log).catch(console.error)
// *上面代码中，如果 5 秒之内fetch方法无法返回结果，
// *变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。

// !Promise.allSettled() 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
// !只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。
const promises = [
  fetch('/api-1'),
  fetch('/api-2'),
  fetch('/api-3'),
];

await Promise.allSettled(promises);
removeLoadingIndicator();
// * 上面代码对服务器发出三个请求，等到三个请求都结束，
// * 不管请求成功还是失败，加载的滚动图标就会消失。

// 该方法返回新的Promise实例，一旦结束，状态总是fulfilled,不会是reject。
// 状态变成fuilfilled后，Promise的监听函数接收到的是一个数组，每个成员对应一个传入allSettled()的Promise实例

// !Promise.any() 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
// !只要有一个是fuilfilled那么包装新的实例就为fuilfilled,反之为reject
const promises = [
  fetch('/endpoint-a').then(() => 'a'),
  fetch('/endpoint-b').then(() => 'b'),
  fetch('/endpoint-c').then(() => 'c'),
];
try {
  const first = await Promise.any(promises);
  console.log(first);
} catch (error) {
  console.log(error);
}

// !Promise.resolve() 将现有对象转为 Promise 对象
const jsPromise = Promise.resolve($.ajax('/whatever.json'))
// 上面代码将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。

Promise.resolve('foo') === new Promise(resolve => resolve('foo'))

// Promise.resolve()方法的参数分成四种情况:
// *1) Promise实例： 不会做任何修改，原封不动的返回实例
// *2) thenable对象： 指的是具有then方法的对象 如下:
let thenable = {
  then: function (resolve, reject) {
    resolve(42)
  }
}
// *Promise.resolve()方法会将这个对象转为 Promise 对象，
// *然后就立即执行thenable对象的then()方法。
let p1 = Promise.resolve(thenable)
p1.then(value => {
  console.log(value) // 42
})

// *上面代码中，thenable对象的then()方法执行后，对象p1的状态就变为resolved，
// *从而立即执行最后那个then()方法指定的回调函数，输出42。

// *3) 不是具有then()方法的对象，或根本就不是对象  返回一个新的Promise对象，状态为resolved
const p = Promise.resolve('hello')
p.then(s => {
  console.log(s)
})
// hello
// *4) 不带有任何参数    允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
const p = Promise.resolve()
p.then(() => {
  // ...
})

setTimeout(function () {
  console.log('three')
}, 0)

Promise.resolve().then(() => {
  console.log('two')
})
console.log('one')

// one->two->three

// !Promise.reject()
// !Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
const p = Promise.reject('出错了')
// 等同于
const p = new Promise((resolve, reject) => { reject('出错了') })

p.then(null, function (s) {
  console.log(s) // 出错了
})

// * 上面代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。

// Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
Promise.reject('出错了')
  .catch(e => {
    console.log(e === '出错了') // true
  })

// !应用
// *加载图片
// *我们可以将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化。
const preloadImage = function(path){
  return new Promise((resolve,reject)=>{
    const image = new Image()
    image.onload = resolve
    image.onerror = reject
    image.src = path
  })
}

// !Promise.try() 让同步的同步 异步的异步
const f = () => console.log('now')
Promise.try(f)
console.log('next')
// now
// next

Promise.try(()=>database.users.get({id:userId})).then(...).catch(...)