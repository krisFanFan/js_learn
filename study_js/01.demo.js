// 类中使用访问器
class Request {
  constructor(url){
    this.host = url
  }
}
let hd = new Request("www.baodu.com")
console.log(hd)