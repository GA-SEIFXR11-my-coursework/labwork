// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js

function time12Hto24H(time12H: string): string{
    let ret: string = "";
    let regex = /^([0-9]{2})\:([0-9]{2})\:([0-9]{2})([A|P]M)$/i;

    if( ! regex.test(time12H) ){
        console.error(`Invalid 12H input format. Input: ${time12H}`);
        return ret;
    }

    let matches = time12H.match(regex)!;
    let strHH: string = matches[1];
    let strMM: string = matches[2];
    let strSS: string = matches[3];
    let strAMPM: string = matches[4];

    // HH
    if( Number(strHH) < 1 || Number(strHH) > 12 ){
        console.error(`Hour: ${strHH} invalid value. Must be between 01 to 12.`);
        return ret;
    }

    // MM
    if( Number(strMM) < 0 || Number(strMM) > 59 ){
        console.error(`Minutes: ${strMM} invalid value. Must be between 0 to 59.`);
        return ret;
    }
    
    // SS
    if( Number(strSS) < 0 || Number(strSS) > 59 ){
        console.error(`Seconds: ${strSS} invalid value. Must be between 0 to 59.`);
        return ret;
    }

    // PM convert
    if( (/PM/i).test(strAMPM) ){
        ret += String( Number(strHH) % 12 + 12 );
    }else{
        ret += strHH;
    }
    ret += `:${strMM}:${strSS}`

    return ret;
}

console.log(time12Hto24H("01:55:47PM"));