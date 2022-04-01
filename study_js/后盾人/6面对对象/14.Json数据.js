// Json数据
let data = {
  name:"feifie",
  data:{
    title:"PHP"
  }
}

// 转成json数据:第二个参数:如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
let json = JSON.stringify(data,["name"],2)
// console.log(json)

let arr = ['宝贝','是啥']
let jsonArr = JSON.stringify(arr,["name"],2)
// console.log(jsonArr)


// 自定义返回的json
/*
toJSON 方法
如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是该对象被序列化，而是调用 toJSON 方法后的返回值会被序列化*/
let hd = {
  title:'菲菲',
  url:'www.baidu.com',
  teacher:{
    name:'Mr 王'
  },
  toJSON:function(){
    return {
      title:this.title,
      url:this.url, //只返回title
      teacher:this.teacher
    }
  }
}
let hdJson = JSON.stringify(hd)
// console.log(hdJson)


// 把json 转换为 js数据
//  let jsData= JSON.parse(hdJson)//JSON.parse() 方法用来解析JSON字符串

let jsData= JSON.parse(hdJson,(key,value)=>{
  // console.log(key)//分别返回属性名和值
  if(key=='title') value = "qing"+value
  return value
})
console.log(jsData)



