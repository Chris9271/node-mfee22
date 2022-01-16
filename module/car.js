//exports = module.exports = {};
// exports 本身是一個物件

let name = "";

// 輸出一個建立記憶體的exports 物件 內含name屬性
exports.setName = (firstName, lastName) => {
    name = `${firstName}, ${lastName}`;
}

exports.showName = function(){
    console.log(`Hi, ${name}`)
}

// 會在底層加一個 return module exports(如果沒有輸入的話)
// 因為module.exports = exports 
// 且沒有指定一個新的物件給module.exports 因此輸出的內容跟上面name一樣