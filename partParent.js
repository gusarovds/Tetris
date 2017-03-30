

class Part {
    constructor (posRow, posCol){
        this.bottomRow = posRow;
        this.bottomCol = posCol;
        this.dotCols = [];
        this.dotRows = [];
        this.rotation = 0;
        this.color = 'red';
        this.rotate();
    };

    moveDown() {
        this.bottomRow++;
        this.rotate();
    };

    moveUp() {
        this.bottomRow--;
        this.rotate();
    };

    checkLeftBoarder(){
        var check = false;
        for (var i = 0; i < this.dotRows.length; i++){
            if (this.dotCols[i] < 0) {
                check = true;
            };
        };
        return check;
    };

    checkRightBoarder(){
        var check = false;
        for (var i = 0; i < this.dotRows.length; i++){
            if (this.dotCols[i] >= table.rows[i].cells.length) {
                check = true;
            };
        };
        return check;
    };

    checkTopBoarder(dot){
        var check = true;
        if (this.dotRows[dot] < 0) { check = false };
        return check;
    };


    checkBotBoarder(){
        var check = false;
        for (var i = 0; i < this.dotRows.length; i++) {
            if (this.dotRows[i] == table.rows.length) {
                check = true;
            };
        };
        return check;
    };

    show() {
        for (var i = 0; i < this.dotRows.length; i++){
            if ((this.checkTopBoarder(i))&&(this.dotRows[i] < table.rows.length)) {
                table.rows[this.dotRows[i]].cells[this.dotCols[i]].style.backgroundColor = this.color;
            };
        };
    };

    clear() {
        for (var i = 0; i < this.dotRows.length; i++){
            if ((this.checkTopBoarder(i))&&(this.dotRows[i] < table.rows.length)) {
                table.rows[this.dotRows[i]].cells[this.dotCols[i]].style.backgroundColor = "white";
            };
        };
    };

    rotate() {};

    changeRotationRight() { if (this.rotation < 3) {this.rotation++; this.rotate()} else {this.rotation = 0; this.rotate()} };

    changeRotationLeft() { if (this.rotation > 0) {this.rotation--; this.rotate()} else {this.rotation = 3; this.rotate()} };


};