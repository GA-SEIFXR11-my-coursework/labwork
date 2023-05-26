// [ -e script.js ] && rm script.js; tsc; mv main.js script.js; node script.js
// const NAMES = ["Fred", "Sally", "Alice", "Bob", "Andrew", "Jane", "Steve"];
// var names = NAMES
// var asdf = names.map(function(name){
//     if( name.startsWith("A") ){
//         return name
//     }
// })
// console.log(asdf)
// console.log(names)
let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);
// Using only map, filter, reduce or forEach,
// And explain which method was used and why:
// 1. Find the largest number in the array
// 2. Find the average of the numbers array
// 1. Max:
let max_num = numbers.reduce(function (prev, curr) {
    if (prev < curr) {
        return curr;
    }
    else {
        return prev;
    }
});
console.log(max_num);
// 2. Avg
let avg_val = numbers
    .reduce(function (prev, next) {
    return (prev + next);
})
    / numbers.length;
console.log(avg_val);
