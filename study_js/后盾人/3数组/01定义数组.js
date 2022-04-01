const array1 = new Array(1, 2, 3, 4, 5);
const array = [1, 1];
console.log(array);
// console.log(typeof array) //object 数组是一个对象，是一个引用类型

const hd = ['hd']
hd[3] = "feifei";//当数组前两个没有数时,会自动补上空值
// console.log(hd)

//当用new Array 方法创建数组 只有一个数时 会创建6个空值
const newArray = new Array(6)
// console.table(newArray)
// console.log(newArray.length)//6

// 新版js 新增Array.of() 方法创建数组
let arr1 = Array.of(1)
console.log(arr1.length)

// 检测是否是数组
console.log(Array.isArray([]))//true

// 数组变成字符串
var newArr = [1,2,3]
// console.log(newArr.toString())//1,2,3
// console.log(newArr.join(","))
// console.log(String(newArr))

// 字符串==>数组
let str = 'feifei';
console.log(str.split('f')) //按字符拆分string
console.log(Array.from(str))

let obj1 = {
  0:'Tom',
  1:22,
  length:2 //必须加上length
}
console.log(Array.from(obj1))




