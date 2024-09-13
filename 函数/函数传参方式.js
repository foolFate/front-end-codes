


// fun(1) // 对于原始值来说，函数传参是传的值

let obj = {a: 1}

function fun(o) {
  o.x = 1
  console.log(o === obj)
}

console.log(JSON.stringify(obj))
fun(obj) // 对于引用值来说，传递的是引用值
console.log(JSON.stringify(obj))

function fun1({ x }) {
  x = 123
}

fun1(obj)
console.log(JSON.stringify(obj))

