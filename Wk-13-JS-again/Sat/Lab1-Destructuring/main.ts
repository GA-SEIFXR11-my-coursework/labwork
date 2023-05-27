// [ -e script.js ] && rm script.js; tsc; mv main.js script.js; node script.js

// Arrays
//  1. Update the following code to use array destructuring assignment where possible:
const numbers = [71, 12, 24, 36]

// orig:
// const num1 = nums[0];
// const num2 = nums[1];
// const num3 = nums[2];

let [num1, num2, num3] = [ ...numbers.slice(0,3) ]
console.log({num1, num2, num3})

//  2. Select the first 4 numbers from the array that are not undefined. Hint: combine with `.filter()`
let array = [undefined, 1, undefined, undefined, 2, 3, undefined, 4, undefined, undefined, 5]

// your code
let foundNumbers = array
    .filter(function(val){
        return(typeof(val) == "number" )
    })

let num4 = 0; //allocating. Weird why semicolon is necessary here 

[num1, num2, num3, num4] = [ ...foundNumbers.slice(0,4) ]

console.log({num1, num2, num3, num4});

console.log("==================================================================")

// Objects
//  1. Update the following code to use object destructuring assignment where possible:

// Select the name and serving size from the recipe object
const recipe = {name: 'Pie', cookingTime: '2h', prepTime: '1h', servingSize: 4};

// console.log(name, servingSize);;
// your code
// name is reserved so i have to rename it to recipeName_name (assignment below uses recipeName)
var { name: recipeName_name, servingSize } = recipe; 
console.log({recipeName_name, servingSize})


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

console.log({recipeName, recipePrepTime, lessonName, lessonPrepTime, servingSize, cookingTime});

console.log("==================================================================")

// Consider the following JS object, Analyze the object properties carefully and implement the following,

const catGif = {
    "type": "gif",
    "id": "BzyTuYCmvSORqs1ABM",
    "url": "https://giphy.com/gifs/hallmarkecards-cute-hallmark-shoebox-BzyTuYCmvSORqs1ABM",
    "slug": "hallmarkecards-cute-hallmark-shoebox-BzyTuYCmvSORqs1ABM",
    "bitly_gif_url": "https://gph.is/2zyojNq",
    "bitly_url": "https://gph.is/2zyojNq",
    "embed_url": "https://giphy.com/embed/BzyTuYCmvSORqs1ABM",
    "username": "",
    "source": "https://www.hallmark.com/shop-shoebox/?navMenuSubTitle=By\\%20Card\\%20Collection&navMenu=Main\\%20Menu&navTo=Shoebox&navLocation=Header&navMenuTitle=Cards",
    "title": "Sci Fi Lol GIF by Hallmark Gold Crown",
    "rating": "g",
    "content_url": "",
    "source_tld": "www.hallmark.com",
    "source_post_url": "https://www.hallmark.com/shop-shoebox/?navMenuSubTitle=By\\%20Card\\%20Collection&navMenu=Main\\%20Menu&navTo=Shoebox&navLocation=Header&navMenuTitle=Cards",
    "is_sticker": 0,
    "import_datetime": "2018-11-06 19:20:44",
    "trending_datetime": "2019-11-20 00:45:12",
    "images": {
        "original": {
            "height": "400",
            "width": "400",
            "size": "2195323",
            "url": "https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy.gif&ct=g",
            "mp4_size": "707000",
            "mp4": "https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.mp4?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy.mp4&ct=g",
            "webp_size": "760446",
            "webp": "https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.webp?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy.webp&ct=g",
            "frames": "25",
            "hash": "ab8f173d61210eb85f1ea92526ae9e07"
        },
        "downsized": {
            "height": "400",
            "width": "400",
            "size": "1067376",
            "url": "https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy-downsized.gif?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy-downsized.gif&ct=g"
        },
    }
}

// i. Get id, title, url and rating into variables catId, title, gifUrl and catRating respectively.
var {   id: catId,
        title,
        url: gifUrl,
        rating: catRating,
    } = catGif
console.log({catId, title, gifUrl, catRating})

// ii. Get height and width of the original image(original under images object) into originalHeight and originalWidth variables respectively.
var {   height: originalHeight,
        width: originalWidth,
} = catGif.images.original
console.log({originalHeight,originalWidth})

// iii. Get height and width of the downsized image as dsHeight and dsWidth respectively.
var {   height: dsHeight,
        width: dsWidth,
} = catGif.images.downsized
console.log({dsHeight,dsWidth})

console.log("==================================================================")

// In Functions
// Array destructuring in functions

// Update the following function to use array destructuring assignment to assign the two variables in the given array. The givenArray will be given in the following format [ baseNumber, writtenPhrase ], for example, [ 1800, 'PLAYTECH' ].
/*
    function convertPhoneNumber( givenArray ) {
        // Fix the undefined values using destructuring assignment
        console.log( baseNumber, writtenPhrase);
    }
*/
// Test your function convertPhoneNumber([1800, 'PLAYTECH']);

function convertPhoneNumber( givenArray ) {
    let [baseNumber, writtenPhrase] = givenArray
    console.log( baseNumber, writtenPhrase);
}

// Object destructuring in functions
// Update the following function to use object destructuring assignment.
/*
    function display(options) {
        //
        if(options.height > options.width) {
            console.log(options.color);
        } else if (options.forceMax){
            console.log(options.color, options.delay);
        } else {
            console.log(options.color, options.replaceIcons);
        }
    }
*/
//   For example, instead of if(options.height > options.width) { that line should be if(height > width) {, where height and width were obtained by destructuring options.
//     Test your function with different values display({height: 400, width: 200, forceMax: false, color: 'red', replaceIcons: false, delay: 300 });

// Bonus: Update the functions code above by using destructuring assignment directly in the function parameter(s).
/*
    function myFunction( -- destructure the parameter(s) here -- ) {

    }
*/

let myOption = {
    height: 400, 
    width: 200, 
    forceMax: false, 
    color: 'red', 
    replaceIcons: false, 
    delay: 300 
}

function display( {height, forceMax, width, color, delay, replaceIcons} ){
    console.log({height, width, forceMax, color, delay, replaceIcons})
    if(height > width) {
        console.log(color);
    } else if (forceMax){
        console.log(color, delay);
    } else {
        console.log(color, replaceIcons);
    }
    return false
}

display(myOption)

console.log("==================================================================")

// Rest operator
// Can be used on function parameters to make the number of arguments dynamic.

function printMyFavoriteColors(...colors: string[]) {
    let [a,b,c] = colors
    console.log({a,b,c})
    console.log(`My favorite colors are ${colors.join(" ")}`);
}

printMyFavoriteColors("red", "blue", "orange");

console.log("==================================================================")