(function(){
  var Router = function(){
    this.routes = {} // 保存路由
    this.curUrl = '' // 获取当前的hash值
  }
  Router.prototype.init = function(){
    //hashchange事件，当hash变化时，调用reloadPage方法
    //第一个this指向window，bind里面的this指向调用这个函数的对象
    window.addEventListener('hashchange',this.reloadPage.bind(this))
  }
  Router.prototype.reloadPage = function(){
    this.curUrl = location.hash.substring(1)||'/' // 获取当前hash的值
    this.routes[this.curUrl]() // 运行当前hash值对应的函数
  }
  Router.prototype.map = function(key,callback){ // 保存路由对应的函数
    this.routes[key] = callback // key表示hash的值，callback表示当前hash对应的函数
  }
  window.oRou = Router
})()



var oRouter2 = new oRou()
oRouter2.init()
oRouter2.map('/', function(){
  let oSidebar = document.querySelector('sidebar')
  oSidebar.innerHTML = "我是主页"
})
oRouter2.map('/wang', function(){
  let oSidebar = document.querySelector('sidebar')
  oSidebar.innerHTML = "我是商品"
  
})
oRouter2.map('/lian', function(){
  let oSidebar = document.querySelector('sidebar')
  oSidebar.innerHTML = "我是个人中心"
})
oRouter2.map('/other', function(){
  let oSidebar = document.querySelector('sidebar')
  oSidebar.innerHTML = "我不重要"
})