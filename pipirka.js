'use strict';
var table = document.getElementById('field');

   //var sq = new LpartRev(4,2);
   //sq.show();
   /*sq.rotate();
   sq.moveRight();
   sq.show()
setTimeout(function() {
   sq.clear();
   sq.moveDown();
   sq.show();
   },1000);*/


   var theGame = new Game(10);
   theGame.startGame();
   //setInterval("theGame.tick();", theGame.tickTime);
   //document.addEventListener("click",alert('hello'));
   //if (a.keyCode == 65){alert('a');};
    //theGame.startGame();
   var body = document.querySelector('body');
   body.onkeydown = function(e){
      if (e.keyCode == 37){
         theGame.part.moveLeft();
      };
       if (e.keyCode == 39){
           theGame.part.moveRight();
       };
       i

   };