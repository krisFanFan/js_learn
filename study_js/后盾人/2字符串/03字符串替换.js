
const hd = 'houdunren112';
console.log(hd.replace('houdunren', 'baidu')); //baidu
// 配合使用正则
console.log(hd.replace(/\d/g,'*'))
// 字符串重复
console.log('*'.repeat(5));

// 电话号码模糊处理
function phone(mobile, len = 3) {
  // console.log(String(mobile).slice(0, 9));
  // console.log(String(mobile).slice(0, len * -1));
  return String(mobile).slice(0, len * -1) + '*'.repeat(len);
}
console.log(phone(13083771680, 2));

