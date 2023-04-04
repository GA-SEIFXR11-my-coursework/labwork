// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js
// This is literally the dedupe excercise from Wk3 Thu Lab1 - Extension 3
//  difference 
// Ex3 - Ext 3
// Extension 3: Write a function that dedupes the elements of an input array, 
// e.g. dedupe(['hello', 'I', 'say', 'hello', 'cat', 'cat']) returns ['hello', 'I', 'say', 'cat'].
function dedupe(strArr) {
    var ret = [];
    for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
        var str = strArr_1[_i];
        if (ret.indexOf(str) == -1) {
            ret.push(str);
        }
    }
    return ret;
}
function removeDuplicates(str) {
    return dedupe(str.split(" ")).join(" ");
}
// let strArrA = ["hello", "I", "say", "hello", "cat", "cat"];
// console.log(dedupe(strArrA));
var testStr = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
console.log(removeDuplicates(testStr));
// Should return 'alpha beta gamma delta'
testStr = 'the cat sat on the mat on the other cat';
console.log(removeDuplicates(testStr));
// Should return 'the cat sat on mat other'
