// 使用原型call或者apply借用其他原型链方法


// 1.apply方法
let hd = {
  data:[1,2,3,56,5]
}
Object.setPrototypeOf(hd,{
  max(){
     return this.data.sort((a,b)=>b-a)[0]
  }
})
let xj = {
  lessons:{
    js:11,
    node:33,
    pphp:22
  },
  get data(){
    return Object.values(this.lessons)
  }
}
// 借用了其他原型链中的方法来实现功能
console.log(hd.max.apply(xj))


// 2.call方法
let hdCall = {
  data:[1,2,3,56,5]
}
Object.setPrototypeOf(hdCall,{
  max(data){
     return data.sort((a,b)=>b-a)[0]
  }
})
let xjCall = {
  lessons:{
    js:11,
    node:33,
    pphp:22
  },
}
console.log(hdCall.max.call(null,Object.values(xj.lessons)))

// 借用方法优化
let main = {
  data:[1,2,3,1,4,555]
}
 let xjMain = {
  lessons:{
    js:11,
    node:33,
    pphp:22
  }
}
  console.log(Math.max.apply(null,Object.values(xjMain.lessons)))