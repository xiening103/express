var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

function uploadUserImgPre(req, res, next) {
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: './public/files/images'});
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files);

    if(err){
      console.log('parse error: ' + err);
    } else {
      testJson = eval("(" + filesTmp+ ")");
      console.log(testJson.fileField[0].path);
      res.json({imgSrc:testJson.fileField[0].path})
      console.log('rename ok');
    }
  });
}

module.exports = uploadUserImgPre;
