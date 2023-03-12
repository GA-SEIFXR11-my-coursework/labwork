// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js

// Exercise 1 - Calculate the area
// Write a function that accepts two parameters width and length and returns the area, e.g. area(5, 10) returns 50.

function f_area(width: number, length: number){
    return(width * length);
}

//Extension: Write using both function and arrow syntax
const af_area = (width: number, length: number) => width * length;
// const af_area = (width: number, length: number) => { return(width * length)};

//Extension 2: Modify your function to be able to calculate the area for different shapes. The design is up to you - for example, you can accept a shapeName and an object dimensions that can either have width and length properties, or radius, or sideLength etc.



// Exercise 2 - Hello In...
// Write a function that says 'hello' in different languages (at least 3 other than English), e.g. helloIn('French') logs Bonjour. If the language is not supported, log Sorry, I do not speak <language>.

function helloIn(lang: string){
    switch(lang.toLowerCase()){
        case "french":
            console.log("Bonjour");
            break;
        case "japanese":
            console.log("こんにちは | Kon'nichiwa");
            break;
        case "german":
            console.log("Hallo");
            break;
        default:
            console.log(`Sorry, I do not speak ${lang}`)
            break;
    }
}

// Exercise 3 - Fun with arrays
// Write a function called fillArray which takes a string and a number and creates a new array which contains that word repeated that number of times, e.g. filledArray('hello', 2) // -> returns ['hello', 'hello']

function fillArray(str: string, count: number){
    let ret: string[] = [];
    for(let i=0; i<count; i++) {
        ret.push(str);
    }
    return ret;
}

// Ex3 Extension 2
// Extension 2: Write a function that takes two arrays and returns their intersection, e.g. intersection(['a', 'b', 'c'], ['c', 'b', 'a']) gives ['a', 'b', 'c'] (order is not important).

function intersection(arrA: string[], arrB: string[]){
    let ret: string[] = [];
    for(let str of arrA){
        if(arrB.indexOf(str) != -1){
            // check if str in arr B 

            if(ret.indexOf(str) == -1){
                // check if str not yet pushed into ret

                ret.push(str);
            }
        }
    }
    return ret;
}

// let arr1 = ["a", "b", "c", "d"];
// let arr2 = ["b", "c", "d", "e", "f"];
// console.log(intersection(arr1,arr2))

// Ex3 - Ext 3
// Extension 3: Write a function that dedupes the elements of an input array, e.g. dedupe(['hello', 'I', 'say', 'hello', 'cat', 'cat']) returns ['hello', 'I', 'say', 'cat'].

function dedupe(strArr: string[]){
    let ret: string[] = [];
    for(let str of strArr){
        if(ret.indexOf(str) == -1){
            ret.push(str);
        }
    }
    return ret;
}

// let strA = ["hello", "I", "say", "hello", "cat", "cat"];
// console.log(dedupe(strA));
