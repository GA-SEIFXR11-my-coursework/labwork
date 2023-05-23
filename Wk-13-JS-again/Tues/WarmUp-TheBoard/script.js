// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js
var ROWS = 8;
var COLS = 16;
var SYMBOL_1 = '#';
var SYMBOL_2 = ' ';
var Checker_Board = /** @class */ (function () {
    function Checker_Board(rows, cols, symbol_1, symbol_2) {
        this.rows = rows;
        this.cols = cols;
        this.symbol_1 = symbol_1;
        this.symbol_2 = symbol_2;
    }
    Checker_Board.prototype.print_board = function () {
        for (var i = 0; i < this.rows; i++) {
            var printable_row = "";
            for (var j = 0; j < this.cols; j++) {
                if ((i + j) % 2 == 0) {
                    printable_row += this.symbol_1;
                }
                else {
                    printable_row += this.symbol_2;
                }
            }
            console.log(printable_row);
        }
    };
    return Checker_Board;
}());
var board = new Checker_Board(ROWS, COLS, SYMBOL_1, SYMBOL_2);
board.print_board();
