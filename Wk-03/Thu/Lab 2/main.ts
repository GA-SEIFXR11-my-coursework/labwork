// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js

function drawDice(eTarget: HTMLElement, num: number){
    if( ! (1 <= num && num <= 6) ){
        console.error("Invalid dice value");
        return;
    }
    switch(num){
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

function diceRoll(){
    return( Math.floor(Math.random() * 6 + 1) );
}

function rollThisDice(event: Event){
    drawDice(event.target as HTMLElement, diceRoll());
    return;
}

function buttonDiceRoll(){
    let e = document.getElementById("d_dice_0") as HTMLDivElement;
    drawDice(e,diceRoll());
    return;
}

function pageLoad(){
    diceDivLoad();
    return;
}

function diceDivLoad(){
    let diceDivs = Array.prototype.slice.call(document.getElementsByClassName("dice"));
    for(let e of diceDivs){
        e.addEventListener("click", (event: Event) => { rollThisDice(event) });
    }
}