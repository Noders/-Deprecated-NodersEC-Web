var express  = require('express'),
	  router   = express.Router(),
    unirest  = require('unirest');
	  Contact  = require('../models/contact');


router.get('/',function(req,res) {
  res.render('index');
});

router.post('/subscribe' , function(req,res){
	var validator = require('validator');
	var response = {
		'formstatus' : 1,
		'message' : 'Ingrese un correo electrónico valido'
	};

	if(req.body.email.length > 0){
		if(validator.isEmail(req.body.email)){

			var contacto  = Contact({
				email : req.body.email
			});

			contacto.save(function(err,contact){
				if(err){
					response.message = 'Ocurrio un error';
					res.send(response);
				}else{
					response.formstatus = 0;
					response.message = '¡Gracias por suscribirte! <i class="ion-social-nodejs"></i> <i class="fa fa-heart red"></i> ';
					res.send(response);
				}
			});

		}


	}

});

module.exports = router;
