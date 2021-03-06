var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/api/', function(req, res) {
  var studentName = req.param('studentName');
  var school = req.param('school');
  var phone = req.param('phone');
  var email = req.param('email');

  res.send(studentName + ' ' + school + ' ' + phone + ' ' + email);
});


app.post('/api/students', function(req, res) {
  var studentName = req.body.studentName;
  var school = req.body.school;
  var phone = req.body.phone;
  var email = req.body.email;

    res.send(studentName + ' ' + school + ' ' + phone + ' ' + email);
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
