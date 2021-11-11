// 匿名自执行函数
(function (x, y) {
  return x + y;
})(3, 4);

// window作为全局变量,不传也能得到window
// 而jquery却把window作为参数传进去
(function (window, undefined) {
  window;
})(window, undefined);
// 主要是为了减少作用域链的查找
// 如果不传window,每次使用window的时候就会一直查到最顶层,才能拿到window
// 如果作为一个参数传进来之后,参数就相当一个方法的局部变量，就可以直接在方法的局部找到这个变量,提升代码执行速度
// 为什么传undefined了,而不把null也传进来
// undefined==>是JavaScript预定义的全局变量，当你在代码中定义某个变量已经在下面语句中使用，但是却没有赋予任何值时,报undefined
//null==> 关键字 没有查找过程

// undefined = 1;// 可以赋值虽然无效
// null = 2 //报错


// vue源码中把this传给了，匿名自执行函数
// vue不仅是为了减少作用域链的查找，更是为了不同环境的兼容,兼容node端

// jquery 环境只在浏览器上跑
// vue 不仅在浏览器上，还在node上跑 例如ssr   node没有window 只有global

// 技巧==>1.尽量减少作用域链查找
      // 2.vue传值this保证代码既可以在浏览器端跑，也可以在node端跑

var cms =123;
function arr() {
  var hd = cms
}


function b() {
  var a;
  console.log(a);
}
b();

// function c() {
//   var a;
//   function b() {
//     console.log(a);
//   }
// }
// 每次使用一个变量的时候,都会有一个作用域链查找的过程
//例如要找到这个a，会先在b方法里面查找，一旦查到就停止查找，如果b方法里面没有，则再往外查一直查到window为止,如果window也没有就返回undefined

// js中变量是有作用域链的
// 1.传递参数的方式后，这两个变量就变成了匿名函数的局部变量，访问起来的时候速度会快。
// 2.如果不传递也可以，但是当访问到该变量的时候js引擎首先会在函数自己的作用域找这个变量，没有的话继续往上找，找到了就返回该变量，找不到就返回undefined。
