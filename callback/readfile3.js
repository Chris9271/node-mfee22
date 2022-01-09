// 自己包promise
const {readFile} = require("fs");

// fs.readFile(path[, options], callback)
// new Promise( executor = (resolve, reject) => { ... } );

// 建立promise構造函數
// function readFilePromise(){
//     return new Promise((resolve, reject) => {
const readFilePromise = new Promise((resolve, reject) => {
    // 立即執行，如函數有err則reject 否則就回傳data(resolve)
    readFile("./test.txt", "utf-8", (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
});
// }

// async function printFile(){
//     try{
//         let show = await readFilePromise;
//         console.log(show);
//     }catch(err){
//         console.error(err);
//     }
// }
// printFile();

// async await 需利用 try...catch block來抓error
// 如果promise構造區域漏掉分號的話 可能會引起很難debug的錯誤
// ex: 上面promise最後少了分號 -> xxx is not a function
// 因為JS會認為下面的async 立即執行區域跟上面的promise是一起的
(async () => {
    try {
        let show = await readFilePromise;
        console.log(show);
    } catch (err) {
        console.error(err);
    }
})();