// 对象属性的基本操作方法


let user={
  name:'飞飞',
  "my age":18
}

console.log(user.name) //读取属性
console.log(user["name"]) //读取属性
console.log(user["my age"]) //读取属性

for(const key in user){
 console.log(user[key])
}

// 给对象动态添加属性
user.height=162
user.get=function(){
  return `${this.name}`
}
console.log(user)
// 删除属性
delete user.name;
console.log(user)
