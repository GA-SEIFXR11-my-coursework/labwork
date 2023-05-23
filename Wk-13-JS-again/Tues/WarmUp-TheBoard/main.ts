// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js

const ROWS = 8
const COLS = 16
const SYMBOL_1 = '#'
const SYMBOL_2 = ' '

class Checker_Board{
    rows: number;
    cols: number;
    symbol_1: string;
    symbol_2: string;
    
    constructor(rows: number, cols: number, symbol_1: string, symbol_2: string){
        this.rows = rows;
        this.cols = cols;
        this.symbol_1 = symbol_1
        this.symbol_2 = symbol_2;
    }

    print_board(){
        for(let i=0; i<this.rows; i++){
            var printable_row: string = ""
            for(let j=0; j<this.cols; j++){
                if( (i + j) % 2 == 0){
                    printable_row += this.symbol_1
                }else{
                    printable_row += this.symbol_2
                }
            }
            console.log(printable_row)
        }
    }
}

let board = new Checker_Board(ROWS, COLS, SYMBOL_1, SYMBOL_2);
board.print_board()