var express = require('express');
var router = express.Router();
var upload = require('./fileuploads');
//var container = require('../conf/container');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res) {
	res.send('hello');    
})

router.get('/upload', function (req, res) {
  var form = "<!DOCTYPE HTML><html><body>" +
"<form id='editfile' method='post' action='/upload/avatar' enctype='multipart/form-data'>" +
"select:<input name='avatar' id='upfile' type='file'/>" +
"<input type='submit' value='submit'/>" +
"</body></html>"
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.end(form);
})

router.post('/upload/avatar', upload.java.single('avatar'), function (req, res, next) {  
    if (req.file) {
        res.send('file uploaded successfully.')
        console.log(req.file);
        console.log(req.body);
    }
});

module.exports = router;
