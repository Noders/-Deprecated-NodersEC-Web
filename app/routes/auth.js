var express = require('express'),
    router  = express.Router(),
    passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;


passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/twitter/callback"
},
function(token, tokenSecret, profile, done){
  console.log(profile);
}));


router.get('/coursenode',
  passport.authenticate('twitter', { successRedirect: '/nodejs',
                                     failureRedirect: '/' }));


router.get('/nodejs', function(req,res){
   res.render('formNode');
});


module.exports = router;
