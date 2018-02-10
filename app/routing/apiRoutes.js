var friendsData = require ("../data/friends.js");


module.exports = function (app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res){

		var friendMatch = {
			name:"",
			photo:"",
		};

		console.log(req.body);

		var userData = req.body;
		var userScores = userData.scores;

		console.log("This is in API Routes " + userScores);

		friendsData.push(userData);

	});

};







