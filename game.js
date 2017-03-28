class Game {
    constructor(speed){
        this.part = new Lpart(0,5);
        this.pileCols = [];
        this.pileRows = [];
        this.tickTime = 1100 - 100*speed;
        this.part.show();
    };

    startGame(){
        var self = this;
        setInterval(function(){self.tick();},self.tickTime);
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

    addToPile() {
        if ((this.part.checkBotBoarder())||(this.checkDotForPile())){
            for (var i = 0; i < this.part.dotRows.length; i++ ){
                this.pileCols.push(this.part.dotCols[i]);
                this.pileRows.push(this.part.dotRows[i]);
            };
            this.part.bottomRow = 0;
            this.part.bottomCol = 5;
            this.part.rotate();
            //alert(this.pileRows);
        }
    };


    tick(){
        if (this.part.checkBotBoarder()){table.rows[0].cells[0].style.backgroundColor = "red";};
        this.part.clear();
        this.part.moveDown();
        this.part.show();
        this.addToPile();
    };

};