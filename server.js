var express = require('express')
var app = express()
var user = require('./dao/user')

var routes = require('./routes/index');
var co2 = require('./routes/co2');

app.use('/', routes);
app.use('/co2', co2);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
