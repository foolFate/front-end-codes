const fs = require("fs")

// fs.readFile("D:\\study_wby\\asd\\index.html", 'utf8', (err, data) => {
//   console.log(data)
//   fs.writeFile("D:\\study_wby\\asd\\index2.html", data, {encoding: 'utf8'}, () => {

//   })
// })

function getFileText(p) {
  return new Promise((resolve, reject) => {
    fs.readFile(p, 'utf8', (err, data) => {
      if(err) return reject(err);
      resolve(data)
    })
  })
}

function writeTextToFile(content, p) {
  return new Promise((resolve, reject) => {
    fs.writeFile(p, content, {encoding: 'utf8'}, (err) => {
      if(err) return reject(err);
      resolve(true)
    })
  })
}


getFileText("D:\\study_wby\\asd\\index.html")
.then(text => writeTextToFile(text, "Q:\\study_wby\\asd\\index3.html"))
.then(
  res => console.log("写入成功")
).catch(
  err => console.log("写入失败, 原因是:", err)
)
