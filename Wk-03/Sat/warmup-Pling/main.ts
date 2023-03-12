//  -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node ./script.js
interface RaindropsLogic {
    [coprime: number]: string;
}

function raindrops(inval: number){
    // returns 'Pling' if number has 3 as a factor
    // returns 'Plang' if number has 5 as a factor
    // returns 'Plong' if number has 7 as a factor
    // returns a combination of the above, eg. 35 -> "PlangPlong"
    // returns the number as a string if there are no coprimes, eg 34 -> "34"

    let ret: String = "";

    let logic: RaindropsLogic = {
        3: "Pling",
        5: "Plang",
        7: "Plong",
    }

    if(inval == 0){
        return "0";
    }

    for(let coprime in logic){
        let calc: number = (inval + Number(coprime)) % Number(coprime);
        if( calc === 0 ){
            ret += logic[coprime];
        }
    }

    if(ret == ""){
        ret = String(inval);
    }

    return ret;
}

function testThis(){
    let tests: RaindropsLogic = {
        "-1": "-1",
        "-1755": "PlingPlang",
        "3": "Pling",
        "5": "Plang",
        "7": "Plong",
        "15": "PlingPlang",
        "21": "PlingPlong",
        "35": "PlangPlong",
        "0": "0",
        "37": "37",
        "1755": "PlingPlang"
    }
    for(let numStr in tests){
        let num = Number(numStr);
        let output = raindrops(num);
        console.log(`Input: ${num}:\t Output: ${output} \t\t Expected: ${tests[numStr]}`);
    }
    return;
}

testThis();