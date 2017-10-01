// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of hopermation on table-data, waitinglist, etc.
// ===============================================================================

// The follow two lines work with data in the js files
// This data is only persistent until the server is restarted

// ===============================================================================
// ROUTING
// ===============================================================================
var hope = require("../data/friends")
var skore = 0; //this will eventually be the value I get from results and get the total score
var point = 0;
var match = ""



console.log(skore)
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        console.log("app.get is running in apiroutes")
        res.json(hope);
    });

    app.post("/api/friends",
        function(req, res) {
            hope.push(req.body)

            console.log("app.post is running in apiroutes")
            console.log(req.body)
            var eval = [];
            var ftotal = 0;
            var diff = [];

            for (i = 0; i < req.body.scores.length; i++) {
                skore = skore + parseInt(req.body.scores[i]);
            }

            console.log(skore)

            for (i = 0; i < hope.length-1; i++) {
                for (j = 0; j < hope[i].scores.length; j++) {
                    ftotal = ftotal + hope[i].scores[j]
                }
                eval.push(ftotal)
                ftotal = 0
            }

            console.log("eval=" + eval)
            console.log("ftotal=" + ftotal)

            for (k = 0; k < hope.length-1; k++) {

                diff.push(Math.abs(skore - eval[k]));
            }

            var a = diff[0];
            var b = diff[0];

            for (i = 0; i < diff.length; i++) {
                if (diff[i] > a) {
                    a = diff[i]
                } else if (diff[i] < b) {
                    b = diff[i]
                }
            }
            console.log("diff=" + diff)
            console.log("b=" + b)
            console.log(diff.indexOf(b))

            point = diff.indexOf(b)

            match = hope[point]

            if (match) {
                console.log("Congrats! You matched with " + match.name)
                res.json(match)
                ftotal=0;
                skore=0;
                match=""
                diff=[];
                eval=[];

                    //This will eventually post to the modal
            } else {
                console.log("Something's wrong, maybe you'll find love one day, but it's not going to be here!")

                //This will also eventually post to the modal
            }

        });

}