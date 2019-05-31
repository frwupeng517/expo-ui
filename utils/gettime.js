
function getDateArray(num) {
  num = num || 0
  let timestamp = new Date().getTime(), array = []
  if(num > 0) {
    for (let i = 0; i < num; i++) {
      array.push(parseDate(timestamp))
      timestamp += 86400000 // 一天的毫秒数
    }
  } else{
    array.push(parseDate(timestamp))
  }
  
  return array
}

function parseDate(timestamp) {
  let date = new Date(timestamp)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = formatNumber(date.getHours())
  let minute = formatNumber(date.getMinutes())
  let second = formatNumber(date.getSeconds())
  let chineseMonth = chineseMonthArray[month - 1]

  return { year, month, chineseMonth, day, hour, minute, second }
}

const chineseMonthArray = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



module.exports = {
  getDateArray: getDateArray
}