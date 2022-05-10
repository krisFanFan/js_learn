const arr1 = ['国道', '动车', '高铁'];
const arr2 = ['梧州', '贵阳', '百色'];
const n = 1;

function arrive(arr1, arr2, n) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      count++;
    }
  }

  return n + count;
}

const count = arrive(arr1, arr2, n);

// ----------------------------------------------------------

const channel = ['苏宁', '天猫', '京东'];
const product = [
  {
    name: '富士康',
    shop: [{ name: '富士康直销店', id: '1' }],
  },
  {
    name: '华强北',
    shop: [
      { name: '华强北店1号', id: '1' },
      { name: '华强北店2号', id: '2' },
      { name: '华强北店3号', id: '3' },
    ],
  },

  {
    name: '华强南',
    shop: [
      { name: '华强南店1号', id: '1' },
      { name: '华强南店2号', id: '2' },
      { name: '华强南店3号', id: '3' },
    ],
  },
];

function way1(channel, product) {
  let result = [];
  for (let i = 0; i < channel.length; i++) {
    for (let j = 0; j < product.length; j++) {
      const element = product[j];
      let shop = element.shop;
      for (let n = 0; n < shop.length; n++) {
        const ele = shop[n];
        if (ele.id) {
          let res = `${channel[i]}+${element.name}+${channel[i]}`;
          result.push(res);
        }
      }
    }
  }
  return result;
}
let way2 = way1(channel, product);
console.log(way2);

function goods(channel, product) {
  let count = 0;

  channel.forEach((channelName) => {
    if (channelName) {
      product.forEach(({ name, shop }) => {
        if (name) {
          shop.forEach(({ id }) => {
            id && ++count;
          });
        }
      });
    }
  });

  return count;
}

const channelCount = goods(channel, product);
console.log(channelCount);
// -----------------------------------------------------------

function getTimeList(start, end, step) {
  if (
    !start ||
    !end ||
    !step ||
    typeof start !== "string" ||
    typeof end !== "string" ||
    typeof step !== "number"
  )
    return null;

  const SEC_MIN = 60;
  const [startHour, startMin] = start.split(":");
  const [endHour, endMin] = end.split(":");

  if (
    startHour < 0 ||
    startHour > 23 ||
    endHour < 0 ||
    endHour > 23 ||
    startMin < 0 ||
    startMin > 59 ||
    endMin < 0 ||
    endMin > 59
  )
    return null;

  const count = Math.floor(SEC_MIN / step);
  const result = [];

  for (let i = +startHour; i <= +endHour; i++) {
    startMin === "00" && i === +startHour && result.push(`${i}:00`);
    for (let j = 1; j <= count; j++) {
      if (startMin > step * j && i === +startHour) {
        continue;
      }

      if (endMin < step * j && i === +endHour) {
        continue;
      }

      step * j === SEC_MIN
        ? result.push(`${i + 1}:00`)
        : result.push(`${i}:${step * j}`);
    }
  }

  return result;
}

// const timeList = getTimeList("09:15", "13:00", 15);
// console.log("timeList: ", timeList);
