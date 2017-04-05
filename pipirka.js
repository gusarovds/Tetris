'use strict';
var table = document.getElementById('field');
var body = document.querySelector('body');
var playerName = document.getElementById('playerName');
var speed = document.getElementById('speed');
var casualButton = document.getElementById('startCasual');
var competitiveButton = document.getElementById('startCompetitive');

   var theGame = new Game();
   casualButton.addEventListener("click", function() {
       theGame.competitive = false;
       theGame.startGame(speed.value);
       if (document.activeElement != document.body) document.activeElement.blur();
   });
    competitiveButton.addEventListener("click", function() {
        theGame.competitive = true;
        theGame.playerName = playerName.value;
        theGame.startGame(7);
        if (document.activeElement != document.body) document.activeElement.blur();


});


