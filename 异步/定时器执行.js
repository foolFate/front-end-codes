
function fun() {
  console.log('1111')
  setTimeout(function() {
    console.log("2222")
  }, 0)
  console.log("33333")
}

fun()

