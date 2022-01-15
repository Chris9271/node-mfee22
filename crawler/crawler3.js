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
            // let date = "20220111";
            let standardDate = new Date();
            let year = standardDate.getFullYear().toString();
            let month = standardDate.getMonth();
            switch(month){
                case 0:
                    month = "01";
                    break;
                case 1:
                    month = "02";
                    break;
                case 2:
                    month = "03";
                    break;
                case 3:
                    month = "04";
                    break;
                case 4:
                    month = "05";
                    break;
                case 5:
                    month = "06";
                    break;
                case 6:
                    month = "07";
                    break;
                case 7:
                    month = "08";
                    break;
                case 8:
                    month = "09";
                    break;
                case 9:
                    month = "10";
                    break;
                case 10:
                    month = "11";
                    break;
                case 11:
                    month = "12";
                    break;
                default:
                    break;
            }
            let date = standardDate.getDate().toString();
            let searchDate = year+month+date;
            let stockNum = await readFile("./stock.txt", "utf-8");
            let source = await axios.get(
                "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
                {
                    params: {
                        response: "json",
                        date: searchDate,
                        stockNo: stockNum
                    }
                }
            )
            console.log(source.data);
        } catch (err) {
            console.error(err);
        }
    })();