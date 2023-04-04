// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js

/**
 * Takes @param year and returns true if it is leap year, false otherwise
 */
function isLeapYear(year: number): boolean{
    // Every year that is evenly divisible by 4 is leap year
    // Except if it is evenly divisible by 100... is not a leap year
    // Unless it is also divisible by 400 is a leap year

    let rem: number;

    rem = year % 100;
    if(rem == 0){ return false };

    rem = rem % 4;
    if( rem == 0 ){ return true };

    return false;
}

function testLeapYear(){
    const myTests = {
        0: { "input"    : 2100,
            "expected"  : false,
        },
        1: { "input"    : 0,
             "expected" : true,
        },
        2: { "input"    : 2000,
             "expected" : true,
        },
        3: { "input"    : 2001,
             "expected" : false,
        },
        4: { "input"    : 2002,
             "expected" : false,
        },
        5: { "input"    : 2003,
             "expected" : false,
        },
        6: { "input"    : 2004,
             "expected" : true,
        },
    }

    function _testLeapYear(Tests){
        let passedAllTests: boolean = true;
        for(let test of Tests){
            if( isLeapYear(test.input) != test.expected ){
                passedAllTests = false;
                console.log(`FAIL: test Input: ${test.input} \t Expected: ${test.expected}`)
            }
        }
        if(passedAllTests){
            console.log(`OK All ${Object.keys(myTests).length} tests passed`);
        }
        return;
    }

    _testLeapYear(myTests);
}

testLeapYear();