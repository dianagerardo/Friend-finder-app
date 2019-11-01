// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
let friendsData = require("../data/friend");


//  ROUTING //

module.exports = function (app) {
    app.get("/api/friend", function (req, res) {
        res.json(friendsData);

    });

    app.post("/api/friend", function (req, res) {
        let you = req.body;
        friendsData.push(match);
        res.json(true);
        console.log(you);
        // console.log(friendsData[0].scores)

        let user1 = friendsData[0];
        let user1Numbers = user1.scores
        let user2 = you;
        let user2Numbers = user2.scores

        let user1Scores = [];
        let user2Scores = [];

        for (let i = 0; i < user1Numbers.length; i++) {

            let numbers1 = parseFloat(user1Numbers[i]);
            console.log(numbers1);
            user1Scores.push(numbers1);

        }

        console.log("------------------")

        for (let j = 0; j < user2Numbers.length; j++) {

            let numbers2 = parseFloat(user2Numbers[j]);
            console.log(numbers2);
            user2Scores.push(numbers2);

        }

        console.log("::::::::::::::::::::::::")

        // Compare the user's number

        let difference = [];

        for (let k = 0; k < user1Scores.length; k++) {
            let diff = Math.abs(user1Scores[k] - user2Scores[k]);
            // console.log(diff);
            difference.push(diff);
            // console.log(difference);

        }


        function sum(num1, num2) {
            return num1 + num2
        };

        let totalDifference = difference.reduce(sum);

        console.log(totalDifference);

        let bestMatch = [];

        if(totalDifference>10){
            bestMatch.push(user1.name);
        }

    });

}
