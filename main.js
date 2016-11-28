var fs = require("fs");

aaa bbb ccc ddd

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");