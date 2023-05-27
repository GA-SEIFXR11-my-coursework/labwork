// [ -e script.js ] && rm script.js; tsc; mv main.js script.js; node script.js

const KeypadChar2NumMap = {
    "abc": 2,
    "def": 3,
    "ghi": 4,
    "jkl": 5,
    "mno": 6,
    "pqrs": 7,
    "tuv": 8,
    "wxyz": 9,
}

function convertPhoneNumber(baseNum: string, word: string): string{
    var paddedNumber: string = ""
    for(let c of word){
        for(let key in KeypadChar2NumMap){
            if(key.includes(c.toLowerCase())){
                paddedNumber += String(KeypadChar2NumMap[key])
                continue
            }
        }
    }
    let longNum = baseNum + paddedNumber
    // limit to 10 digits:
    return(longNum.slice(0,10))
}

console.log(
    "convertPhoneNumber('1300', 'FLOWERS') expect '1300356937' -> ",
    convertPhoneNumber('1300', 'FLOWERS')
)
console.log()

console.log(
    "convertPhoneNumber('1800', 'GOTJUNK') expect '1800468586' -> ",
    convertPhoneNumber('1800', 'GOTJUNK')
)