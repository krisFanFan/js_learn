

   /*indexOf():方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。*/

      //str.indexOf(searchValue [, fromIndex]) fromIndex数字表示开始查找的位置
      const hd = 'hudunreneu1223';
      console.log(hd.indexOf('u', 4));
      console.log(hd.indexOf('e')); //6
      console.log(hd.lastIndexOf('e')); //8从后面往回找

      //方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
      console.log(hd.includes('r', 2));

      //查看此字符是否在字符串的开头位置，返回true或false
      console.log(hd.startsWith('h', 1)); //true
      console.log(hd.endsWith('u')); //true 是否以某个字符结束

      // search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
      console.log(hd.search(/\d/))