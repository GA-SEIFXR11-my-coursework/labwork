const streets = ["2 Bligh", "3 Sigh", "4 High", "5 Shy", "1 Fly"]
const sub =  ["Deception Bay","Mango Hill","Aspely","Logan","Chermside"]

const states =  ["QLD", "NSW", "WA", "SA", "VIC"]


function generateRandomNumber(){
    return Math.floor(Math.random()*5);
}

function generateAddress(){
    return `${streets[generateRandomNumber()]}, \n 
    ${sub[generateRandomNumber()]} ,\n
    ${states[generateRandomNumber()]}`;
}

function generateNewElement(){
    let h4 = document.createElement("h4")
    h4.textContent = generateAddress();
    h4.id="random-address";
    document.body.appendChild(h4)
}

function handleClick(){
    let currentAddress = document.getElementById("random-address");
    if(currentAddress !== null){
        document.getElementById("random-address").remove();
    }
    generateNewElement();
}

document.getElementById("generate-address")
.addEventListener("click", handleClick)
