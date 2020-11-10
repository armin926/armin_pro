// 1. 引入 fs 模块
const { rejects } = require('assert')
const fs = require('fs')

// 2. 调用方法读取文件
// fs.readFile('./resources/为学.md',(err,data)=>{
//   // 如果失败则抛出错误
//   if(err) throw err
//   // 如果没有出错，则输出内容
//   console.log(data.toString());
// })

// 3. 使用 Promise封装

const p = new Promise((resolve,reject)=>{
  fs.readFile('./resources/为学.md',(err,data)=>{
    // 如果失败
    if(err) reject(err)
    // 如果成功
    resolve(data)
  })
})

p.then(res=>{
  console.log(res.toString());
}).catch(err=>{
  console.log('读取失败');
})