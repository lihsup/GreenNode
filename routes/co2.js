var express = require('express');
var router = express.Router();
var user = require('../dao/user');
var upload = require('./fileuploads');
var penguin  = require('../dao/link');

/* GET users listing. */
router.get('/hello', function(req, res) {
  res.send('hello from co2');
});

router.get('/CheckDate', function(req,res,next){
	user.CheckDate(req,res,next);
});

router.get('/AddResponse/', function(req,res,next){
	user.AddResponse(req,res,next);
});

router.get('/DelResponse', function(req,res,next){
	user.DelResponse(req,res,next);
});

router.get('/CheckResponse', function(req,res,next){
	user.CheckResponse(req,res,next);
});

router.get('/BoostJava', function(req,res,next){
	user.BoostJava(req,res,next);
});

router.get('/ExecJava', function(req,res,next){
	user.ExecJava(req,res,next);
});

router.get('/CompileJava', function(req,res,next){
	user.CompileJava(req,res,next);
});

router.get('/RunJava', function(req,res,next){
	user.RunJava(req,res,next);
});

router.get('/BoostPython', function(req,res,next){
	user.BoostPython(req,res,next);
});

router.get('/WriteMap/:id/:val', function(req,res,next){
	user.WriteMap(req,res,next);
});

router.get('/ReadMap/:id', function(req,res,next){
	user.ReadMap(req,res,next);
});

router.post('/upload/Java', upload.java.single('avatar'), function (req, res, next) {  
    if (req.file) {
        res.send('file uploaded successfully.')
        console.log(req.file);
        console.log(req.body);
    }
});

router.post('/upload/Python', upload.python.single('avatar'), function (req, res, next) {  
    if (req.file) {
        res.send('file uploaded successfully.')
        console.log(req.file);
        console.log(req.body);
    }
});

router.get('/density/:day/:time/:direction', function (req, res, next) {  
       	user.SearchDensity(req,res,next);
	//res.send(req.params.day);
    
});

router.get('/idco2/:id', function (req, res, next) {  
       	user.IDSearch(req,res,next);
	//res.send(req.params.day);
    
});

router.get('/cachefunction/:name', function (req, res, next) {  
       	user.CacheFunction(req,res,next);
	//res.send(req.params.day);
    
});


module.exports = router;
