// 面向对象的封装

// function User(name) {
//   this.name = name;
//   this.show = function () {
//     console.log(this.name)
//   }
// }
// let dog = new User('小狗')
// console.log(dog)

// 面向对象的封装
//抽象:把一些属性和方法 封装到了内部，不需要外部改变，不让外部进行访问,
function User(name, sgr) { //首字母必须大写
  let data = { name, sgr } //对属性进行抽象
  let info = function () { //对函数进行封装
    return data.sgr > 50 ? '老年' : "青年"
  }
  this.show = function () {
    console.log(data.name + info())
  }
}
let dog = new User('非',28)
dog.show()
console.log(dog)
dog.info=function () {  //外部改变info，也不会影响程序逻辑
  return 1 
}
