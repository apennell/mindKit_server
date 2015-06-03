var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./models'),
  session = require('express-session'),
  app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // next();
});

app.post('/logs', function(req, res) {
  var thoughtLog = req.body.thoughtLog;

  db.ThoughtLog.create(thoughtLog.situation);
});

app.listen(3000, function() {
  console.log("server running");
});