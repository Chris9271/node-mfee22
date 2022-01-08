let doWork = function(job, timer, callBack){
    setTimeout(() => {
        // callback 設計 第一個是錯誤 第二個是結果
        callBack(null, `完成工作 ${job}`);
    }, timer);
};

// 刷牙 -> 吃早餐 -> 寫功課
let dt = new Date();
console.log(dt);
console.log(`開始刷牙 at ${dt.toISOString()}`);

// 雖然print出來的時間是沒問題的，但這種寫法會使其同時進行，而不是一個結束後進行另一個
// doWork('刷牙', 2000, (err, result) => {
//     let dt = new Date();
//     console.log(`${result} at ${dt.toISOString()}`);
// });
// doWork('吃早餐', 5000, (err, result) => {
//     let dt = new Date();
//     console.log(`${result} at ${dt.toISOString()}`);
// });
// doWork('寫功課', 7000, (err, result) => {
//     let dt = new Date();
//     console.log(`${result} at ${dt.toISOString()}`);
// });

// 可能會造成 callback hell 需極力避免
doWork("刷牙", 2000, (err, result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
    console.log(`開始吃早餐 at ${dt.toISOString()}`);
    doWork("吃早餐", 3000, (err, result) => {
        let dt = new Date();
        console.log(`${result} at ${dt.toISOString()}`);
        console.log(`開始寫功課 at ${dt.toISOString()}`);
        doWork("寫功課", 2000, (err, result) => {
            let dt = new Date();
            console.log(`${result} at ${dt.toISOString()}`);
        })
    })
})

