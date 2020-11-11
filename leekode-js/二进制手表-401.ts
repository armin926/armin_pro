/*
*二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。

*每个 LED 代表一个 0 或 1，最低位在右侧。

*例如，上面的二进制手表读取 “3:25”。

*给定一个非负整数 n  代表当前 LED 亮着的数量，返回所有可能的时间。

*示例：

*输入: n = 1
*返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
*/

const HOURS = [1, 2, 4, 8]
const MINUTES = [1, 2, 4, 8, 16, 32]

function readBinaryWatch(num: number): string[] {
  let res: string[] = []

  let combine = (arr: number[], num: number) => {
    if (num === 0) {
      return [0]
    }
    let res:number[] = []
    let helper = (start: number, prevCount: number, prevSum: number) => {
      if (prevCount === num) {
        res.push(prevSum)
        return
      }
      for (let i = start; i < arr.length; i++) {
        let cur = arr[i]
        helper(i + 1, prevCount + 1, prevSum + cur)
      }
    }
    helper(0, 0, 0)
    return res
  }
  for (let i = 0; i <= num; i++) {
    let hours:number[] = combine(HOURS, i)
    let minutes:number[] = combine(MINUTES, num - i)
    for (let hour of hours) {
      if (hour > 11) continue
      for (let minute of minutes) {
        if (minute > 59) {
          continue
        }
        res.push(`${hour}:${padLeft(minute)}`)
      }
    }
  }
  return res
};
function padLeft(num:number) {
  let str = num.toString()
  if (str.length === 1) {
    str = `0${str}`
  }
  return str
}