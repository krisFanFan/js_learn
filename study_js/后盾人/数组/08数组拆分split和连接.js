let Str = "baidu.com";
let hd = Str.split('.'); //通过指定字符串拆分得到数组
console.log(hd)
console.log(hd.join('/')) //数组通过指定字符串连接成字符串

let dog = ['汪','汪','汪'];
let cat = ['miao'];
let pig = ['yue','yue']
console.log(dog.concat(cat,pig))//把两个数组连接起来 //返回新数组
console.log([...dog,...cat])


let bear = ['a','b','c','d','f','g']
// bear.copyWithin(a,b,c) 复制到a位置，从b开始复制到c  b<= >c
// console.log(bear.copyWithin(3,0,1)) 
console.log(bear.copyWithin(4,1,3))//把bc复制到fg位置
