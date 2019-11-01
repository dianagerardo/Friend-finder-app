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
        friendsData.push(you)
        res.json(true);
        console.log(you);
        // console.log(friendsData[0].scores)
        youNums = [];
        function findNums(arr) {
            for (let j = 0; j < arr.length; j++) {

                let nums = parseFloat(arr[j]);
                console.log(nums);
                youNums.push(nums)

            }
            console.log("::::::::::::::::::::::::")
        }

        findNums(you.scores);

        // // Compare the user's number

        // let difference = [];
        matchDiff = [];
        function findDiff(arr1, arr2) {
            for (let i = 0; i < arr1.length; i++) {
                let diff = Math.abs(arr1[i] - arr2[i]);
                console.log(diff);
                matchDiff.push(diff);
            }

            console.log("-----------------------")

        };

        
        findDiff(youNums, friendsData[0].scores);
        

        function sum(num1, num2) {
            return num1 + num2
        };

        let totalDifference = matchDiff.reduce(sum);

        console.log(totalDifference);

        let bestMatch = [];

        if (totalDifference > 10) {
            bestMatch.push(name);
        }

        friendsData.push(bestMatch);

    });

}
