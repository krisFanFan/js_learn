"use strict";

function handleTime(startTime, endTime, period) {
  if (0 <= startTime || endTime.slice(0, 2) >= 23) {
    console.log('错误');
  }
}

var arr = handleTime('23:05', '24:08', 30);
console.log('arr：', arr);