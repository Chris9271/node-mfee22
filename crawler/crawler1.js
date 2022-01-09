const axios = require('axios');

// axios - promise
axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210701&stockNo=2618")
    .then((result) => {
        // console.log(result);
        console.log(result.data);
    })
    .catch(err => console.error(err));
