
var express = require('express');
var moment = require('moment');
var parseExpressHttpsRedirect = require('parse-express-https-redirect');

var defaultController = require('cloud/controllers/default.js');
//var adminController = require('cloud/controllers/admin.js');
var doubtController = require('cloud/controllers/doubt.js');
//var projectController = require('cloud/controllers/project.js');
//var projectViewController = require('cloud/controllers/projectnews.js');
var timelineController = require('cloud/controllers/timeline.js');


var app = express();

//Routing

app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.use(parseExpressHttpsRedirect());
app.use(express.bodyParser());
app.use(express.methodOverride());


app.get('/', doubtController.index);
//app.get('/', defaultController.index);
/*app.get("/", function(req, res){
	res.render('default', {
		text: req.param('id'),
		status:"Nil",
		course:"Nil",
		subject:"Nil",
		topic:"Nil"
	});
});*/
app.get('/landing', defaultController.landing);
app.get('/privacy', defaultController.privacy);
app.get('/tos', defaultController.tos);
app.get('/hello', defaultController.hello);
app.get('/post', defaultController.post);



app.listen();




















// These two lines are required to initialize Express in Cloud Code.
/* express = require('express');
 app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/hello', function(req, res) {
  res.render('hello');
});


app.get('/landing', function(req, res) {
  res.render('landing');
});

app.get('/privacy', function(req, res) {
  res.render('privacy');
});

app.get('/post', function(req, res) {
  res.render('post');
});

app.get('/tos', function(req, res) {
  res.render('tos');
});
// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen();*/
