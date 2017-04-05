var multer = require('multer');
//var md5 = require('md5');
var config = require('../conf/file')

var storagejava = multer.diskStorage({

    destination: config.co2upload.javapath,

    filename: function (req, file, cb) {
	cb(null,file.originalname);
//Rename and use md5
// var fileFormat =(file.originalname).split(".");
// cb(null, file.fieldname + '-' + md5(file) + "." + fileFormat[fileFormat.length - 1]);
    }
});

var storagepython = multer.diskStorage({

    destination: config.co2upload.pythonpath,

    filename: function (req, file, cb) {
	cb(null,file.originalname);
    }
});

//add config file to multer object
var java = multer({
    storage: storagejava,
    //other settings
    //limits:{}
});

var python = multer({
    storage: storagepython,
});

var upload = {
	java: java,
	python: python, 	
	}
//export model
module.exports = upload;
