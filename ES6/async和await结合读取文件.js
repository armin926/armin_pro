const fs = require('fs')

// 读取 为学
function readWeiXue() {
  return new Promise((resovle, reject) => {
    fs.readFile("./resources/为学.md", (err, data) => {
      // 如果失败
      if(err) reject(err)
      // 如果成功
      resovle(data)
    })
  })
}

function readTitle() {
  return new Promise((resovle, reject) => {
    fs.readFile("./resources/title.md", (err, data) => {
      // 如果失败
      if(err) reject(err)
      // 如果成功
      resovle(data)
    })
  })
}

// 声明一个async函数
async function main(){
  // 获取为学内容
  let weixue = await readWeiXue()
  // 获取title内容
  let title = await readTitle()

  console.log(weixue.toString())
  console.log(title.toString())

}
main()