// 自己包promise
const {readFile} = require("fs");

// fs.readFile(path[, options], callback)
// new Promise( executor = (resolve, reject) => { ... } );

// 建立promise構造函數
function readFilePromise() {
    return new Promise((resolve, reject) => {
    // 立即執行，如函數有err則reject 否則就回傳data(resolve)
        readFile("./test.txt", "utf-8", (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

async function printFile(){
    let show = await readFilePromise();
    console.log(show);
}

printFile();