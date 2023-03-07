function buttonCat(){
    let h_elem = document.getElementById("heading");
    h_elem.innerText = "I love Cats";
    let imgCat_elem = document.getElementById("imgCat");
    let imgDog_elem = document.getElementById("imgDog");
    imgCat_elem.hidden = "";
    imgDog_elem.hidden = "hidden";
    return
}

function buttonDog(){
    let h_elem = document.getElementById("heading");
    h_elem.innerText = "I love Dogs";
    let imgCat_elem = document.getElementById("imgCat");
    let imgDog_elem = document.getElementById("imgDog");
    imgCat_elem.hidden = "hidden";
    imgDog_elem.hidden = "";
    return;
}