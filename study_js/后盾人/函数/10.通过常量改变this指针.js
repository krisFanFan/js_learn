// 通过常量改变this指针
// 方法一
let lesson = {
  site: '飞飞',
  lists: ['js', 'css', 'mysql'],
  show: function () {
    const self = this;//通过把this赋值给一个常量，使下面的函数可以通过self得到lesson里面的值
    return this.lists.map((item) => {
      console.log(self.site) //通过赋值可以拿到lesson里面的值
      return `${self.site}+${item}`
    })
  }
}
console.log(lesson.show())

// 方法二
let lesson1 = {
  site: '飞飞1',
  lists: ['js', 'css', 'mysql'],
  show: function () {
    return this.lists.map((item) => {
      return `${this.site}+${item}`
    }, this) //此this指的是当前lesson1对象,map参数可以传递第二个this参数，把当前作用域的this传递给函数.
  }
}
console.log(lesson1.show())