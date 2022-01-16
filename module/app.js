// 建立變數且引入自行建立的模組
let addName = require("./car");
// let addName = require("./car2");

// 透過變數存取模組的方法 car
addName.setName("Jack", "Lin");
addName.showName();


// 透過變數存取模組的方法 car2
// addName.setName("Jack");
// addName.showName();

// 模組來源：
// 1. 內建的: fs
// require("fs")
// 2. 第三方: mysql2, moment, axios, dotenv,...
// require("mysql2")
// 3. 自己開發的*