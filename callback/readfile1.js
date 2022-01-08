// 引入node的file system 中的 readFile
const {readFile} = require("fs");
// 內建的promise版本
// const {readFile} = require("fs/promises");

// fs.readFile(path[, options], callback)
readFile("./test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Promise內建
    // readFile("./test.txt", "utf-8")
    //     .then(res => {
    //         console.log("內建:", res);
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })


