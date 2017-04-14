var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(80, function () {
    console.log('Example app listening on port 80!');

    var sqlite3 = require('sqlite3').verbose();
    if (!fs.existsSync('./data')){
        fs.mkdirSync('./data');
    };
    var db = new sqlite3.Database('./data/leaderboard');
    db.run("CREATE TABLE IF NOT EXISTS leaderboard (playerName TEXT, score INT)");


    function addToDb(playerName, score){
        var stmt = db.prepare("INSERT INTO leaderboard (playerName, score) VALUES (?,?)");
        stmt.run(playerName, score);
        stmt.finalize();
    };

    function getTopResults(callback){
        var dbarr = [];
        db.each("SELECT * FROM leaderboard ORDER BY score DESC LIMIT 10", function (err, row) {
            dbarr.push({
                playerName: row.playerName,
                score: row.score
            });

        }, function (err, row) {
        callback(dbarr);
        });
    };

    app.get('/data/leaderboard', function (req, res) {
        getTopResults(function (topResults) {
            res.json(topResults);

        });
    });
    app.post('/data/leaderboard', function (req, res) {
        addToDb(req.body.playerName, req.body.score);
    });
});