require('dotenv').config();
const axios = require('axios');
// const moment = require('moment');
const {readFile} = require("fs/promises");
const mysql = require('mysql2');


    // IIFE 寫法
    (async () => {
        let connection = mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        })

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

            // 獲取股票之中文名稱
            let stockName = queryStockName.data.suggestions[0].split("\t")[1];

            // 將股票號碼以及中文名存入資料庫
            let saveNameResult = await connection.execute("INSERT INTO stocks (id, name) VALUES (?, ?)", [stockNum, stockName]);
            console.log(saveNameResult);

            
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
        connection.end();
    })();