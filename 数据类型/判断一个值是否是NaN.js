const fs = require('fs')

let content = fs.readFileSync("./typeof.html", 'utf8')
console.log(content)

// JS 中， NaN 不等于 包括 NaN 在内的任何值
function myIsNaN(val) {
  return val !== val
}

console.log(myIsNaN(NaN)) // true
console.log(myIsNaN(0)) // false
console.log(NaN == NaN); // false

let obj = {
  valueOf() {
    return 666
  }
}
console.log(Number(obj))
