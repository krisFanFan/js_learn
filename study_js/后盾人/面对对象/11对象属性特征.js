// 什么是对象的属性特征？
// 一些时候可能需要对某些对象属性进行某些设置，比如禁止遍历，修改，删除。js对象中有三个特征可以帮助实现这些需求。
const user ={
  name:'fefie',
  age:12
}

// 获取属性四类特征
console.log(Object.getOwnPropertyDescriptor(user, "name"))
// Object.getOwnPropertyDescriptor(user, "name"); 
// 这个方法返回一个对象，里面包括以下四个属性，对应着四大特征。
/*属性	意义
configurable	是否可被删除和配置 默认true
enumerable	  是否可被for in 遍历 默认true
value	        当前属性的值
writable	    是否可被修改 默认true*/

// 获取所有属性特征
console.log(Object.getOwnPropertyDescriptors(user))

// 2.单个设置:设置user对象的name属性的特征:
// 传递三个参数，依次是当前对象，当前需要设置的属性，需要设置的特征对象
Object.defineProperty(user, "name", {
  value:'西瓜',
  writable:false 
}); 
// console.log(user)
user.name = "dog"//修改无效，严格模式下会报错

// 3.同时设置多个属性
// Object.defineProperties(); 
Object.defineProperties(user, {
  'name': {
      configurable : false,
      writable : false
  },
  'age': {
      configurable : false
  }
})
// 使用defineProperty设置不存在的属性名时将会给对象添加一个属性，特征默认都是false。

// 属性的特征就这么写些，以上操作可以称之为 保护属性。
// 属性可以被保护，那么对象也是一样


// 对象的保护分为三个级别的保护。
// preventExtensions不可拓展：表明此对象不能再添加属性。
// seal密封：表明不可配置特征，configurable会变成false,对象不可添加属性，不可删除属性。
// 冻结：表明次对象不可新增，不可删除属性，不可修改属性。
const dog={
  name:'小黄',
  age:2
}
Object.preventExtensions(dog)
console.log(Object.isExtensible(dog)) //返回false或者true是否可以添加
dog.height = "20cm"  //添加属性无效,严格模式下会报错


// 密封
Object.seal(dog); //不可配置特征，configurable会变成false
console.log(Object.isSealed(dog)) //判断是否处于封闭状态
dog.color="red"//添加属性无效
// delete dog.name//删除无效

// 冻结
Object.freeze(dog)
console.log(Object.isFrozen(dog))//判断是否冻结