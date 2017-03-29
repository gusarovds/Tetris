class Game {
    constructor(speed){
        this.randomPart();
        this.pileCols = [];
        this.pileRows = [];
        this.tickTime = 1100 - 100*speed;
        this.part.show();
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
        };
    };

    randomPart(){
        var rand = Math.floor(Math.random() * 7);

        switch (rand) {
            case 0:
                this.part = new Opart(0,4);
                this.part.color = 'Crimson'
                break;
            case 1:
                this.part = new Ipart(0,4);
                this.part.color = 'BlueViolet'
                break;
            case 2:
                this.part = new Tpart(0,4);
                this.part.color = 'DarkCyan'
                break;
            case 3:
                this.part = new Zpart(0,4);
                this.part.color = 'DeepSkyBlue'
                break;
            case 4:
                this.part = new Lpart(0,4);
                this.part.color = 'LawnGreen'
                break;
            case 5:
                this.part = new ZpartRev(0,4);
                this.part.color = 'DarkOrange'
                break;
            case 6:
                this.part = new LpartRev(0,4);
                this.part.color = 'Tomato'
                break;
        };
    };

    startGame(){
        var self = this;
        setInterval(function(){self.tick();},self.tickTime);
    };

    checkSidesForPile(){
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

    checkDotForPile(){
        var check = false;
        for (var i = 0; i < this.part.dotRows.length; i++){
            for (var j = 0; j < this.pileRows.length; j++){
                if ((this.part.dotRows[i] == this.pileRows[j] - 1) && (this.part.dotCols[i] == this.pileCols[j])){
                    check = true;
                };
            };
        };
        return check;
    };

    moveLeft() {
        this.part.clear();
        /*for (var i = 0; i < this.part.dotRows.length; i++){
            this.part.dotCols[i]--;
        };*/
        this.part.bottomCol--;
        this.part.rotate();
            if (this.part.checkLeftBoarder()||this.checkSidesForPile()) {
                /*for (var i = 0; i < this.part.dotRows.length; i++){
                    this.part.dotCols[i]++;

            };*/
                this.part.bottomCol++;
                this.part.rotate();
        };
        this.part.show();
    };

    moveRight() {
        this.part.clear();
        /*for (var i = 0; i < this.part.dotRows.length; i++){
            this.part.dotCols[i]++;
        };*/
        this.part.bottomCol++;
        this.part.rotate();
            if (this.part.checkRightBoarder()||this.checkSidesForPile()) {
                /*for (var i = 0; i < this.part.dotRows.length; i++){
                    this.part.dotCols[i]--;

            };*/
                this.part.bottomCol--;
                this.part.rotate();
        };
        this.part.show();
    };

    rotateLeft(){
        this.part.clear();
        this.part.changeRotationLeft();
        if (this.part.checkRightBoarder()||this.checkSidesForPile()||this.part.checkLeftBoarder()){
            this.part.changeRotationRight();
        };
        this.part.show();
    };

    rotateRight(){
        this.part.clear();
        this.part.changeRotationRight();
        if (this.part.checkRightBoarder()||this.checkSidesForPile()||this.part.checkRightBoarder()){
            this.part.changeRotationLeft();
        };
        this.part.show();
    };


    addToPile() {
        if ((this.part.checkBotBoarder())||(this.checkDotForPile())){
            for (var i = 0; i < this.part.dotRows.length; i++ ){
                this.pileCols.push(this.part.dotCols[i]);
                this.pileRows.push(this.part.dotRows[i]);
                this.removeFullRows();
            };
           this.randomPart();
        };
    };

    getFullRows(){
        var fullRows = [];
        for (var i = 0; i < table.rows.length; i++){
            var dotsInRow = 0;
            for (var j = 0; j < this.pileRows.length; i++){
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

    removeRow(row){
        for (var i = row; i > 0; i--){
            for (var j = 0; j < table.rows[i].cells.length; j++){
                table.rows[i].cells[j].style.backgroundColor = table.rows[i-1].cells[j].style.backgroundColor;
            };
        };
        for (var i = 0; i < table.rows[0].cells.length; j++){
            table.rows[0].cells[i].style.backgroundColor = 'white';
        };
    };

    removeFullRows(){
        var fullRows = this.getFullRows();
        for (var i = 0; i < fullRows.length; i++){
            for (var j = 0; i < this.pileRows.length; i++){
                if (fullRows[i] == this.pileRows[j]){
                    this.pileRows.splice(j,1);
                    this.pileCols.splice(j,1);
                    j--;
                };
            };
            removeRow(i);
        };
    };

    tick(){
        if (this.part.checkBotBoarder()){table.rows[0].cells[0].style.backgroundColor = "red";};
        this.part.clear();
        this.part.moveDown();
        this.part.show();
        this.addToPile();
        //this.removeFullRows();
    };

};