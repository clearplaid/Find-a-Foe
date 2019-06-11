const path = require("path");

var frenemyData = require('../data/frenemies');
// var friendData = require('../data/friends');
// var foeData = require('../data/foes');

// apiRoutes.js file should contain two routes:
module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/frenemies", function (req, res) {
    res.json(frenemyData);
})

// app.get("/api/friends", function (req, res) {
//     res.json(friendData);
// })

// app.get("/api/foes", function (req, res) {
//     res.json(foeData);
// });

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/frenemies", function(req, res) {
    // save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
    console.log("current User: " + JSON.stringify(req.body));
    console.log("results: " + res);
    var currentUser = req.body;
    // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    var currentUserScores = currentUser.scores;
    
    var friendName = "";
    var friendImage = "";
    var totalDifference = 100;

        // compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
        for (let i = 0; i < frenemyData.length; i++) {

            var difference = 0;
            for(let j = 0; j < currentUserScores; j++) {
                // use the absolute value of the differences.
                difference += Math.abs(frenemies[i].scores[j] - currentUserScores[j])
            }
            // The closest match will be the user with the least amount of difference.
            if(difference < totalDifference) {
            totalDifference = difference;
            }else {
                friendName = frenemyData[i].name;
                friendImage = frenemyData[i].photo;
            }
            
        };
        frenemyData.push(currentUser);
        res.json({status: "ok", friendName: friendName, friendImage: friendImage});
   });

};