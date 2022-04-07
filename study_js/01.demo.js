
// 保护属性的方法:
// 使用WeakMap定义保护属性
const host = new WeakMap()
class User{
  constructor(name) {
    this.name = name
    host.set(this,'https://fei.com')
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error('错误网址')
    }
  host.set=(this.url)
  }
  get host() {
    return host.get(this)
  }
}
let fei = new User('Tom');
// fei.host = 'wwww'//错误
console.log(fei.host) //使用访问器可以读取值
console.log(fei)//直接访问对象读取不了网址


