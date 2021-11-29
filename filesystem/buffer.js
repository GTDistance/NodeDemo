//buffer 专门用来存储二进制的数据，不需要引用
const str = "hello thomas"
const buf = Buffer.from(str)
console.log('buf',buf)