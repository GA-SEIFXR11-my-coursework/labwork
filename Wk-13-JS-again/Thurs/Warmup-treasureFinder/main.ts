// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js


const MAP_1 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","X","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
];
    
function treasureFinder(map){
    for(let x in map){
        let row = map[x]
        for(let y in row){
            let val = row[y]
            if(val == "X"){
                return([x,y])
            }
        }
    }
    return([-1,-1])
}

console.log(treasureFinder(MAP_1)) // should return [2, 2];