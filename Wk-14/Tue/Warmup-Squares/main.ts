// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js

class GrainBoard{
    numOfSquares: number;

    constructor(numOfSquares: number){
        this.numOfSquares = numOfSquares;
    }
    
    grainsInSquare(square_num: number){
        return (2 ** (square_num - 1)) // index starts at 1
    }
    
    printEverySquare(){
        for(let i = 1; i <= this.numOfSquares; i++){
            console.log(`Square ${i}: ${this.grainsInSquare(i)}`)
        }
        return
    }

    sumOfAllSquares(){
        let sum = 0;
        for(let i = 1; i <= this.numOfSquares; i++){
            sum += this.grainsInSquare(i)
        }
        return sum
    }

    setNumOfSquares(numOfSquares: number){
        this.numOfSquares = numOfSquares
        return
    }
}

let grainBoard = new GrainBoard(64)
console.log(grainBoard.grainsInSquare(3))
grainBoard.printEverySquare()
console.log(grainBoard.sumOfAllSquares())

