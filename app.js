/**
 * Created by Fairlady on 2017/07/14.
 */
var express = require('express');
var app = express();

// 当客户端请求
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/',(req,res)=>{
    // 在调用res render 之前, 需要先指定express的默认模版引擎 和模版页面存储路径
    res.render('index')
})


app.listen(3008, function () {
    console.log('3008');
})