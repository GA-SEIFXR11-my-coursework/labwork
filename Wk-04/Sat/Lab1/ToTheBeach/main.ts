// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js

const forecast = {
    "Monday": {
        "temp_c"    : 20,
        "rain_mm"   : 12,
    },
    "Tuesday": {
        "temp_c"     : 25,
        "rain_mm"    : 6,
    },
    "Wednesday": {
        "temp_c"     : 27,
        "rain_mm"    : 24,
    },
    "Thursday": {
        "temp_c"     : 32,
        "rain_mm"    : 65,
    },
    "Friday": {
        "temp_c"     : 18,
        "rain_mm"    : 2,
    },
    "Saturday": {
        "temp_c"     : 26,
        "rain_mm"    : 0,
    },
    "Sunday": {
        "temp_c"     : 27,
        "rain_mm"    : 14,
    },
}

/**
 * Returns array of days that matches 
 * `temp_c` GE forecasted temp
 * AND
 * `rain_mm` LE forecasted rain
 * Eg. usage:
 * warmAndDryEnough(24,8) checks days that are at least 24C and 8mm or less rain
 * @param temp_c 
 * @param rain_mm 
 * @returns 
 */
function warmAndDryEnough(temp_c: number, rain_mm: number): string[]{
    let ret: string[] = [];
    for(let day in forecast){
        let tempToday: number = Number( forecast[day].temp_c);
        let rainToday: number = Number( forecast[day].rain_mm );
        
        if( tempToday >= temp_c && rainToday <= rain_mm){
            ret.push(day);
        }
    }
    return ret;
}

// Doing part 1 as a subset of Part 2, just for sake of exercise
function warmEnough(temp_c: number){
    return(warmAndDryEnough(temp_c, 9999));
}

// Should return ['Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday']
console.log(warmEnough(24));

// Should return ['Wednesday', 'Thursday', 'Sunday']
console.log(warmEnough(27));

// Should return []
console.log(warmEnough(34));

// Expect ["Tuesday", "Saturday"]
console.log(warmAndDryEnough(24, 8));

// Expect ["Saturday"]
console.log(warmAndDryEnough(24, 0));
