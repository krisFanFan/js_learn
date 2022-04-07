// pricate 私有属性 只有自己可以访问，子类也不可以访问
// 类中使用访问器
class Request {
  #host = 'https://baidu.com'
  constructor(name) {
    this.name = name
  }
  set host(value) {
    if (!/^https?:\/\//i.test(value)) {
      throw new Error('不合法地址错误')
    }
    this.#host = value;
  }

}
let hd = new Request("飞飞")
console.log(hd.host)
// hd.#host = "https://sss.com" //不可更改
console.log(hd)
