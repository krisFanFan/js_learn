let arr = ['pig',['123','22'],'cat','dog']
let [a,b,c,d] = arr
console.log(a,b,c)
let [,,year] = arr;
console.log(year)//cat

function get() {
  return ['fei','2']
}
let [name1,age] = get()
console.log(name1) //fei

// 用解构赋值把字符串变成数组
const [...Arr] = 'feifei';
console.log(Arr)  //[ 'f', 'e', 'i', 'f', 'e', 'i' ]

let [content,...args] = ['🐖','pig','wolf']
console.log(args)

// 设置默认值
let [hei,year1=2020]  = ['苹果']

console.log([5, 4, 3, 20].reduce((a, b) => {
  return a + b
}))




