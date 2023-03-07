function thisButton(){
    const inputElem = document.getElementById("input_field");
    const ulElem = document.getElementById("ul_char_count");
    ulElem.innerHTML = "";
    let alphCount = countOccurences(inputElem.value);
    console.log(alphCount);
    for(alph of Object.keys(alphCount)){
        let count = alphCount[alph];
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`"${alph}" : ${count}`)); 
        ulElem.appendChild(li);  
    }
    return;
}

function countOccurences(str){
    // sucks that I cant use the python dict trick
    const alphabetCount = {};
    const regex = /[a-z]/i;

    for (let char of str) {
        if (char.match(regex)) {
            alphabetCount.hasOwnProperty(char)
                ? alphabetCount[char.toLowerCase()] += 1
                : alphabetCount[char.toLowerCase()] = 1
        }
    }
    return alphabetCount;
}

let myObj = {
    "h" : 1,
    "a" : 2,
}
console.log(myObj["h"])