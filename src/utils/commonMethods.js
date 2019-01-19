// 格式化时间戳
export const formatDate = (date) => {
  const d = new Date(date)
  let Y = d.getFullYear() + '-'
  let M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-'
  let D = d.getDate() + ' '
  let h = d.getHours() + ':'
  let m = (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes())
  // let s = d.getSeconds()
  return (Y + M + D + h + m)
}
