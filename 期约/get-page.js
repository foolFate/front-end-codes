const axios = require('axios')

let p = axios.get("http://127.0.0.1:5500/%E6%9C%9F%E7%BA%A6/002-%E5%BB%B6%E8%BF%9F%E6%89%A7%E8%A1%8C.html")

console.log("111111")

p.then(res => {
  console.log("asdasdasdasd")
})
console.log("222222")

