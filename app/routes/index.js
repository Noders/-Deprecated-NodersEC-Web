var express  = require('express'),
	  router   = express.Router(),
    unirest  = require('unirest');


router.get('/',function(req,res) {
  res.render('index');
});

module.exports = router;
