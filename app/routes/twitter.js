var Twitter = require('twitter'),
    express = require('express'),
    router  = express.Router(),
    Q       = require('q'),
    apicache = require('apicache').options({ debug: false }).middleware;


var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


function favorites(){
  var d = Q.defer();
  client.get('favorites/list',{ count : 6},function(error, tweets, response){
      if (error){
        d.reject(error);
      }else{
        d.resolve(tweets);
      }
  });
  return d.promise;
}


router.get('/twitts' , apicache('1 hour'),function(req,res){
  favorites()
  .then(function(data){
      res.send(data);
  })
  .catch(function (e){
     res.send(e);
  })
  .done();
});

module.exports = router;
