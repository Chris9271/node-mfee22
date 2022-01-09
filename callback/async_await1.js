// 語法糖 - 使程式更加好寫
// async / await 是 promise 的語法糖
// -> 還是要有promise
// -> 如果library 有提到其為promise-based 就可以用 async/await


let doWork = function(job, timer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // callback 設計 第一個是錯誤 第二個是結果
            resolve(`完成工作 ${job}`); //會把這一個物件的狀態變成fulfilled
            // 如果發生錯誤
            // reject(err)
            // 會把這一個 promise 物件的狀態變成 rejected
        }, timer);
    }) 
};

// 刷牙 -> 吃早餐 -> 寫功課

// await 必須放在 async 內 (因為await需要一個暫停的範圍)
// await 類似 pause 
async function schedule(){
    let dt = new Date();
    console.log(`開始刷牙 at ${dt.toISOString()}`);

    let result1 = await doWork("刷牙", 2000);
    dt = new Date();
    console.log(`${result1} at ${dt.toISOString()}`);

    let result2 = await doWork("吃早餐", 3000);
    dt = new Date();
    console.log(`${result2} at ${dt.toISOString()}`);

    let result3 = await doWork("寫功課", 2000);
    dt = new Date();
    console.log(`${result3} at ${dt.toISOString()}`);
}
schedule();

// IIFE - immediately invoked function expression 立即執行

// (async () => {
//     let dt = new Date();
//     console.log(`開始刷牙 at ${dt.toISOString()}`);

//     let result1 = await doWork("刷牙", 2000);
//     dt = new Date();
//     console.log(`${result1} at ${dt.toISOString()}`);

//     let result2 = await doWork("吃早餐", 3000);
//     dt = new Date();
//     console.log(`${result2} at ${dt.toISOString()}`);

//     let result3 = await doWork("寫功課", 2000);
//     dt = new Date();
//     console.log(`${result3} at ${dt.toISOString()}`);
// })



