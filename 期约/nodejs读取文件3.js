const { readFile } = require("fs").promises

// readFile("D:\\study_wby\\asd\\index.html", 'utf8')
// .then(res => {
//   console.log(res)
// })

;(async () => {

  let text = await readFile("D:\\study_wby\\asd\\index.html", 'utf8')
  console.log(text)
  
})();


