var express 	       = require('express'),
	  path    	       = require('path'),
	  favicon 	       = require('serve-favicon'),
	  cookieParser     = require('cookie-parser'),
	  bodyParser       = require('body-parser'),
	  consolidate      = require('consolidate'),
	  swig             = require('swig');


module.exports = function(){


  var app = express();
  app.set('view engine','html');
  app.set('views', __dirname + '/../app/views');
  app.engine('.html',consolidate.swig);

  app.set('view cache', true);
  swig.setDefaults({ cache: false });
  app.use(favicon(__dirname + '/../public/images/favico.ico'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  var cacheTime = 86400000*7;
  app.use(express.static(path.join(__dirname, '/../public'),{ maxAge: cacheTime }));

  return app;
};
