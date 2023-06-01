const fs = require('fs')

const out = fs.readFileSync("./AI.txt", "utf-8")

console.log(out.split("----").map(x =>{
    x=x.replace("\r", "")
    x=x.replace("\n", "")
    return { name: x.split("-")[0].trim(), description: x.split("-")[1].trim() }
}))