# Friend-or-Foe
https://friend-or-foe.herokuapp.com/
Node and Express Servers App

Find your best match!


## Overview

A compatibility-based "FriendFinder" application -- basically a dating app for cats. This full-stack site takes in results from user surveys, compares their answers with other users. The app displays the name and image of the user with the best overall match.

<img src="https://github.com/clearplaid/Friend-or-Foe/blob/master/app/public/assets/images/cat-main.png" alt="cat main" width="400">

Uses Express to handle routing is deployed to Heroku so other users can fill it out.

## Instructions
The survey has 10 questions about your love for cats...or lack ther of. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

<img src="https://github.com/clearplaid/Friend-or-Foe/blob/master/app/public/assets/images/cat-questions.png" alt="cat survey" width="400">

The server.js file requires the basic npm packages: express and path.

The htmlRoutes.js file includes two routes:

  A GET Route to /survey which displays the survey page.

  A default, catch-all route that leads to home.html which displays the home page.

The apiRoutes.js file contains two routes:

  A GET route with the url /api/frenemies. This displays a JSON of all possible frenemies.
  
  A POST routes /api/frenemies. This is used to handle incoming survey results. This route is also used to handle the   compatibility logic.

The application's data is saved inside of app/data/frenemies.js as an array of objects. Each of these objects follow the format below.

{
  "name":"BadKitty",
  "photo":"https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-64-57b32778a2fe1__605.jpg",
  "scores":[
      3,
      1,
      4,
      4,
      3,
      1,
      2,
      3,
      4,
      1
    ]
}

Combatibility Matching:

Convert user's results into an array of numbers (ex: [3, 1, 4, 4, 3, 1, 2, 3, 4, 1]).
Compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:
User 1: [3, 1, 4, 4, 3, 1, 2, 3, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 0 + 1 + 2 + 0 + 2 + 0 + 2 + 0 + 0 = 7

We use the absolute value of the differences so there are no negative solutions! 
The closest match will be the user with the least amount of difference.
Once the app finds the current user's most compatible friend, it displays the result as a modal pop-up.

The modal displays both the name and picture of the closest match.

<img src="https://github.com/clearplaid/Friend-or-Foe/blob/master/app/public/assets/images/cat-match.png" alt="cat match" width="400">
