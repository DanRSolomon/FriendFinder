var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userScore = userInput.scores;
        var matchedFriend = "";
        var smallestDifference = 5000;

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            for (var j = 0; j < userScore.length; j++) {
                difference += Math.abs(friends[i].scores[j] - userScore[j]);
            }
            if (difference < smallestDifference) {
                smallestDifference = difference;
                matchedFriend = friends[i];
            }

        }

        friends.push(userInput);
        res.send(matchedFriend);
    })

}
