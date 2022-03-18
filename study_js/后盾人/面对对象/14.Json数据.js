// Json数据
let data = {
  name:"feifie",
  data:{
    title:"PHP"
  }
}

// 转成json数据:第二个参数:如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
let json = JSON.stringify(data,["name"],2)
console.log(json)

let arr = ['宝贝','是啥']
let jsonArr = JSON.stringify(arr,["name"],2)
console.log(jsonArr)



