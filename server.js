var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;


// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))



 require('./app/routing/apiRoutes.js')(app);
 require('./app/routing/htmlRoutes.js')(app);





app.listen(PORT, function(){
	console.log("App is listening on PORT: " + PORT);
});

