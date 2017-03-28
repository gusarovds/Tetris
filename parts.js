
class Opart extends Part {

    rotate() {
        this.dotRows[0] = this.bottomRow;
        this.dotCols[0] = this.bottomCol;
         
        this.dotRows[1] = this.bottomRow - 1;
        this.dotCols[1] = this.bottomCol;
         
        this.dotRows[2] = this.bottomRow;
        this.dotCols[2] = this.bottomCol - 1;
         
        this.dotRows[3] = this.bottomRow - 1;
        this.dotCols[3] = this.bottomCol - 1;
         
    };

};

class Ipart extends Part {

    rotate() {
        if ((this.rotation == 0)||(this.rotation == 2)){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow;
            this.dotCols[1] = this.bottomCol - 1;
             
            this.dotRows[2] = this.bottomRow;
            this.dotCols[2] = this.bottomCol + 1;
             
            this.dotRows[3] = this.bottomRow;
            this.dotCols[3] = this.bottomCol + 2;
             
        } else {
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 2;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 3;
            this.dotCols[3] = this.bottomCol;
             
        };
    };

};

class Zpart extends Part {

    rotate() {
        if ((this.rotation == 0)||(this.rotation == 2)){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol - 1;
             
            this.dotRows[3] = this.bottomRow;
            this.dotCols[3] = this.bottomCol + 1;
             
        } else {
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol - 1;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol - 1;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 2;
            this.dotCols[3] = this.bottomCol;
             
        };
    }
};

class ZpartRev extends Part {

    rotate() {
        if ((this.rotation == 0)||(this.rotation == 2)){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol + 1;
             
            this.dotRows[3] = this.bottomRow;
            this.dotCols[3] = this.bottomCol - 1;
             
        } else {
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol + 1;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol + 1;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 2;
            this.dotCols[3] = this.bottomCol;
             

        };
    };
};

class Tpart extends Part {

    rotate() {
        if (this.rotation == 0){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow;
            this.dotCols[2] = this.bottomCol + 1;
             
            this.dotRows[3] = this.bottomRow;
            this.dotCols[3] = this.bottomCol - 1;
             
        } else if (this.rotation == 1){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 2;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 1;
            this.dotCols[3] = this.bottomCol + 1;
             
        } else if (this.rotation == 2){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol + 1;
             
            this.dotRows[3] = this.bottomRow - 1;
            this.dotCols[3] = this.bottomCol - 1;
             
        } else
        {
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 2;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 1;
            this.dotCols[3] = this.bottomCol - 1;
             

        };
    };
};

class Lpart extends Part {

    rotate() {
        if (this.rotation == 0){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow;
            this.dotCols[2] = this.bottomCol + 1;
             
            this.dotRows[3] = this.bottomRow - 2;
            this.dotCols[3] = this.bottomCol;
             
        } else if (this.rotation == 1){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol - 1;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol - 1;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 1;
            this.dotCols[3] = this.bottomCol + 1;
             
        } else if (this.rotation == 2){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 2;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 2;
            this.dotCols[3] = this.bottomCol - 1;
             
        } else
        {
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol - 1;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol - 1;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 1;
            this.dotCols[3] = this.bottomCol + 1;
             

        };
    };
};

class LpartRev extends Part {

    rotate() {
        if (this.rotation == 0){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow;
            this.dotCols[2] = this.bottomCol - 1;
             
            this.dotRows[3] = this.bottomRow - 2;
            this.dotCols[3] = this.bottomCol;
             
        } else if (this.rotation == 1){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol + 1;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol + 1;
             
            this.dotRows[2] = this.bottomRow - 1;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 1;
            this.dotCols[3] = this.bottomCol - 1;
             
        } else if (this.rotation == 2){
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol;
             
            this.dotRows[1] = this.bottomRow - 1;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow - 2;
            this.dotCols[2] = this.bottomCol;
             
            this.dotRows[3] = this.bottomRow - 2;
            this.dotCols[3] = this.bottomCol + 1;
             
        } else
        {
            this.dotRows[0] = this.bottomRow;
            this.dotCols[0] = this.bottomCol + 1;
             
            this.dotRows[1] = this.bottomRow;
            this.dotCols[1] = this.bottomCol;
             
            this.dotRows[2] = this.bottomRow;
            this.dotCols[2] = this.bottomCol - 1;
             
            this.dotRows[3] = this.bottomRow - 1;
            this.dotCols[3] = this.bottomCol - 1;
             

        };
    };
};