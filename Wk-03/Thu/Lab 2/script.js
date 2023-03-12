// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js
function drawDice(eTarget, num) {
    if (!(1 <= num && num <= 6)) {
        console.error("Invalid dice value");
        return;
    }
    switch (num) {
        case 1:
            eTarget.style.backgroundImage = "url('./src/Alea_1.png')";
            break;
        case 2:
            eTarget.style.backgroundImage = "url('./src/Alea_2.png')";
            break;
        case 3:
            eTarget.style.backgroundImage = "url('./src/Alea_3.png')";
            break;
        case 4:
            eTarget.style.backgroundImage = "url('./src/Alea_4.png')";
            break;
        case 5:
            eTarget.style.backgroundImage = "url('./src/Alea_5.png')";
            break;
        case 6:
            eTarget.style.backgroundImage = "url('./src/Alea_6.png')";
            break;
        default:
            console.error("Incorrect switch access");
            break;
    }
    return;
}
function diceRoll() {
    return (Math.floor(Math.random() * 6 + 1));
}
function rollThisDice(event) {
    drawDice(event.target, diceRoll());
    return;
}
function buttonDiceRoll() {
    var e = document.getElementById("d_dice_0");
    drawDice(e, diceRoll());
    return;
}
function pageLoad() {
    diceDivLoad();
    return;
}
function diceDivLoad() {
    var diceDivs = Array.prototype.slice.call(document.getElementsByClassName("dice"));
    for (var _i = 0, diceDivs_1 = diceDivs; _i < diceDivs_1.length; _i++) {
        var e = diceDivs_1[_i];
        e.addEventListener("click", function (event) { rollThisDice(event); });
    }
}
