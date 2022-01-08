let doWork = function(job, timer, callBack){
    setTimeout(() => {
        // callback 設計 第一個是錯誤 第二個是結果
        callBack(null, `完成工作 ${job}`);
    }, timer);
};

// 刷牙 -> 吃早餐 -> 寫功課
let dt = new Date();
console.log(`開始刷牙 at ${dt.toISOString()}`);


doWork("刷牙", 2000, (err, result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
})

doWork("吃早餐", 5000, (err, result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
})

doWork("寫功課", 7000, (err, result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
})

