function raindrops(inval) {
    // returns 'Pling' if number has 3 as a factor
    // returns 'Plang' if number has 5 as a factor
    // returns 'Plong' if number has 7 as a factor
    // returns a combination of the above, eg. 35 -> "PlangPlong"
    // returns the number as a string if there are no coprimes, eg 34 -> "34"
    var ret = "";
    var logic = {
        3: "Pling",
        5: "Plang",
        7: "Plong"
    };
    if (inval == 0) {
        return "0";
    }
    for (var coprime in logic) {
        var calc = (inval + Number(coprime)) % Number(coprime);
        if (calc === 0) {
            ret += logic[coprime];
        }
    }
    if (ret == "") {
        ret = String(inval);
    }
    return ret;
}
function testThis() {
    var tests = {
        "-1": "-1",
        "-1755": "PlingPlang",
        "3": "Pling",
        "5": "Plang",
        "7": "Plong",
        "15": "PlingPlang",
        "21": "PlingPlong",
        "35": "PlangPlong",
        "0": "0",
        "37": "37",
        "1755": "PlingPlang"
    };
    for (var numStr in tests) {
        var num = Number(numStr);
        var output = raindrops(num);
        console.log("Input: ".concat(num, ":\t Output: ").concat(output, " \t\t Expected: ").concat(tests[numStr]));
    }
    return;
}
testThis();
