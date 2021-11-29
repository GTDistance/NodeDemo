const fs = require('fs')
// const fd = fs.openSync('hello.txt', 'w') //打开文件，以写的类型
// fs.writeSync(fd, 'hello thomas') //写入文件
// fs.closeSync(fd) //关闭文件

// fs.writeFile('hello3.txt', 'hello thomas3', {flag:'a'},function (err) {
//   console.log('err', err)
// })

const rs = fs.createReadStream('hello.txt')
const ws = fs.createWriteStream('hello3.txt')
ws.once('open', function () {
  console.log('可些流打开了')
})
ws.once('close', function () {
  console.log('可些流关闭了')
})
rs.once('open', function () {
  console.log('可读流打开了')
})
rs.once('close', function () {
  console.log('可读流关闭了')
  // ws.end()
})
// rs.on('data', function (data) {
//   console.log('data', data)
//   ws.write(data)
// })
rs.pipe(ws)