// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js; node script.js
var fakeStates = [
    "Southern Territory",
    "Eastern Straya",
    "Loseria",
    "Cantberra",
    "Old South Wales",
    "Tassieeeee",
    "Kingsland",
];
var fakeCities = [
    "Wollongong",
    "Brisney",
    "Sydbourne",
    "Melbane",
    "Add-elaide",
    "Substract-elaide",
    "Perthia",
    "Bob Springs",
    "Darwinia",
];
var fakeStreets = [
    "Street 0",
    "Street 1",
    "Street 2",
    "Street 3",
    "The street I live at",
];
/**
 * Returns fake address as a string array
 * each string element represents a line, starting with street address
 */
function generateFakeAddr() {
    var addrLines = [];
    var line = "";
    // street
    line += String(["", "No. ", "Unit "][randInt(3)]);
    line += String(randInt(1000) + 1);
    if (Math.random() > 0.5) {
        line += "/";
        line += String(randInt(100) + 1);
    }
    line += " ";
    line += String(fakeStreets[randInt(fakeStreets.length)]);
    line += ",";
    addrLines.push(line);
    // city, state
    line = "";
    line += String(fakeCities[randInt(fakeCities.length)]);
    line += ", ";
    line += String(fakeStates[randInt(fakeStates.length)]);
    addrLines.push(line);
    return addrLines;
}
/**
 * Returns an Integer between 0 and the value specified (exclusive)
 * Eg. randInt(6) returns random integer between 0 to 5
 * Eg. For a dice random value between 1 to 6,
 *  let dice = randInt(6) + 1 ;
*/
function randInt(value) {
    return (Math.floor(Math.random() * value));
}
for (var _i = 0, _a = generateFakeAddr(); _i < _a.length; _i++) {
    var line = _a[_i];
    console.log(line);
}
