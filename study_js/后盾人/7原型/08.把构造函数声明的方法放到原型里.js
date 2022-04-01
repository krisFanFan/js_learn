// 合理的构造函数声明方法
function User(name){
  this.name = name;
 //  this.show = function(){
 //    console.log(this.name)
 //  } 
 }
 
 
 // 创建了两个对象，show方法都是一样的，不需要开辟新的内存空间 
 // 可以在原型中创建一个方法
 // 方法一:一直添加多个对象
  User.prototype.show = function(){
    console.log(this.name)
  }
 //  方法二把原型声明成一个对象
  User.prototype={
   //  通过原型也能找到构造函数
   constructor:User,
    show(){
      console.log(this.name)
    },
    get(){
     console.log(this.name+'get')
 
    }
  }
  let lisi = new User('历史')
 let ff = new User('菲菲')
 console.log(ff)
 