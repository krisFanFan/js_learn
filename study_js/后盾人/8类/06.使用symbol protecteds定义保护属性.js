
// 保护属性的方法: 受保护的属性子类及其父类可以访问，外部不可以访问
// 使用symbol protecteds定义保护属性
const protecteds = Symbol()
class Common { //父类
  constructor() {
    this[protecteds] = {}
    this[protecteds].host = 'https://baidu.com'
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error('错误网址')
    }
    this[protecteds].host = url
  }
  get host() {
    return this[protecteds].host
  }
}
class User extends Common {
  constructor(name) {
    super();
    this[protecteds].name = name
  }

}
let fei = new User('Tom');
// fei.host = 'wwww'//错误
fei.host = 'https://fei.com'
console.log(fei.name)

