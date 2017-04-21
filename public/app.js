'use strict';
var table = document.getElementById('field');
var body = document.querySelector('body');
var playerName = document.getElementById('playerName');
var speed = document.getElementById('speed');
var casualButton = document.getElementById('startCasual');
var competitiveButton = document.getElementById('startCompetitive');
var leaderboard = document.getElementById('leaderboard');
var playButton = document.getElementById('playButton')


   var theGame = new Game();
   playButton.addEventListener("click", function() {
       if (document.getElementsByClassName("tablinks")[0].className != "tablinks") {
           theGame.competitive = true;
           theGame.playerName = playerName.value;
           theGame.startGame(7);
       } else {
           theGame.competitive = false;
           theGame.startGame(speed.value);
       };
       if (document.activeElement != document.body) document.activeElement.blur();
       playButton.style.visibility = "hidden";
   });


    function updateTextInput(val) {
        document.getElementById('speedValue').innerHTML="Speed: " + val;
    }
    function switchGameMode(evt, gameMode) {
        var i, gameModeTab, tablinks;
        gameModeTab = document.getElementsByClassName("gameModeTab");
        for (i = 0; i < gameModeTab.length; i++) {
            gameModeTab[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(gameMode).style.display = "block";
        evt.currentTarget.className += " active";
    }


