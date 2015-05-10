var mongose = require('mongoose');



var Contact = mongose.model('Contact',{
	email : String
});


module.exports = Contact;
