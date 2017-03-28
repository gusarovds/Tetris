

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

    moveLeft() {
        this.clear();
        for (var i = 0; i < this.dotRows.length; i++){
            this.dotCols[i]--;
        };
        if (!this.checkLeftBoarder()){
            while (!this.checkLeftBoarder()) {
                for (var i = 0; i < this.dotRows.length; i++){
                    this.dotCols[i]++;
                };
            };
        };
        this.show();
    };

    moveRight() {
        this.clear();
        for (var i = 0; i < this.dotRows.length; i++){
            this.dotCols[i]++;
        };
        if (!this.checkRightBoarder()){
            while (!this.checkRightBoarder()) {
                for (var i = 0; i < this.dotRows.length; i++){
                    this.dotCols[i]--;
                };
            };
        };
        this.show();
    };

    moveDown() {
        for (var i = 0; i < this.dotRows.length; i++){
            this.dotRows[i]++;
        };
    };

    checkLeftBoarder(){
        var check = true;
        for (var i = 0; i < this.dotRows.length; i++){
            if (this.dotCols[i] < 0) {
                check = false;
            };
        };
        return check;
    };

    checkRightBoarder(){
        var check = true;
        for (var i = 0; i < this.dotRows.length; i++){
            if (this.dotCols[i] >= table.rows[i].cells.length) {
                check = false;
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
            if (this.dotRows[i] == table.rows.length - 1) {
                check = true;
            };
        };
        return check;
    };

    show() {

/*        if (!this.checkLeftBoarder()){
            while (!this.checkLeftBoarder()) {this.moveRight()};
        };

        if (!this.checkRightBoarder()){
            while (!this.checkRightBoarder()) {this.moveLeft()};
        };*/

        for (var i = 0; i < this.dotRows.length; i++){
            if (this.checkTopBoarder(i)) {
                table.rows[this.dotRows[i]].cells[this.dotCols[i]].style.backgroundColor = this.color;
            };
        };
    };

    clear() {
        for (var i = 0; i < this.dotRows.length; i++){
            if (this.checkTopBoarder(i)) {
                table.rows[this.dotRows[i]].cells[this.dotCols[i]].style.backgroundColor = "white";
            };
        };
    };

    rotate() {};

    changeRotationRight() { if (this.rotation < 3) {this.rotation++; this.rotate()} else {this.rotation = 0; this.rotate()} };

    changeRotationLeft() { if (this.rotation > 0) {this.rotation--; this.rotate()} else {this.rotation = 3; this.rotate()} };


};