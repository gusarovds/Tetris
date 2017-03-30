class Game {
    constructor(speed){
        this.pileCols = [];
        this.pileRows = [];
        this.pileColors = [];
        // this.part = new Ipart(20,5);
        // this.part.rotate();
        // this.addToPile();
        // this.part = new Ipart(19,5);
        // this.part.rotate();
        // this.addToPile();
        // this.part = new Ipart(18,5);
        // this.part.rotate();
        // this.addToPile();
        // this.part = new Ipart(17,5);
        // this.part.rotate();
        // this.addToPile();
        // this.part = new Ipart(16,5);
        // this.part.rotate();
        // this.addToPile();
        // this.showPile();
        this.randomPart();
        this.fieldColor = 'white';
        this.tickTime = 1100 - 100*speed;
        //this.part.show();
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
                this.part.color = 'Crimson';
                break;
            case 1:
                this.part = new Ipart(0,4);
                this.part.color = 'BlueViolet';
                break;
            case 2:
                this.part = new Tpart(0,4);
                this.part.color = 'DarkCyan';
                break;
            case 3:
                this.part = new Zpart(0,4);
                this.part.color = 'DeepSkyBlue';
                break;
            case 4:
                this.part = new Lpart(0,4);
                this.part.color = 'LawnGreen';
                break;
            case 5:
                this.part = new ZpartRev(0,4);
                this.part.color = 'DarkOrange';
                break;
            case 6:
                this.part = new LpartRev(0,4);
                this.part.color = 'Tomato';
                break;
        };
    };

    // colorBoard(){
    //     for (var i = 0; i < table.rows.length; i++){
    //         for (var j = 0; j < table.rows[i].cells.length; j++){
    //             table.rows[i].cells[j].style.backgroundColor = this.fieldColor;
    //         };
    //
    //     };
    //
    // };

    startGame(){
        var self = this;
   //     this.colorBoard();
        setInterval(function(){self.tick();},self.tickTime);
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
                table.rows[this.pileRows[i]].cells[this.pileCols[i]].style.backgroundColor = this.fieldColor;
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
        this.part.rotate();
            if (this.part.checkLeftBoarder()||this.checkPartForPile()) {
                this.part.bottomCol++;
                this.part.rotate();
        };
        this.part.show();
    };

    moveRight() {
        this.part.clear();
        this.part.bottomCol++;
        this.part.rotate();
            if (this.part.checkRightBoarder()||this.checkPartForPile()) {
                this.part.bottomCol--;
                this.part.rotate();
        };
        this.part.show();
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
            this.randomPart();
            this.showPile();
        };
    };

    getFullRows(){
        var fullRows = [];
        var dotsInRow = 0;
        for (var i = 0; i < table.rows.length; i++){
            dotsInRow = 0;
            for (var j = 0; j < this.pileRows.length; j++){
                if (this.pileRows[j] == i) {
                    dotsInRow++;
                };
            };
            if (dotsInRow == table.rows[i].cells.length){
                fullRows.push(i);
            };
        };
        //alert(fullRows);
        return fullRows;
    };

 /*   removeRow(row){
        this.pileClear();
        for (var i = row; i > 0; i--){
            for (var j = 0; j < table.rows[i].cells.length; j++){
                table.rows[i].cells[j].style.backgroundColor = table.rows[i-1].cells[j].style.backgroundColor;
            };
        };
        for (var i = 0; i < table.rows[0].cells.length; i++){
            table.rows[0].cells[i].style.backgroundColor = 'white';
        };
    };*/

    removeFullRows(){
        this.clearPile();
        var fullRows = this.getFullRows();
            for (var i = 0; i < fullRows.length; i++) {
                for (var j = this.pileRows.length; j >= 0; j--) {
                    if (fullRows[i] === this.pileRows[j]) {
                        this.pileRows.splice(j, 1);
                        this.pileCols.splice(j, 1);
                        this.pileColors.splice(j, 1);
                    } else if (this.pileRows[j] < fullRows[i]) {
                        this.pileRows[j]++;
                    };
                };
                //this.removeRow(fullRows[i]);
            };
        this.showPile();
    };

    tick(){
        this.part.clear();
        this.part.moveDown();
        this.addToPile();
        this.part.show();


    };

};