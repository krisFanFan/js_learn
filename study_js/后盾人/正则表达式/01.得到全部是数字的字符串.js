
let hd = "ww122dd333sssrr"
// console.log([...hd].filter(a=> parseInt(a)).join(''))
// console.log(hd.match(/\d/g))


// let a = '3'
// 1.字面量创建正则
// console.log(/w/.test(hd)) //hd里是否含有w 不能识别变量
// 2.对象创建正则表达式
// let reg = new RegExp(a,'g')
// console.log(reg.test(hd))


// 原子表[]与原子组()中的选择符
// console.log(/a|3/.test(hd)+'｜检测是否有a或者3')
// let yuanzi  =/[1234]/
// let yuanzizu = /(123|666)/
// let hd = '8w132333'
// console.log(yuanzi.test(hd)+'检测hd里面是否有1或者2或者3等') 
// console.log(yuanzizu.test(hd)+'检测hd里面是否有123或者666') 

// 转义符号
// let price = 23.3;
// 两成含义 1.除换行外任何字符>普通点
// console.log(/\d+\.\d/.test(price))
// let reg = new RegExp("\\d+\\.\\d+") //+号表示一个或者多个
// console.log(reg.test(price))
// d    \d 数字 0～9

// 边界
// console.log(/^\d$/.test(hd)) //^ 以什么开头,$以什么结尾
