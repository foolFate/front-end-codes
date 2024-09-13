let a = `hello wor
ld`;

let b = `adsad s\nsdas`;

console.log(a)
console.log(b)

let pageHTML = ` 
<div> 
 <a href="#"> 
 <span id="a">Jake</span> 
 </a> 
</div>`;

console.log(pageHTML)

let name = "张三"
let age = 18

console.log(`我是${name},我今年${age+1}岁了`)

let pageHTML1 = ` 
<div> 
 <a href="#"> 
 <span id="${name}">Jake</span> 
 </a> 
</div>`;

console.log(pageHTML1)
let x = null


console.log(`a111${x === null ? "" : x}aaa`)
console.log(`a111${x || ""}aaa`)  // 假值("" 、 null 、 0 、 undefined 、 NaN 、 false)
console.log(`a111${x ?? ""}aaa`)  // 空值(null 和 undefined)