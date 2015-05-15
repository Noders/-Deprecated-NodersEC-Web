
var app   = require('./config/express')(),
	  index = require('./app/routes/index'),
		error = require('./app/routes/errors'),
		twitt = require('./app/routes/twitter'),
		mongoose  =require('mongoose');
		mongoose.connect(process.env.MONGOURI);

app.use(index);
app.use(twitt);
app.use(error);

var server = app.listen(8080);
