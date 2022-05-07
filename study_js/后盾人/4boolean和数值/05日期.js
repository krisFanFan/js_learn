// const date = new Date() //对象类型
// console.log(date*1) //乘上数字返回时间戳

// const hd = Date() //字符串类型
// console.log(hd)

// 直接获取时间戳
const date = Date.now();
// console.log(date)

// 查看for循环执行时间
// const start = Date.now()
// for(let i = 0;i<2000000;i++){}
// const end = Date.now()
// console.log((end-start)/1000+'秒')

//方法2 查看脚本执行时间
// console.time("for");
// for(let i = 0;i<2000000;i++){}
// console.timeEnd("for");

// const date  = new Date('1999-4-22 3:22:12');
// console.log(date)
// console.log(date.getMonth())//得到月份

const date = new Date(1999,2,11,3,22,10)
console.log(date)

const param = [1999,2,11,3,22,10]
const date1  = new Date(...param);
console.log(date1)

// 标准时间转换成时间戳
const preDate = new Date();
// 下面四中方法获取时间戳
console.log(preDate * 1)
// console.log(Number(preDate))
// console.log(preDate.valueOf())
// console.log(preDate.getTime())

// 时间戳转换为标准时间
const timeTemp = preDate.valueOf();
// console.log(new Date(timeTemp));

// 封装日期
// console.log(preDate.getFullYear()); //获取年份
// console.log(preDate.getMonth() + 1); //获取月份
// console.log(preDate.getDate()); //获取日
// console.log(preDate.getHours()); //小时
// console.log(preDate.getMinutes()); //分钟
// console.log(preDate.getSeconds()); //秒

// 组合成年月日的形式
const formatDate = `${preDate.getFullYear()}年${preDate.getMonth()+1}月${preDate.getDate()}日`;
// console.log(formatDate);

// 封装函数
var dateFormat = function (date, format = 'YYYY-MM-DD HH:mm:ss') {
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth()+1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };
  for (const key in config) {
    // console.log(key,config[key])
    format = format.replace(key,config[key])
  }
  return format;
};
// console.log(dateFormat(preDate));


