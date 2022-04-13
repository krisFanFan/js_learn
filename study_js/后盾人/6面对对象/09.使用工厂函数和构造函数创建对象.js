// 使用工厂函数创建对象
function user(name) {
  return {
    name,
    show: function () {
      console.log('www')
    }
  }
}
let xj = user('feifie')
console.log(xj)
let fiefie= user("feifie")
// console.log(fiefie)
fiefie.show()



// 构造函数创建对象的方式
function User(name){ //首字母必须大写
   this.name = name;
   this.show=function () {
     console.log(this.name)
   }
}
let dog = new User('小狗')
console.log(dog)


