var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./models'),
  session = require('express-session'),
  app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  console.log("This works!");
  res.redirect('/logs');
});


app.get('/logs', function(req, res) {
  console.log("IM GETTING YOUR LOGS FOR YOU")
  db.ThoughtLog.findAll()
    .then(function(thoughtLogs) {
      // return all todos in JSON format
      res.send(thoughtLogs);
    });
});

app.post('/logs', function(req, res) {
  var thoughts = req.body;
  console.log(thoughts);
  console.log(req.body);

  db.ThoughtLog.create({situation: thoughts.situation, emotion1: thoughts.emotion1, emotion2: thoughts.emotion2, emotion3: thoughts.emotion3, emotion4: thoughts.emotion4, emotion5: thoughts.emotion5, thought: thoughts.thought, altThought: thoughts.altThought}) 
    .then(function(thought) {
      res.send("hi");
    });

  // db.ThoughtLog.create({situation: thoughts.situation, emotion1: thoughts.emotion1, emotion2: thoughts.emotion2, emotion3: thoughts.emotion3, emotion4: thoughts.emotion4, emotion5: thoughts.emotion5, emotion1AmountA: thoughts.emotion1AmountA, emotion2AmountA: thoughts.emotion2AmountA, emotion3AmountA: thoughts.emotion3AmountA, emotion4AmountA: thoughts.emotion4AmountA, emotion5AmountA: thoughts.emotion5AmountA, thought: thoughts.thought, altThought: thoughts.altThought})
});

app.get('/logs/:id', function (req, res) {
  db.ThoughtLog.findById(req.params.id)
    .then(function(thoughtLog) {
      res.render('/show')
    })
})

app.listen(3000, function() {
  console.log("server is now running");
});