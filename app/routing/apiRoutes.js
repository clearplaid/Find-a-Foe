const path = require("path");

var frenemyData = require('../data/frenemies');

// apiRoutes.js file should contain two routes:
module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/frenemies", function (req, res) {
    res.json(frenemyData);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/frenemies", function(req, res) {
    // save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
    console.log("current User: " + JSON.stringify(req.body));

    var currentUser = req.body;
    // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    var currentUserScores = currentUser.scores;
    for (let i = 0; i < currentUserScores.length; i++) {
        currentUser.scores[i] = parseInt(currentUser.scores[i]);
    }
    console.log("current user scores: " + currentUser.scores);
    
    var friendIndex = 0;
    var enemyIndex = 0;
    var minimumDifference = 40;
    var maxDifference = 0;

        // compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
        for (let i = 0; i < frenemyData.length; i++) {

            var totalDifference = 0;
            for (let j = 0; j < frenemyData[i].scores.length; j++) {
                // use the absolute value of the differences.
                var difference = Math.abs(currentUserScores[j] - frenemyData[i].scores[j]);
                totalDifference += difference; 
            }
            console.log("total diff: " + totalDifference);
                  
            // The closest match will be the user with the least amount of difference.

            if(totalDifference < minimumDifference) {
                friendIndex = i;
                minimumDifference = totalDifference;
                console.log("Current Minimum: " + minimumDifference);
            }  
            if(totalDifference > maxDifference) {
                enemyIndex = i;
                maxDifference = totalDifference;
                console.log("Current Max: " + maxDifference);
            }       
        };
        frenemyData.push(currentUser);
        res.json({status: "ok", friendName: frenemyData[friendIndex].name, friendImage: frenemyData[friendIndex].photo, enemyName: frenemyData[enemyIndex].name, enemyImage: frenemyData[enemyIndex].photo});
   });

};