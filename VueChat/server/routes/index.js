var express = require('express');
var router = express.Router();
var user = require('../services/userService');

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

router.get('/api', (req, res, next) => {
    user.getToken(req, res, next);
});

router.get('/api/user', (req, res, next) => {
   user.queryAll(req, res, next);
});


module.exports = router;