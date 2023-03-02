const amazingLyrics = ["Woah, we're halfway there", "Woah-oh, livin' on a prayer", "Take my hand, we'll make it, I swear", "Woah-oh, livin' on a prayer"]

for(verse of amazingLyrics){
    let new_p = document.createElement("p");
    document.body.insertAdjacentElement("beforeend",new_p);
    new_p.innerText = verse;
}

for(verse of amazingLyrics){
    let new_p = document.createElement("p");
    document.body.insertAdjacentElement("beforeend",new_p);
    new_p.innerText = verse.toUpperCase();
}
