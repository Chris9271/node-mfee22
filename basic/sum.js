function sum(n){
    // let result = 0;
    // for (let i = 0; i <= n; i++){
    //     result += i;
    // }
    // return result;

    if(n < 1){
        return 0;
    }
    return result = (1 + n) * n / 2;

    // recursive - 遞迴
    // if(n < 1){
    //     return 0;
    // }
    // return sum(n - 1) + n;
}
console.log(sum(1)); 1
console.log(sum(2));
console.log(sum(5));
console.log(sum(10));