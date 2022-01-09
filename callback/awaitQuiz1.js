//在async內遇到await，async內在await後面的都會被暫停

async function test(){
    console.log(1);
    // setTimeout(()=>{
    //     console.log(2)
    // }, 0);

    // new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         console.log(2);
    //         resolve();
    //     }, 0);
    // })

    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(2);
            resolve();
        }, 0);
    })

    console.log(3);
}

console.log(4);
test();
console.log(5);