var express = require('express');
var router = express.Router();
var request = require('request');
var url = 'api';
var initdata = {
  'AccountID': 10000,
  'AccountName': 'KAka',
  'Logo': 'imgs/face.jpg',
  'Grouplist': [{
      'Gname': 'GName1',
      'Open': true,
      'AccountList': [{
          'AccountID': '10001',
          'AccountName': 'AName1',
          'AccountLogo': 'imgs/friends.png'
        },
        {
          'AccountID': '10002',
          'AccountName': 'AName2',
          'AccountLogo': 'imgs/Smile.png'
        }
      ]
    },
    {
      'Gname': 'GName2',
      'Open': true,
      'AccountList': [{
          'AccountID': '10003',
          'AccountName': 'AName4',
          'AccountLogo': 'imgs/face.jpg'
        },
        {
          'AccountID': '10004',
          'AccountName': 'ANam5',
          'AccountLogo': 'imgs/friends.png'
        },
        {
          'AccountID': '10005',
          'AccountName': 'CCCCC',
          'AccountLogo': 'imgs/Smile.png'
        }
      ]
    }
  ]
};
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  res.json({
    url: '/index'
  });
});

router.get('/index', function (req, res, next) {
  res.render('index', {
    title: 'chat'
  });
});

router.get('/getlist', function (req, res, next) {
  res.json(initdata);
});

router.post('/send', function (req, res, next) {
  res.json({
    msg:'返回信息'+new Date()
  });
});

module.exports = router;