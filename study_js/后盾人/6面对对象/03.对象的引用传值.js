// 对象的引用传值
// let user = {}

// let hd = user
// user.name = 'feifie'
// console.log(hd.name)


function show(a) {
  console.log(a)
  a = a + 100
  console.log(a) //101
  // a传的是值外面的a依旧不变
}
let a = 1
console.log(a) //1
show(a)



let user = { name: 'jou' }
function show(user) {
  user.age = 18;
console.log(user) //1
  // user传的是引用地址 外面的a也会变
}
show(user)
console.log(user) //1
