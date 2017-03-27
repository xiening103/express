/**
 * Created by xiening on 2017/3/22.
 */
var routes = require('./routes');
var users = require('./routes/users');
var express = require('express');
var app = express();
var fs = require("fs");
var $ = require('jquery')(require("jsdom").jsdom().defaultView);
var bodyParser = require('body-parser');
var multer = require('multer');
var multiparty = require('multiparty');

var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: './public/images/',
    filename:function(req,file,cb){
        var fileformat = (file.originalname).split('.');
        cb(null, file.fieldname+'-'+Date.now()+'.'+fileformat[fileformat.length-1]);
    }
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(multer({storage:storage}).array('image'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); //让options请求快速返回
    else next();
});
app.get('/index5.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index5.html");
})

app.post('/file_upload', function(req, res) {
    console.log(req);
    var des_file = __dirname + "/public/images/" + req.files[0].filename;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname,
                    path: req.files[0].path
                };
            }
            //console.log(res);
            res.send(response);
            res.end();
        });
    });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})