// @ts-ignore
let new_arr = ['dog','new',3,4,5,6,7];

// slice(start,end)  1<=截取元素<3  返回新数组,原数组不变
// console.log(new_arr.slice(1,3))//[2,3]


// splice 改变原数组 从2(包括下标2)开始截取3个元素
console.log(new_arr.splice(2,3))//[3,4,5]
// 替换数据
new_arr.splice(1,1,'傻逼')//把new换成傻逼
// 增加数据
new_arr.splice(1,0,'apple','dog')
// 向末尾增加
new_arr.splice(new_arr.length,0,'pig','cat')

console.log(new_arr)