


// fun(1) // 对于原始值来说，函数传参是传的值

let obj = {a: { x: 123 } }

function fun({ a }) {
  a.x = 666
  a.y = 1243123
  delete a.x
  // a.x = undefined
}

console.log(JSON.stringify(obj))
fun(obj) // 对于引用值来说，传递的是引用值
console.log(JSON.stringify(obj))
