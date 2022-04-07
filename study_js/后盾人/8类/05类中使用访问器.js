// 类中使用访问器
class Request {
  constructor(host) {
    this.data = {
      host
    };
  }
  set host(value) {
    if (!/^https?:\/\//i.test(value)) {
      throw new Error('不合法地址错误')
    }
    this.data.host = value;
  }
  get host() {
    return this.data.host;
  }
}
let hd = new Request("www.baodu.com")
hd.host = 'https://hcm.com'
console.log(hd.host)
console.log(hd)
