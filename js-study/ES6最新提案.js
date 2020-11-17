// ! 1.do表达式
let x = do {
  let t = f();
  t * t + 1
};
// 上面代码中，变量x会得到整个块级作用域的返回值（t * t + 1）。

// do表达式的逻辑非常简单：封装的是什么，就会返回什么。
// 等同于 <表达式>
// do { <表达式>;}

// 等同于 <语句>
// do {<语句>}

// do表达式的好处是可以封装多个语句，让程序更加模块化
let y = do {
  if (foo()) { f() }
  else if (bar()) { g() }
  else { h() }
};

// ! 2.throw 表达式  是一个命令，用来抛出错误，不能用于表达式之中。
// 报错
console.log(throw new Error());

// 参数默认值
function save(filename = thorw new TypeError("Argument required")){

}

// ! 3.管道运算符 |> 它的左边是一个表达式，右边是一个函数。管道运算符把左边表达式的值，传入右边的函数进行求值。
x |> f
// 等同于
f(x)

// 管道运算符最大的好处，就是可以把嵌套的函数，写成从左到右的链式表达式。
function doubleSay (str) {
  return str + ", " + str;
}

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}

function exclaim (str) {
  return str + '!';
}

// 上面是三个简单的函数。如果要嵌套执行，传统的写法和管道的写法分别如下。
// 传统写法
exclaim(capitalize(doubleSay('hello')))
// "Hello, hello!"

// 管道的写法
'hello' |> doubleSay |> capitalize |> exclaim

// 管道运算符只能传递一个值，这意味着它右边的函数必须是一个单参数函数。

// !4.双冒号运算符 ::
// 双冒号左边是一个对象，右边是一个函数。
// 该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。
foo::bar
// 等同于
bar.bind(foo)

foo::bar(...arguments) // 等同于 bar.apply(foo,arguments)

const hasOwnProperty = Object.prototype.hasOwnProperty
function hasOwn(obj,key){
  return obj::hasOwnProperty(key)
}

// 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。
var method = obj::obj.foo // 等同于 var method = ::obj.foo

let log = ::console.log // 等同于  var log = console.log.bind(console)