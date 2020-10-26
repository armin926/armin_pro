v-if和v-show的区别：
v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
v-show：调整css dispaly属性，可以使客户端操作更加流畅

v-for： 语法((item,index) in items) :key="item"
//数组对象方法排序:
function sortByKey(array,key){
    return array.sort(function(a,b){
      var x=a[key];
      var y=b[key];
      return ((x<y)?-1:((x>y)?1:0));
   });
}
注：data里定义过的数据不能在computed里面重复定义

v-text & v-html

v-text：当数据没有赋值时，v-text绑定的数据不会渲染
v-html: 可以讲html标签正确渲染，但不建议使用。因为容易导致XSS攻击

v-on:
事件监听器，触发DOM事件，例： v-on(@)click="add"

v-model:
绑定数据源。就是把数据绑定在特定的表单元素上，可以很容易的实现双向数据绑定。
.lazy：取代 imput 监听 change 事件。
.number：输入字符串转为数字。
.trim：输入去掉首尾空格。

v-bind:给标签属性动态赋值
完整语法： v-bind:href  简写： :href
例： <a :href="webUrl">
data: {webUrl:'http://www.baidu.com'}

其他指令：
v-pre: 跳过vue的编译，直接输入原始值
例： {{message}}  data: {message:'你好'}
页面展示为： {{message}} 

v-cloak: 在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，

v-once: 在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。