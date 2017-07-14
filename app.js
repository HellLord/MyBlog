/**
 * Created by Fairlady on 2017/07/14.
 */
var express = require('express');
var app = express();


app.use('/node_modules',express.static('node_modules'));
// 当客户端请求
app.set('view engine', 'ejs');
app.set('views', './views');

var indexRouter = require('./router/indexRouter.js');
app.use(indexRouter)


app.listen(3008, function () {
    console.log('3008');
})