
// let hd = "ww122dd333sssrr"
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
// \d 数字 0～9
// \D 数字 除了数字


// 边界 ^ 1.以什么开头 2.取反
// console.log(/^\d$/.test(hd)) //^ 以什么开头,$以什么结尾
// let less = '小红:010-9999999,飞飞:111-2222222'
// 当这个字符出现在一个字符集合模式的第一个字符时,表示取反
// console.log(less.match(/[^:\d-,]+/g))//不以数组里面开头的都要

// 一、元字符
// console.log(hd.match(/\d/g)) // g 全局
// console.log(hd.match(/\d+/g))  //[122,333]+号表示一个或者多个
// console.log(hd.match(/\D+/g)) //除了数字

// 空白 \s    制表符，换行等
//     \S     除了空白
//     \w     字母数字下划线
//     \W     除了字母数字下划线
//      .      除了换行符之外的任何字符
//      *      0个到多个
//    {1,2}     限定数量
//    {1,}      一个到无数个
//    ？        0个或1个
let s = `
s s111
`
// console.log(s.match(/[^\s\d+]/g))
// console.log(s.match(/\S+/g))



// let dian = 'husssd**   .ddd#^^&77&&&58'
// console.log(dian.match(/\.+/g))
 let hd = `
 ddd 
 344
 `
 console.log(hd.match(/.+/s)[0])  //  s 看作把换行符当成普通空白，可以匹配ddd 和344

//空格
let tel = "010 - 99999999"
console.log(/^\d+ - \d+$/.test(tel))
console.log(/^\d+\s-\s\d+$/.test(tel))

// 匹配所有字符
// [\s\S]  [\d\D]

// i 不区分大小写 和 g 全部匹配
let i = 'AaeeeT'
// console.log(i.match(/a/ig))

// m 多行匹配
let js =  `
#1 js,233
#1 java,233
#1 css,233
#1 php,233
`
 let a = js.match(/^\s*#\d\s.+$/gm).map(v=>{
 [nameUser,price] = v.replace(/\s*#\d+\s*/,'').split(',')
 return{nameUser,price}
})
// console.log(a)

// 区间匹配
// let 


