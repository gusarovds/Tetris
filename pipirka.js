    var table = document.getElementById('field');
    
    class Part {
		constructor (posRow, posCol){
			this.bottomRow = posRow;
		    this.bottomCol = posCol;
			this.dot  = {};
			this.dot2  = {};
			this.dot3  = {};
			this.dot4  = {};
			this.dots = [];
			this.rotation = 0;
			this.color = 'red';
		}	
		
		moveLeft() {
			for (var i = 0; i < this.dots.length; i++){
				this.dots[i].col--; 
			};
		};
		
		moveRight() {
			for (var i = 0; i < this.dots.length; i++){
				this.dots[i].col++; 
			};
		};
		
		checkLeftBoarder(){
			var check = true;
			for (var i = 0; i < this.dots.length; i++){
				if (this.dots[i].col < 0) {
					check = false;
				};
			};
			return check;
		};
		
		checkRightBoarder(){
			var check = true;
			for (var i = 0; i < this.dots.length; i++){
				if (this.dots[i].col >= table.rows[i].cells.length) {
					check = false;
				};
			};
			return check;
		};
		
		removeTopBoarderDots(){
			for (var i = 0; i < this.dots.length; i++){
				if (this.dots[i].row < 0){
					this.dots.splice(i,1);
					i--;
				};
			};
			
		};
		
        show() {
			
			this.removeTopBoarderDots();
			
			if (!this.checkLeftBoarder()){ 
				while (!this.checkLeftBoarder()) {this.moveRight()}; 
			};
			
			if (!this.checkRightBoarder()){ 
				while (!this.checkRightBoarder()) {this.moveLeft()}; 
			};
			
			for (var i = 0; i < this.dots.length; i++){
				table.rows[this.dots[i].row].cells[this.dots[i].col].style.backgroundColor = this.color;
			};
      };
	  
        clean() {
			for (var i = 0; i < this.dots.length; i++){
				table.rows[this.dots[i].row].cells[this.dots[i].col].style.backgroundColor = 'white';
			};      
        };
		
		rotate() {};
		
		changeRotationRight() { if (this.rotation < 3) {this.rotation++; this.rotate()} else {this.rotation = 0; this.rotate()} };
		
		changeRotationLeft() { if (this.rotation > 0) {this.rotation--; this.rotate()} else {this.rotation = 3; this.rotate()} };
		

    };
    
    class Opart extends Part {
        
		rotate() {
			this.dot.row = this.bottomRow; 
			this.dot.col = this.bottomCol; 
			this.dots.push(this.dot);
			this.dot2.row = this.bottomRow - 1; 
			this.dot2.col = this.bottomCol; 
			this.dots.push(this.dot2);
			this.dot3.row = this.bottomRow; 
			this.dot3.col = this.bottomCol - 1; 
			this.dots.push(this.dot3);
			this.dot4.row = this.bottomRow - 1; 
			this.dot4.col = this.bottomCol - 1; 
			this.dots.push(this.dot4);
		};
		
    };
	
	class Ipart extends Part {
		
		rotate() {
			if ((this.rotation == 0)||(this.rotation == 2)){
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow; 
				this.dot2.col = this.bottomCol - 1; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow; 
				this.dot3.col = this.bottomCol + 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow; 
				this.dot4.col = this.bottomCol + 2; 
				this.dots.push(this.dot4);
			} else {
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 2; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 3; 
				this.dot4.col = this.bottomCol; 
				this.dots.push(this.dot4);
			};
		};
		
	};
	
	class Zpart extends Part {
		
			rotate() {
			if ((this.rotation == 0)||(this.rotation == 2)){
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol - 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow; 
				this.dot4.col = this.bottomCol + 1; 
				this.dots.push(this.dot4);
			} else {
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol - 1; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol - 1; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 2; 
				this.dot4.col = this.bottomCol;
				this.dots.push(this.dot4);
			};
		}
	};
	
	class ZpartRev extends Part {
		
			rotate() {
			if ((this.rotation == 0)||(this.rotation == 2)){
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol + 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow; 
				this.dot4.col = this.bottomCol - 1; 
				this.dots.push(this.dot4);
			} else {
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol + 1; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol + 1; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 2; 
				this.dot4.col = this.bottomCol; 
				this.dots.push(this.dot4);
				
			};
		};
	};
   
	class Tpart extends Part {
		
			rotate() {
			if (this.rotation == 0){
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow; 
				this.dot3.col = this.bottomCol + 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow; 
				this.dot4.col = this.bottomCol - 1; 
				this.dots.push(this.dot4);
			} else if (this.rotation == 1){ 
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 2; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 1; 
				this.dot4.col = this.bottomCol + 1; 
				this.dots.push(this.dot4);
			} else if (this.rotation == 2){ 
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol + 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 1; 
				this.dot4.col = this.bottomCol - 1; 
				this.dots.push(this.dot4);
			} else
			{
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 2; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 1; 
				this.dot4.col = this.bottomCol - 1;
				this.dots.push(this.dot4);
				
			};
		};
	};
	
	class Lpart extends Part {
		
			rotate() {
			if (this.rotation == 0){
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow; 
				this.dot3.col = this.bottomCol + 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 2; 
				this.dot4.col = this.bottomCol; 
				this.dots.push(this.dot4);
			} else if (this.rotation == 1){ 
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol - 1; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol - 1; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 1; 
				this.dot4.col = this.bottomCol + 1; 
				this.dots.push(this.dot4);
			} else if (this.rotation == 2){ 
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 2; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 2; 
				this.dot4.col = this.bottomCol - 1; 
				this.dots.push(this.dot4);
			} else
			{
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol - 1; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol - 1; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 1; 
				this.dot4.col = this.bottomCol + 1;
				this.dots.push(this.dot4);
				
			};
		};
	};
	
	class LpartRev extends Part {
		
			rotate() {
			if (this.rotation == 0){
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow; 
				this.dot3.col = this.bottomCol - 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 2; 
				this.dot4.col = this.bottomCol; 
				this.dots.push(this.dot4);
			} else if (this.rotation == 1){ 
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol + 1; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol + 1; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 1; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 1; 
				this.dot4.col = this.bottomCol - 1;
				this.dots.push(this.dot4);
			} else if (this.rotation == 2){ 
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow - 1; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow - 2; 
				this.dot3.col = this.bottomCol; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 2; 
				this.dot4.col = this.bottomCol + 1; 
				this.dots.push(this.dot4);
			} else
			{
				this.dot.row = this.bottomRow; 
				this.dot.col = this.bottomCol + 1; 
				this.dots.push(this.dot);
				this.dot2.row = this.bottomRow; 
				this.dot2.col = this.bottomCol; 
				this.dots.push(this.dot2);
				this.dot3.row = this.bottomRow; 
				this.dot3.col = this.bottomCol - 1; 
				this.dots.push(this.dot3);
				this.dot4.row = this.bottomRow - 1; 
				this.dot4.col = this.bottomCol - 1;
				this.dots.push(this.dot4);
				
			};
		};
	};
	
	
	
   var sq = new LpartRev(4,5);
   sq.rotate();
   sq.moveRight();
   sq.moveRight();
   sq.moveRight();
   //sq.moveRight();
   //sq.moveRight();
   //sq.moveRight();
   
   //sq.moveLeft();
   //sq.changeRotationLeft();
   //sq.changeRotationLeft();
   //sq.changeRotationLeft();
   sq.show();