let name = "Chris";
console.log(`Hello, I'm ${name}.`);

function factorial(num){
    if(num == 0){
        return 1;
    }else{
        return factorial(num - 1) * num;
    }
}
console.log(factorial(5));