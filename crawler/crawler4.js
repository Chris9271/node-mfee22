const axios = require('axios');
// const moment = require('moment');
const {readFile} = require("fs/promises");


    // IIFE 寫法
    (async () => {
        try {
            let stockNum = await readFile("./stock.txt", "utf-8");
            let queryStockName = await axios.get(
                "https://www.twse.com.tw/zh/api/codeQuery",
                {
                    params:{
                        query: stockNum
                    }
                }
            );
            
            if(!queryStockName || queryStockName.data === "無符合之代碼或名稱"){
                throw new Error("查無此代碼");
            }

            let stockName = queryStockName.data.suggestions[0].split("\t");
            console.log(stockName);
            
            // let momentDate = moment().format("YYYYMMDD");
            // let stockNum = await readFile("./stock.txt", "utf-8");
            // let source = await axios.get(
            //     "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
            //     {
            //         params: {
            //             response: "json",
            //             date: momentDate,
            //             stockNo: stockNum
            //         }
            //     }
            // )
            // console.log(source.data);
        } catch (err) {
            console.error(err);
        }
    })();