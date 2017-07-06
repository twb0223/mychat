var express = require('express');
var router = express.Router();
var request = require('request');
var account = require('../services/account')

var url = 'api';

var initdata = {
  'AccountID': 10000,
  'AccountName': '张三',
  'Logo': 'imgs/face.jpg',
  'Grouplist': [{
      'Gname': '工作',
      'Open': true,
      'AccountList': [{
          'AccountID': '10001',
          'AccountName': 'AName1',
          'AccountLogo': 'imgs/friends.png'
        },
        {
          'AccountID': '10012302',
          'AccountName': 'AName2',
          'AccountLogo': 'imgs/Smile.png'
        },
        {
          'AccountID': '1101202',
          'AccountName': 'AName2',
          'AccountLogo': 'imgs/Smile.png'
        },
        {
          'AccountID': '1202102',
          'AccountName': 'AName3',
          'AccountLogo': 'imgs/Smile.png'
        },
        {
          'AccountID': '1302102',
          'AccountName': 'AName4',
          'AccountLogo': 'imgs/Smile.png'
        },
        {
          'AccountID': '140022',
          'AccountName': 'AName5',
          'AccountLogo': 'imgs/Smile.png'
        },
        {
          'AccountID': '1240202',
          'AccountName': 'AName2',
          'AccountLogo': 'imgs/Smile.png'
        }
      ]
    },
    {
      'Gname': '学习',
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
var Userlist = [{
    AccountID: '10001',
    Password: '1'
  },
  {
    AccountID: '10003',
    Password: '1'
  },
  {
    AccountID: '10004',
    Password: ''
  },
  {
    AccountID: '1302102',
    Password: ''
  },
  {
    AccountID: '10012302',
    Password: ''
  },
  {
    AccountID: '140022',
    Password: ''
  }
]

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('login');
// });

// router.get('/', (req, res, next) => {
//   account.queryById(req, res, next);
//   //res.render('login');
// });

router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  account.queryByIdAndPwd(req, res, next);
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
    msg: '返回信息' + new Date()
  });
});
module.exports = router;