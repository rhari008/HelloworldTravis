var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World - This is awesome. This is great!' });
});

//Dummy change for demo
module.exports = router;
