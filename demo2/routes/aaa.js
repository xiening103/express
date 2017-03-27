var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/aaa', function(req, res, next) {
  res.render('aaa', { title: 'Express' });
});

module.exports = router;
