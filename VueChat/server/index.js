const index = require('./routes/index');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cors=require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/', index);

app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
}));

// 监听端口
app.listen(9000);
console.log('success listen at port:3000......');