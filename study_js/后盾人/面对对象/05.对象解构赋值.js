// 解构赋值新增特性

// let user = {name:'后盾',age:11}
// console.log(user)
// let {name,age} =user
// console.log(name)

// function hd(){
//   return {height:222,color:"red"}
// }
// let {height,color} = hd()
// console.log(color)

// function config({name,age}){
//   console.log(name)
// }
// config({name:'feifie',age:333})
// let {random} = Math
// console.log(random())

let web = {name:'后盾人',url:'houdun'}
let arr = ['后盾人1','houdunren.com']
let [a] = arr;
let [y,x] = arr;

console.log(a,x)

// 1.变量变成对象
let age = 11,color="red";
let opt = {age,color}
console.log(opt)


// 2.多层对象的解构操作
let obj = {
  name:'fei',
  lesson:{
    id:1
  }
}
let {
  name,
  lesson:{id}
}=obj;
console.log(name,id)

// 3.解构默认值
let three = ['dog','cat']
let [f,b,c='no more'] = three
console.log(f,b,c)

let threeObj = {name1:'fe',url:'ss'}
let {name1,url,total="2"}=threeObj;
console.log(name1,total)