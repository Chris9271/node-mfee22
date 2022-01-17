require('dotenv').config();
// 引入express
const express = require('express');
const app = express();

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})