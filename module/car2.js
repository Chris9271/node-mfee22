// 開頭有隱藏的 - exports = module.exports = {};
// exports 本身是一個物件

let name = "default";

function setName(newName){
    name = newName;
}

function showName(){
    console.log(name);
}

// exports = {setName, showName} --> 不可這樣寫

// 一開始 module.exports 跟 exports 是指向同一個記憶體位址
// 但因為下面的方法導致又重新給exports分配另一個記憶體位址，且給值到這個新記憶體
// 但最後是回傳 module.exports 的值會是 {}
// exports則是 {setName, showName}

module.exports = {setName, showName}