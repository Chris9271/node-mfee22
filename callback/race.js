let doWork = function(job, timer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`完成工作 ${job}`); 
            // 如果發生錯誤
            // reject(err)
            // 會把這一個 promise 物件的狀態變成 rejected
        }, timer);
    }) 
};

let process1 = doWork("刷牙", 2000);
let process2 = doWork("吃早餐", 3000);
let process3 = doWork("寫功課", 2000);

// 三個工作其中有一個完成時就會回傳其結果
Promise.race([process1, process2, process3])
    .then((values) => {
        console.log(values);
})
