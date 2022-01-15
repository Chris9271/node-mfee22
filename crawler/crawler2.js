const axios = require('axios');
const {readFile} = require("fs/promises");

    // const getData = async() => {
    //     try{
    //         let source = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210701&stockNo=2618");
    //         console.log(source.data);
    //     }catch(err){
    //         console.error(err);
    //     }
    // }
    // console.log(getData());

    // IIFE 寫法
    (async () => {
        try {
            // let source = await axios.get(
            //     "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210701&stockNo=2618"
            // );
            let date = "20220111";
            let stockNum = await readFile("./stock.txt", "utf-8");
            let source = await axios.get(
                "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
                {
                    params: {
                        response: "json",
                        date,
                        stockNo: stockNum
                    }
                }
            )
            console.log(source.data);
        } catch (err) {
            console.error(err);
        }
    })();