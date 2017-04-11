var mysql = require('mysql');
var $conf = require('../conf/db');
var cmd = require('./sqlMap');
var container = require('../conf/container')
var m = new Map();
var n = new Map();

module.exports = {
    CheckDate: function (req, res, next) {
	
	var param = req.query || req.params;

	var connection = mysql.createConnection($conf.co2);
	connection.connect();
 
	connection.query(cmd.Q + cmd.queryDate + 'AND' + cmd.querylocation,[param.d1,param.d2,param.l], function (error, results, fields) {
	if (error) throw error;
	res.send(results);
	});
 
	connection.end();
    },
    DelResponse: function (req, res, next) {
	var param = req.query || req.params;

	var connection = mysql.createConnection($conf.co2);
	connection.connect();
	
	connection.query(cmd.Del ,[param.id], function (error, results, fields) {
	if (error) throw error;
	res.send("id "+ param.id +" has been deleted.");
	});

	connection.end();
    },
    AddResponse: function (req, res, next) {
	var param = req.query || req.params;

	var connection = mysql.createConnection($conf.co2);
	connection.connect();
	
	connection.query(cmd.Add ,[param.id,param.val], function (error, results, fields) {
	if (error) throw error;
	res.send("id "+ req.body +" has been created.");
	});

	connection.end();
    },
    CheckResponse: function (req, res, next) {
	var param = req.query || req.params;

	var connection = mysql.createConnection($conf.co2);
	connection.connect();
	
	connection.query(cmd.Choose ,[param.id], function (error, results, fields) {
	if (error) throw error;
	res.send(results);
	});

	connection.end();
    },
     BoostJava: function (req, res, next) {
	
	var param = req.query || req.params;
	var shell = require('shelljs');
	shell.cd('/home/tcalab/Java/co2reader/');
	shell.exec('./boost.sh '+param.cname);
	res.send("1");
	
    },
     ExecJava: function (req, res, next) {
	
	var param = req.query || req.params;
	var shell = require('shelljs');
	container.penguin = container.penguin + 1;
	n.set(param.id,false);
	
	shell.cd('/home/tcalab/Java/co2reader/');
	shell.exec('./cexec.sh '+param.d1+' '+param.d2+' '+param.l+' '+param.rid+' '+param.func+' penguin');
	//if (error) throw error;
	res.send("penguin");
	
    },
     BoostPython: function (req, res, next) {
	
	var param = req.query || req.params;
	var shell = require('shelljs');
	shell.cd('/home/tcalab/Python/co2reader/');
	shell.exec('./boost.sh '+param.d1+' '+param.d2+' '+param.l+' '+param.rid);
	res.send("1");
	
    },
    SearchDensity: function (req, res, next) { 

	var param = req.params;
	var connection = mysql.createConnection($conf.co2);
	connection.connect();
 
	connection.query(cmd.GET + cmd.dtl ,[param.day,param.time,param.direction], function (error, results, fields) {
	if (error) throw error;
	//console.log(results);
	//res.setHeader('Content-Type', 'application/json');
	res.send(results);
	});
 
	connection.end();
    },
    IDSearch: function (req, res, next) { 

	var param = req.params;
	var connection = mysql.createConnection($conf.co2);
	connection.connect();
 
	connection.query(cmd.GET + cmd.id ,[param.id], function (error, results, fields) {
	if (error) throw error;
	console.log(results);
	//res.setHeader('Content-Type', 'application/json');
	res.send(results);
	});
 
	connection.end();
    },
WriteMap: function (req, res, next) {
	var param = req.query || req.params;
	m.set(param.id,param.val);
	n.set(param.id,true);
	res.send('1');
    },
ReadMap: function (req, res, next) {
	var param = req.query || req.params;
	
	if(n.get(param.id)==true) {res.send(m.get(param.id));}
	else {res.send("-1");}
	n.set(param.id,false);
    },

};
