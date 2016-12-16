require('babel-register');

const result = require('./render').default;

// console.log(result);

var express = require('express');
var application = express();

application.get('/', function(req, res) {
  res.send(result);
});

application.listen(3005);
