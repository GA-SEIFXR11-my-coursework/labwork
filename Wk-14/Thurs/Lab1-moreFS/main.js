const fs = require("fs");
const text = fs.readFileSync("./myFile.js", "utf-8");

/* expected output
total lines: 12
---------------
blank: 2
comment: 6
code: 4
*/

var lines = text.split("\n")
var n_blank = lines.reduce((a,b)=>{b== "" ? a++ : a; return a},0)

// single-line only:
// var n_comment = lines.reduce((a,b)=>{b.trim().startsWith("//") ? a++ : a; return a},0)

var n_comment = 0
var t_comment_block = false
for(let line of lines){
    if(line.trim().startsWith("/*")){
        t_comment_block = true
    }
    if(line.trim().startsWith("//") || t_comment_block){
        n_comment += 1
    }
    if(line.trim().endsWith("*/")){
        t_comment_block = false
    }
}

var n_code = lines.length - n_blank - n_comment

var output = 
    `
    total lines: ${lines.length}
    ---------------
    blank: ${n_blank}
    comment: ${n_comment}
    code: ${n_code}
    `
output = output
    .trim()
    .split("\n")
    .map((v)=>{return v.trim()})
    .join('\n')

console.log(output)