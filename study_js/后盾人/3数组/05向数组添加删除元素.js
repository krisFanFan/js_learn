let new_Array = ['dog', 'apple', 'wolf'];
let hd = ['shop'];

// 向数组添加元素
// 方法一
// new_Array[new_Array.length] = 'cms';
// console.table(new_Array)

// 方法二
// new_Array = [...new_Array,...hd]
// console.table(new_Array)

new_Array.push('22');
let len = new_Array.push(...hd); //返回值为元素个数
// console.log(new_Array,len)

// 产生随机两个数之间的数组
let rangeArray = function (start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};
// console.log(rangeArray(1,11))

// 删除元素
let new_arr = ['live', 'cake', 'pig'];
let vars = new_arr.pop(); //数组末尾删除元素
console.log(vars); //返回值是移除的元素pig


new_arr.unshift('哈哈哈'); //数组头部插入元素 //返回值也为元素个数
new_arr.shift(); //数组头部删除元素 返回值也为移除的元素
console.log(new_arr);


// 数组填充操作
console.log(Array(5).fill('HOU'));
console.log([1,2,3,4,5].fill("吃饭",0,4)) //从0>= 吃饭 <4
