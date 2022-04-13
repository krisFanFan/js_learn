// 1.什么是proxy代理拦截
"use strict"
const hd = {
  name: 'jack'
}
const proxy = new Proxy(hd, {
  get(obj, property) {
    return obj[property]
  },
  set(obj, property, value) {
    obj[property] = value
    return true
  }
})
proxy.name = '非'
console.log(proxy.name)




