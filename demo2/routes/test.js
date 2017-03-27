var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile(__dirname + "/" + "test");
  res.render('test');
})


router.post('/file_upload', function(req, res, next) {
  console.log(req);
  var imgpath=__dirname.replace(/routes/,"");
  var des_file = imgpath + "/public/images/" + req.files[0].filename;
  console.log(__dirname);
  console.log(imgpath);
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
      res.send(response);
      res.end();
    });
  });
  //res.render('test');
});

module.exports = router;
