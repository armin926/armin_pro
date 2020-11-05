// 泛型
function join<T, U>(first: T, second: U) {
  return `${first}${second}`
}

join<string, number>('armin', 1)

// 泛型中数组的使用
function myFun<T>(params: Array<T>) {
  return params
}

myFun<string>(['123', '456'])