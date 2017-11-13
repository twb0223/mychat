var mysql = require('mysql');
var $conf = require('../conf/dbconf');
var $tool=require('../utils/tools');
var $sql = require('../sqlmap');

var pool = mysql.createPool($conf.mysql);

module.exports = {
    getToken: function(req, res, next) {
        var param = req.query || req.params;
        var token = $tool.guidGenerator()+$tool.guidGenerator();
        var time=3000;

   		$tool.jsonwrite(res, {'token':token,'time':time});
    },
    getUser:function(req,res,next){
        
    }
}
