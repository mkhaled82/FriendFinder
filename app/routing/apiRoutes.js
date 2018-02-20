var friendsData = require ("../data/friends.js");


module.exports = function (app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res){

		var friendMatch = {
			name:"",
			photo:"",
			friendDifference:0
		};

		console.log(req.body);
		

		var userData = req.body;
		var userScores = userData['scores[]'];
		var diffScores=[];
		var difference = 0;
		//console.log("This is in API Routes " + userScores);
		
		for (var i=0; i<friendsData.length; i++){
			console.log("FRIEND NAME :" + friendsData[i].name);
			difference = 0;
			
			for (var j=0; j<friendsData[i]['scores'].length; j++){
				console.log("   SCORE ELEMENT : " + j + " " +friendsData[i]['scores'][j] + " YOUR SCORE " + userScores[j]);
				difference += Math.abs(friendsData[i]['scores'][j] - userScores[j]);

			}
			//console.log(friendMatch);
			diffScores.push(difference);
		}
		//console.log("DIFF SCORES ARRAY = " + diffScores);

		var leastDiff =100;
		var friend;
		for (var i =0; i<diffScores.length; i++){
			if (diffScores[i] < leastDiff) {
				leastDiff = diffScores[i];
				friend = i;
			}
		}
		
		friendMatch.name = friendsData[friend].name;
		friendMatch.photo = friendsData[friend].photo;
		friendMatch.friendDifference = leastDiff;
		console.log(friendMatch);
		console.log("FRIEND # " + friendsData[friend].name);


		

		friendsData.push(userData);
		res.json(friendMatch);

	});

};







