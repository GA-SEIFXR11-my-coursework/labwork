// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js
var MAP_1 = [
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "X", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"]
];
function treasureFinder(map) {
    for (var x in map) {
        var row = map[x];
        for (var y in row) {
            var val = row[y];
            if (val == "X") {
                return ([x, y]);
            }
        }
    }
    return ([-1, -1]);
}
console.log(treasureFinder(MAP_1)); // should return [2, 2];
console.log(MAP_1.map(function (val) { return val; }));
