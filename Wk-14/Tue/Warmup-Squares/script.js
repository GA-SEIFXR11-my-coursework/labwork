// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js
var GrainBoard = /** @class */ (function () {
    function GrainBoard(numOfSquares) {
        this.numOfSquares = numOfSquares;
    }
    GrainBoard.prototype.grainsInSquare = function (square_num) {
        return (Math.pow(2, (square_num - 1))); // index starts at 1
    };
    GrainBoard.prototype.printEverySquare = function () {
        for (var i = 1; i <= this.numOfSquares; i++) {
            console.log("Square ".concat(i, ": ").concat(this.grainsInSquare(i)));
        }
        return;
    };
    GrainBoard.prototype.sumOfAllSquares = function () {
        var sum = 0;
        for (var i = 1; i <= this.numOfSquares; i++) {
            sum += this.grainsInSquare(i);
        }
        return sum;
    };
    GrainBoard.prototype.setNumOfSquares = function (numOfSquares) {
        this.numOfSquares = numOfSquares;
        return;
    };
    return GrainBoard;
}());
var grainBoard = new GrainBoard(64);
console.log(grainBoard.grainsInSquare(3));
grainBoard.printEverySquare();
console.log(grainBoard.sumOfAllSquares());
