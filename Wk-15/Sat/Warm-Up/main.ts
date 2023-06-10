/*

Write a function dedupe that accepts an array of integers numbers and an integer maxOccurrences. 
Remove all elements from numbers that occur more than maxOccurrences times
while maintaining the original order of the array. Example outputs:

dedupe([1, 2, 3, 1, 2, 1, 2, 3], 2) // returns [1, 2, 3, 1, 2, 3]
dedupe([1, 1, 1, 1], 2) // returns [1, 1]
dedupe([20, 37, 20, 21], 1) // returns [20, 37, 21]

*/

function dedupe(numArr: number[], maxOccurrences: number){
    // check element occurences as they are read
    if(maxOccurrences <= 0 ){
        return [];
    }
    maxOccurrences = Math.floor(maxOccurrences);

    let occurenceTable: {[key: number]: number} = {};
    let ret: number[] = [];
    for(let num of numArr){
        let keys = Object.keys(occurenceTable).map((val)=>{return Number(val)});
        if(! keys.includes(num) ){
            ret.push(num);
            occurenceTable = {...occurenceTable, [num]: 1};
            continue;
        }
        if(occurenceTable[num] < maxOccurrences){
            ret.push(num);
            occurenceTable[num] += 1;
            continue;
        }else{
            // not necessary, but it could be useful to keep track of occurences
            occurenceTable[num] += 1;
            continue;
        }
    }
    // console.log(occurenceTable);
    console.log(ret);
    return ret;
}

dedupe([1, 2, 3, 1, 2, 1, 2, 3], 2) // returns [1, 2, 3, 1, 2, 3]
dedupe([1, 1, 1, 1], 2) // returns [1, 1]
dedupe([20, 37, 20, 21], 1) // returns [20, 37, 21]
