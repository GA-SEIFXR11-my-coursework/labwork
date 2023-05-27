// [ -e script.js ] && rm script.js; tsc; mv main.js script.js; node script.js

// Arrays
//  1. Update the following code to use array destructuring assignment where possible:
const numbers = [71, 12, 24, 36]

// orig:
// const num1 = nums[0];
// const num2 = nums[1];
// const num3 = nums[2];

let [num1, num2, num3] = [ ...numbers.slice(0,3) ]
console.log(num1, num2, num3)

//  2. Select the first 4 numbers from the array that are not undefined. Hint: combine with `.filter()`
let array = [undefined, 1, undefined, undefined, 2, 3, undefined, 4, undefined, undefined, 5]

// your code
let foundNumbers = array
    .filter(function(val){
        return(typeof(val) == "number" )
    })

let num4 = 0; //allocating. Weird why semicolon is necessary here 

[num1, num2, num3, num4] = [ ...foundNumbers.slice(0,4) ]

console.log(num1, num2, num3, num4);

// Objects
//  1. Update the following code to use object destructuring assignment where possible:

// Select the name and serving size from the recipe object
const recipe = {name: 'Pie', cookingTime: '2h', prepTime: '1h', servingSize: 4};

// console.log(name, servingSize);;
// your code
// name is reserved so i have to rename it to recipeName_name (assignment below uses recipeName)
var { name: recipeName_name, servingSize } = recipe; 
console.log(recipeName_name, servingSize)


/** 
 * 2.
 * Now, consider the following code. 
 * Use object destructuring assignment to assign unique names 
 * for all the properties of both the objects - 
 * (`recipeName`, `recipePrepTime`, `lessonName`, `lessonPrepTime`, and other properties)
 *
*/
// const recipe = {name: 'Pie', cookingTime: '2h', prepTime: '1h', servingSize: 4}
const lesson = {name: 'Destructuring assignment', prepTime: '3h', lessonTime: '1h'}
// your code

var {   name: recipeName,
        prepTime: recipePrepTime,
        servingSize,
        cookingTime,
    } = recipe

var {   name: lessonName,
        prepTime: lessonPrepTime,
    } = lesson

console.log(recipeName, recipePrepTime, lessonName, lessonPrepTime, servingSize, cookingTime);
