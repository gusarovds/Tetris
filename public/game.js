class Game {
    constructor(){
        this.competitive = true;
        this.playerName = '';
        this.pileCols = [];
        this.pileRows = [];
        this.pileColors = [];
        this.randomPart();
        this.part = this.nextPart;
        this.updateLeaderboard();
        this.fillWithColor();
        this.scores = 0;
        this.gameIsOn = false;
    };

    randomPart(){
      var rand = Math.floor(Math.random() * 7);

        switch (rand) {
            case 0:
                this.nextPart = new Opart(0,Math.floor(table.rows[1].cells.length/2-1));
                this.nextPart.color = 'PaleTurquoise';
                break;
            case 1:
                this.nextPart = new Ipart(0,Math.floor(table.rows[1].cells.length/2-1));
                this.nextPart.color = 'Plum';
                break;
            case 2:
                this.nextPart = new Tpart(0,Math.floor(table.rows[1].cells.length/2-1));
                this.nextPart.color = 'Pink';
                break;
            case 3:
                this.nextPart = new Zpart(0,Math.floor(table.rows[1].cells.length/2-1));
                this.nextPart.color = 'Thistle';
                break;
            case 4:
                this.nextPart = new Lpart(0,Math.floor(table.rows[1].cells.length/2-1));
                this.nextPart.color = 'SkyBlue';
                break;
            case 5:
                this.nextPart = new ZpartRev(0,Math.floor(table.rows[1].cells.length/2-1));
                this.nextPart.color = 'PaleVioletRed';
                break;
            case 6:
                this.nextPart = new LpartRev(0,Math.floor(table.rows[1].cells.length/2-1));
                this.nextPart.color = 'Aquamarine';
                break;
        };
    };

    fillWithColor(){
        for (var i = 0; i < table.rows.length; i++){
          for (var j = 0; j < table.rows[i].cells.length; j++){
              table.rows[i].cells[j].style.backgroundColor = this.part.fieldColor;
          };
        };
    };

    startGame(speed){
        this.tickTime = Math.floor(1000/speed);
        this.pileCols = [];
        this.pileRows = [];
        this.pileColors = [];
        this.randomPart();
        this.part = this.nextPart;
        this.randomPart();
        this.fillWithColor();
        if (!this.gameIsOn) {
            this.gameIsOn = true;
            var self = this;
            this.ticktack = setInterval(function () {
                self.tick();
            }, self.tickTime);
        };
        var self = this;
        body.onkeydown = function(e){
            if (e.keyCode == 37){
                self.moveLeft();
            };
            if (e.keyCode == 39){
                self.moveRight();
            };
            if (e.keyCode == 38){
                self.rotateLeft();
            };
            if (e.keyCode == 40){
                self.rotateRight();
            };
            if (e.keyCode == 32){
                self.moveMaxDown();
            };
        };
        this.updateScores(0);
    };

    showPile(){
        for (var i = 0; i < this.pileRows.length; i++){
            if (this.pileRows[i] >= 0) {
                table.rows[this.pileRows[i]].cells[this.pileCols[i]].style.backgroundColor = this.pileColors[i];
            };
        };
    };

    clearPile(){
        for (var i = 0; i < this.pileRows.length; i++){
            if (this.pileRows[i] >= 0) {
                table.rows[this.pileRows[i]].cells[this.pileCols[i]].style.backgroundColor = this.part.fieldColor;
            };
        };
    };


    checkPartForPile(){
        var check = false;
            for (var i = 0; i < this.part.dotRows.length; i++) {
                for (var j = 0; j < this.pileRows.length; j++) {
                    if ((this.part.dotRows[i] == this.pileRows[j]) && (this.part.dotCols[i] == this.pileCols[j])) {
                        check = true;
                    };
                };
            };
        return check;
    };


    moveLeft() {
        this.part.clear();
        this.part.bottomCol--;
        this.part.assemble();
            if (this.part.checkLeftBoarder()||this.checkPartForPile()) {
                this.part.bottomCol++;
                this.part.assemble();
        };
        this.part.show();
    };

    moveRight() {
        this.part.clear();
        this.part.bottomCol++;
        this.part.assemble();
            if (this.part.checkRightBoarder()||this.checkPartForPile()) {
                this.part.bottomCol--;
                this.part.assemble();
        };
        this.part.show();
    };

    moveMaxDown(){
        this.part.clear();
        while ((!this.part.checkBotBoarder())&&(!this.checkPartForPile())){
            this.part.moveDown();
        };
        this.addToPile();
    };

    rotateLeft(){
        this.part.clear();
        this.part.changeRotationLeft();
        if (this.part.checkRightBoarder()||this.checkPartForPile()||this.part.checkLeftBoarder()){
            this.part.changeRotationRight();
        };
        this.part.show();
    };

    rotateRight(){
        this.part.clear();
        this.part.changeRotationRight();
        if (this.part.checkRightBoarder()||this.checkPartForPile()||this.part.checkLeftBoarder()){
            this.part.changeRotationLeft();
        };
        this.part.show();
    };

    addToPile() {
        if ((this.part.checkBotBoarder())||(this.checkPartForPile())){
            this.part.moveUp();
            for (var i = 0; i < this.part.dotRows.length; i++ ){
                this.pileCols.push(this.part.dotCols[i]);
                this.pileRows.push(this.part.dotRows[i]);
                this.pileColors.push(this.part.color);
            };
            this.removeFullRows();
            this.part = this.nextPart;
            if (this.checkPartForPile()){
                clearInterval(this.ticktack); //Game Over
                this.endgame();
            };
            this.randomPart();
            this.showPile();
        };
    };

    getFullRows(){
        var fullRows = [];
        for (var i = 0; i < table.rows.length; i++){
            var dotsInRow = 0;
            for (var j = 0; j < this.pileRows.length; j++){
                if (this.pileRows[j] == i) {
                    dotsInRow++;
                };
            };
            if (dotsInRow == table.rows[i].cells.length){
                fullRows.push(i);
            };
        };
        return fullRows;
    };

    addScores(score,multiplier){
        this.scores = this.scores + score*multiplier;
        this.updateScores(this.scores);
    };

    updateScores(score){
        var str = 'Score: ' + score;
        document.getElementById('scoreValue').innerHTML = str;
    };

    removeFullRows(){
        this.clearPile();
        var removedDots = 0;
        var fullRows = this.getFullRows();
            for (var i = 0; i < fullRows.length; i++) {
                for (var j = this.pileRows.length; j >= 0; j--) {
                    if (fullRows[i] === this.pileRows[j]) {
                        this.pileRows.splice(j, 1);
                        this.pileCols.splice(j, 1);
                        this.pileColors.splice(j, 1);
                        removedDots++;
                    } else if (this.pileRows[j] < fullRows[i]) {
                        this.pileRows[j]++;
                    };
                };
            };
            if (fullRows.length > 0) {
                this.addScores(removedDots, fullRows.length);
            };
        this.showPile();
    };

    updateLeaderboard(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','/data/leaderboard', true);
        xhr.send();
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                for (var i = 0; i < response.length; i++){
                    leaderboard.rows[i].cells[0].textContent = response[i].playerName;
                    leaderboard.rows[i].cells[1].textContent = response[i].score;
                };
            };
        };
    };

    addResults(playerName, score){
        var xhr = new XMLHttpRequest();   // new HttpRequest instance
        xhr.open("POST", "/data/leaderboard");
        xhr.setRequestHeader("Content-Type", "application/json");
        var self = this;
        xhr.onreadystatechange = processRequest;
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                self.updateLeaderboard();
            };
        };
        xhr.send(JSON.stringify({
            playerName: playerName,
            score: score
        }));
    };

    endgame(){
        this.gameIsOn = false;
        var self = this;
        if (this.competitive){
            this.addResults(this.playerName, this.scores);
        };
        body.onkeydown = function(e){
            if (e.keyCode == 37){
            };
            if (e.keyCode == 39){
            };
            if (e.keyCode == 38){
            };
            if (e.keyCode == 40){
            };
            if (e.keyCode == 32){
            };
        };
        playButton.style.visibility = "initial";
    };

    tick(){
        this.part.clear();
        this.part.moveDown();
        this.addToPile();
        this.part.show();
    };

};