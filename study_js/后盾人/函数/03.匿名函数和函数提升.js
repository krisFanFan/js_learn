// 匿名函数
// ha()  //报错，匿名函数函数不会函数提升
let ha =function () {
  console.log("匿名函数=>赋值表达式")
}
// ha()
// console.log(cms instanceof Object)
// 函数是一个对象类型，可以赋值
let ff = ha
ff()


// 函数表达式方式可以函数提升
cms() //调用放到函数体前面来，函数会自动提升变成例2，然后函数就可以正常执行
function cms() {
 console.log("函数表达式方式")
}

// 例2
// function cms() {
//   console.log("函数表达式方式")
// }
// cms() 


// 相加
let arrDuce = [2,3,4,5,6]
let sumde =arrDuce.reduce(function (pre,value) {
 console.log(pre,value)
return pre+value
},0)
console.log(sumde)

(function (window) {
  function show() {
    console.log("自调用函数的show")
    
  }
  function hd() {
    console.log("自调用函数的hd")

  }
  window.fei = {hd,show};
})(window);
// 把函数放到立即执行函数里面，有一个作用域的概念,就不属于全局了,要想使用里面的函数可以传一个window进去

// 对于块级作用域也可以使用
{
  let show = function () {
    console.log("块级作用域自调用函数的show")
    
  }
  let hd = function () {
    console.log("块级作用域自调用函数的hd")

  }
  window.fei1={show}
}
