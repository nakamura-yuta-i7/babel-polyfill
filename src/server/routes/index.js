var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var get = Promise.promisify(get)
	function get(name, callback) {
		setTimeout(function() {
			callback(null, name)
		}, 0)
	}
	
	co(function *() {
		console.log( "nyaon" );
	  var a = yield get("a.txt");
	  var b = yield get("b.txt");
	  var c = yield get("c.txt");
	  console.log({a, b, c});
		
		res.json( {a, b, c} )
		
	}).catch(function() {
		console.log( arguments );
	});
	
});

module.exports = router;
