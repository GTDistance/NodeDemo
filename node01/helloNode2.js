// import "./helloNode"
const {x,y} =  require('./helloNode')//node 环境下面需要使用requre
const fs = require('fs')//核心模块不需要路径，以及npm引入的
console.log('hello',x,y)
// console.log('global',global)//node中的全局对象
// console.log('arguments',module)
//exports, 
//require, 
//module, 当前模块对象
//__filename, 当前模块的路径
//__dirname 当前模块所在文件夹