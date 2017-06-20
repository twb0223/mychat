var express = require('express');
var router = express.Router();
var request = require('request');
var url = 'api';
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Chat'
  });
});

router.post('/send', function (req, res, next) {
  console.log(req.body);

  res.json({
    code: '1',
    msg: 'ok'
  });
});

module.exports = router;