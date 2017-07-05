var mysql = require('mysql');
var $conf = require('../conf/conf');
var $tool=require('../conf/tool');

var pool = mysql.createPool($conf.mysql);

module.exports = {
    getToken: function(req, res, next) {
        var param = req.query || req.params;
        var token = $tool.guidGenerator()+$tool.guidGenerator();
        var time=3000;

   		$tool.jsonwrite(res, {'token':token,'time':time});
    }
}
