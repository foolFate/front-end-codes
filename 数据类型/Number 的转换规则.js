/*
Number 的转换规则
    布尔值，true转换为 1，false转换为 0
    数值，直接返回
    null，返回0
    undefined，返回 NaN
    字符串：
        如果字符串包含数值字符，包含数值字符前面带加减号的情况，转换成一个十进制数
        忽略前面的0
        如果包含有效的十六进制形式，会转换成对应的十进制值
        如果是空字符串，返回0
        除上述情况之外，返回 NaN

    对象：
        尝试调用对象的 valueOf 方法，并按上述规则继续执行
        如果最后的结果是 NaN，则调用 toString 方法，然后再执行 Number(string) 的规则

+xxx 效果同 Number(xxx)
*/

console.log(Number("123"))
console.log(Number("+123"))
console.log(Number("0000000123.456"))
console.log(Number("0xFF"))

let obj = {
  valueOf() {
    return {
      valueOf() {
        return "asd"
      }
    }
  },
  toString() {
    return "123"
  }
}
console.log(Number(obj))

let aa = 2*"3"
console.log(aa)

// let s = Array(100).fill("I Love You.").join("")
let s = "I Love You.".repeat(100)
console.log(s)