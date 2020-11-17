//! 数组常用方法

// !创建数组的静态方法： from()和 of()

// from()用于将类数组结构转换为数组实例

console.log(Array.from("Matt"));  // ["M", "a", "t", "t"]

// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a1); // [1, 2, 3, 4] 
alert(a1 === a2); // false

// of()用于将一组参数转换为数组实例
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4] 
console.log(Array.of(undefined)); // [undefined]

// !检测数组，在只有一个网页的情况下，使用instanceof足矣
if (value instanceof Array) {
  // ...
}

// !如果涉及到两个不同的全局执行上下文 使用 Array.isArray()
if (Array.isArray(value)) {
  // ...
}

// !迭代器方法  keys()、values()、entries()
// keys()返回数组索引的迭代器，values()返回数组元素的迭代器，而 entries()返回索引/值对的迭代器
const a = ["foo", "bar", "baz", "qux"];
// 因为这些方法都返回迭代器，所以可以将它们的内容
// 通过 Array.from()直接转换为数组实例
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());
console.log(aKeys); // [0, 1, 2, 3] 
console.log(aValues); // ["foo", "bar", "baz", "qux"] 
console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

// 批量复制方法 copyWithin()，以及填充数组方法 fill()。
// 都需要指定既有数组实例上的一个范围，包含开始索引，不包含结束索引。
// 使用这个方法不会改变数组的大小

// 使用 fill()方法可以向一个已有的数组中插入全部或部分相同的值。
const zeroes = [0, 0, 0, 0, 0];
// 用 5 填充整个数组
zeroes.fill(5);
console.log(zeroes); // [5, 5, 5, 5, 5] 
zeroes.fill(0); // 重置
// 用 6 填充索引大于等于 3 的元素
zeroes.fill(6, 3);
console.log(zeroes); // [0, 0, 0, 6, 6] 
zeroes.fill(0); // 重置
// 用 7 填充索引大于等于 1 且小于 3 的元素
zeroes.fill(7, 1, 3);
console.log(zeroes); // [0, 7, 7, 0, 0]; 
zeroes.fill(0); // 重置
// 用 8 填充索引大于等于 1 且小于 4 的元素
// (-4 + zeroes.length = 1) 
// (-1 + zeroes.length = 4) 
zeroes.fill(8, -4, -1);
console.log(zeroes); // [0, 8, 8, 8, 0];

// copyWithin()会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置。

let ints,
  reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();
// 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
// 在源索引或目标索引到达数组边界时停止
ints.copyWithin(5);
console.log(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4] 
reset();
// 从 ints 中复制索引 5 开始的内容，插入到索引 0 开始的位置
ints.copyWithin(0, 5);
console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]

// !转换方法：所有对象都有 toLocaleString()、toString()和 valueOf()方法。
// valueOf()返回的还是数组本身。
// 而 toString()返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串。

// 使用不同的分隔符，则可以使用 join()方法。join()方法接收一个参数，即字符串分隔符，返回包含所有项的字符串。
let colors = ["red", "green", "blue"];
alert(colors.join(",")); // red,green,blue 
alert(colors.join("||")); // red||green||blue
// 如果不传入参数则默认使用逗号作为分隔符

// 栈方法：后进先出  
// push(): 接收任意数量参数，添加到数组末尾，返回数组最新长度 
// pop(): 删除数组的最后一项，减少length值，返回被删除的项

// 队列方法: 先进先出
// shift(): 删除数组的第一项并返回它，length-1
// unshift(): 在数组开头添加任意值，返回新的数组长度

// 排列方法
// reverse(): 将数组元素反向排列
// sort(): 按照升序重新排列数组元素,

// 操作方法
// concat(): 在现有数组全部元素基础上创建一个新数组
// slice(): 创建一个包含原有数组中一个或多个元素的新数组
// slice(start,end(可选)) 不包含结束索引对应的元素
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
alert(colors2); // green,blue,yellow,purple 
alert(colors3); // green,blue,yellow

// splice() 在数据中间插入元素。 有3种不同的方式
// 删除：需要传2个参数，要删除的第一个元素位置和要删除的元素数量
// 插入：传3个参数：开始位置、0（要删除的元素数量）和要插入的元素，可以在数组中指定的位置插入元素
// 替换：同上

// 搜索和位置方法： indexOf()、lastIndexOf()和includes()
// 这些方法都接收两个参数： 要查找的元素和一个可选的起始搜索位置

// 累加器 reduce() 数组中的每个值（从左到右）开始缩减，最终计算为一个值。