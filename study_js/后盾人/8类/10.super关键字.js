// super 关键字分析
class User {
  show() {
    console.log('User.show')
  }
}
class Admin extends User {
  constructor() {  //子类中定义了constructor就要调用super
    super();
    this.name = 'www.com' //子类的属性定义在super下面，子类优先级高于父类，子类可以覆盖父类
  }
}
let hd = new Admin();
hd.show()


// 使用super方法访问父类方法
class Controller {
 sum(){
  return this.data.reduce((v,i)=>{
     return v +i.price
  },0)
 }
}
class Lesson extends Controller {
  constructor(data) {
    super()
    this.data = data
  }
  info(){
    return {
      totalPrice:super.sum(),
      data:this.data
    }
  }
}
let data = [
  { name: "js",price:66},
  { name: "css",price:99}
]
let hcms = new Lesson(data);
console.log(hcms.info())
var a = '1'