var express = require('express');
var bodyParser = require('body-parser');

var request = require('request');


const http = require('http')
var PORT = 8080;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}))

app.use(express.static('./public'));

app.listen(process.env.PORT || 8080);
console.log("Listening on port", PORT);

// ROUTES =================================
app.get('/', function(req, res){
    res.sendFile('./public/index.html');
});

app.get('/contact', function(req, res) {
	request()
});

function sendDataToServer(survey) {
    var resultAsString = JSON.stringify(survey.data);
    alert(resultAsString); //send Ajax request to your web server.
  }


