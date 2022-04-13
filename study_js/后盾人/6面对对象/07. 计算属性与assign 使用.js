// 计算属性与assign 使用
// let hd = {}
// let name = 'title'
// hd[name] = '后盾人'

// console.log(hd.title)


let id = 0;
let hd = {}
hd[`id-${++id}`] = id
console.log(hd)


const lessons = [
  {
    title: '媒体查询响应式布局',
    category:'css'
  },
  {
    title: 'flex',
    category:'css'
  },
  {
    title: 'mysql',
    category:'css'
  }
]

// 数组变成对象形式
let res= lessons.reduce((obj,cur,index)=>{
 obj[`${cur["category"]}-${index}`]=cur;
 return obj;
},{})
console.log(res)

// 把两个对象进行合并
let fei = Object.assign({a:1},{b:2})
console.log(fei)

