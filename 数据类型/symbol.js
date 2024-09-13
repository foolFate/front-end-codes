//用来保证唯一性

let a = Symbol();
console.log(typeof a)
console.log(a)

let b = Symbol()
console.log( a == b)  // false
console.log( a === b) // false
