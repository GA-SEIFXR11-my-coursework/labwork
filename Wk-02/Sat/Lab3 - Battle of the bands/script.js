let bands = ["The Beatles","Elvis Presley","Michael Jackson","Elton John","Madonna","Led Zeppelin","Rihanna","Pink Floyd","Eminem","Mariah Carey","Taylor Swift","Queen","Whitney Houston","Eagles","Celine Dion","AC/DC","The Rolling Stones","Drake","Garth Brooks","Kanye West","Justin Bieber","Ed Sheeran","Billy Joel","U2","Aerosmith","Barbra Streisand","Phil Collins","ABBA","Katy Perry","Chris Brown","Bruce Springsteen","Bruno Mars","Jay-Z","Metallica","Lady Gaga","Lil Wayne","Maroon 5","Adele","Beyoncé","Fleetwood Mac","Rod Stewart","Bee Gees","Nicki Minaj","Coldplay","Red Hot Chili Peppers","Linkin Park","Britney Spears","Bon Jovi","Pink","B'z","George Strait","Shania Twain","Guns N' Roses","Backstreet Boys","Eric Clapton","Neil Diamond","Prince","Paul McCartney","Kenny Rogers","Santana","Simon & Garfunkel","Janet Jackson","Julio Iglesias","Dire Straits","The Doors","Chicago","Bob Dylan","Cher","Def Leppard","Genesis","David Bowie","Stevie Wonder","James Taylor","Tina Turner","Olivia Newton-John","Linda Ronstadt","The Beach Boys","Donna Summer","Alicia Keys","The Carpenters","Earth, Wind & Fire","Lionel Richie","Johnny Cash","Justin Timberlake","Ariana Grande","R.E.M.","Post Malone","Flo Rida","Tim McGraw","Van Halen","Journey","Ayumi Hamasaki","George Michael","Foreigner","Meat Loaf","Tom Petty","Johnny Hallyday","The Weeknd","Imagine Dragons","Luke Bryan","Christina Aguilera","Shakira","Tupac Shakur","R. Kelly","Bob Seger","Nirvana","Kenny G","Enya","Bryan Adams","Bob Marley","The Police","Barry Manilow","Kiss","Aretha Franklin"];
var myBands;

class BandList{
    bandArray = [];

    addBand(band){
        this.bandArray.push(band);
    }

    filterByLiked(liked_bool){
        var arrOut;
        for(entry of this.bandArray){
            if(entry.liked == liked_bool){arrOut.push(entry)}
        }
        return arrOut;
    }
}
class Band extends BandList{
    index;
    listElem;
    likeButtonElem;
    moveUpButtonElem;
    moveDownButtonElem;
    delButtonElem;

    constructor(name_string,liked_bool, genre_string, parentList_obj){
        super();
        this.name = name_string;
        this.liked = liked_bool;
        this.genre = genre_string;
        this.parentList = parentList_obj;
    }

    moveDown(){
        if(this.index < this.parentList.bandArray.length-1){
            this.parentList.bandArray.splice(this.index,1);
            this.parentList.bandArray.splice(this.index+1,0,this);
            
            //swap indexes
            this.parentList.bandArray[this.index].index -= 1;
            this.index += 1;
            
            updateHtmlList();
        }
        return
    }

    moveUp(){
        if(this.index > 0){
            this.parentList.bandArray.splice(this.index,1);
            this.parentList.bandArray.splice(this.index-1,0,this);

            //swap indexes
            this.parentList.bandArray[this.index].index += 1;
            this.index -= 1;

            updateHtmlList();
        }

        return;
    }

    likeButton(){
        if(this.liked){
            this.liked = false;
            this.likeButtonElem.innerText = "Like!";
        }else{
            this.liked = true;
            this.likeButtonElem.innerText = "Liked! 👍";
        }
    }

    deleteSelf(){
        this.parentList.bandArray.splice(this.index,1);
        for(let i = this.index; i<this.parentList.bandArray.length; i++){
            this.parentList.bandArray[i].index -= 1;
        }
        updateHtmlList();
    }

}
function pageLoad(){
    myBands = new BandList;
    for(let index in bands){
        let band = new Band(bands[index],false,"no-genre",myBands);
        //at some point, moveUp/moveDown decided 101+1 = 1011 and it broke the whole thing
        //therefore, i had to typecast index into a number. Javascript is awful. Can i use typescript pls?
        band.index = Number(index); 
        myBands.bandArray.push(band);
    }
    updateHtmlList();
    return;
}

function btn_showAll(){
    updateHtmlList();
    return;
}

function btn_showLiked(){
    let ul = document.getElementById("ul_bandlist");
    if(myBands.bandArray.length == 0){return}
    for(let index in myBands.bandArray){
        let thisBand = myBands.bandArray[index];
        if(!thisBand.liked){
            thisBand.listElem.style.display = "none";
        }
    }
    return;
}

function updateHtmlList(){
    let ul = document.getElementById("ul_bandlist");
    ul.innerHTML = "";
    if(myBands.bandArray.length == 0){return}
    for(let index in myBands.bandArray){
        let thisBand = myBands.bandArray[index];
        if(thisBand.listElem == null){
            let li = document.createElement("li");
            let likeButton = document.createElement("button");
            let moveUpButton = document.createElement("button");
            let moveDownButton = document.createElement("button");
            let delButton = document.createElement("button");
            moveUpButton.innerText = "^";
            moveDownButton.innerText = "v";
            delButton.innerText = "X";
            likeButton.innerText = "Like!";
            likeButton.addEventListener("click", ()=>{thisBand.likeButton()});
            moveUpButton.addEventListener("click", ()=>{thisBand.moveUp()});
            moveDownButton.addEventListener("click", ()=>{thisBand.moveDown()});
            delButton.addEventListener("click", ()=>{thisBand.deleteSelf()});
            thisBand.listElem = li;
            thisBand.likeButtonElem = likeButton;
            thisBand.moveUpButtonElem = moveUpButton;
            thisBand.moveDownButtonElem = moveDownButton;
            thisBand.delButtonElem = delButton;
            li.appendChild(moveUpButton);
            li.appendChild(moveDownButton);
            li.appendChild(delButton);
            li.appendChild(likeButton);
            li.appendChild(document.createTextNode(myBands.bandArray[index].name));
            ul.appendChild(li);
        }else{
            ul.appendChild(thisBand.listElem);
        }
        thisBand.listElem.style.display = "block";
    }
    return;
}