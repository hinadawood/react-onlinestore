var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(require('./src/routes'));
app.use(express.static(__dirname + '/images'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
