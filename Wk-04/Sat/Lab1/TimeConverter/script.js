// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js
function time12Hto24H(time12H) {
    var ret = "";
    var regex = /^([0-9]{2})\:([0-9]{2})\:([0-9]{2})([A|P]M)$/i;
    if (!regex.test(time12H)) {
        console.error("Invalid 12H input format. Input: ".concat(time12H));
        return ret;
    }
    var matches = time12H.match(regex);
    var strHH = matches[1];
    var strMM = matches[2];
    var strSS = matches[3];
    var strAMPM = matches[4];
    // HH
    if (Number(strHH) < 1 || Number(strHH) > 12) {
        console.error("Hour: ".concat(strHH, " invalid value. Must be between 01 to 12."));
        return ret;
    }
    // MM
    if (Number(strMM) < 0 || Number(strMM) > 59) {
        console.error("Minutes: ".concat(strMM, " invalid value. Must be between 0 to 59."));
        return ret;
    }
    // SS
    if (Number(strSS) < 0 || Number(strSS) > 59) {
        console.error("Seconds: ".concat(strSS, " invalid value. Must be between 0 to 59."));
        return ret;
    }
    // PM convert
    if ((/PM/i).test(strAMPM)) {
        ret += String(Number(strHH) % 12 + 12);
    }
    else {
        ret += strHH;
    }
    ret += ":";
    ret += "".concat(strMM, ":").concat(strSS);
    return ret;
}
console.log(time12Hto24H("01:55:47PM"));
