/**
 * Created by xiening on 2017/3/21.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index4.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index4.htm" );//传送指定路径的文件 -会自动根据文件extension设定Content-Type
})

//app.get('/process_get', function (req, res) {
//    // 输出 JSON 格式
//    response = {
//        first_name:req.query.first_name,
//        last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));//结束响应，告诉客户端所有消息已经发送。当所有要返回的内容发送完毕时，该函数必须被调用一次。如何不调用该函数，客户端将永远处于等待状态。
//})

app.post('/process_post',urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));//结束响应，告诉客户端所有消息已经发送。当所有要返回的内容发送完毕时，该函数必须被调用一次。如何不调用该函数，客户端将永远处于等待状态。
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})