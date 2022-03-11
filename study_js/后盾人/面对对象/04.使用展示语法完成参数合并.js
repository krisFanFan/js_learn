// 使用展示语法完成参数合并
let arr = [1,2,3]

let a = [...arr,4,56]
console.log(a)

let user ={name:'w',age:22}
let hd = {...user,lang:'s'}

function upload(params){
  let config = { 
    type:'*.jpeg,*.png',
    size:1000
  }
  config = {...config,...params}
  console.log(config)
}
upload({size:33})