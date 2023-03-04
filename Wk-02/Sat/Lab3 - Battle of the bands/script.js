let bands = ["The Beatles","Elvis Presley","Michael Jackson","Elton John","Madonna","Led Zeppelin","Rihanna","Pink Floyd","Eminem","Mariah Carey","Taylor Swift","Queen","Whitney Houston","Eagles","Celine Dion","AC/DC","The Rolling Stones","Drake","Garth Brooks","Kanye West","Justin Bieber","Ed Sheeran","Billy Joel","U2","Aerosmith","Barbra Streisand","Phil Collins","ABBA","Katy Perry","Chris Brown","Bruce Springsteen","Bruno Mars","Jay-Z","Metallica","Lady Gaga","Lil Wayne","Maroon 5","Adele","Beyoncé","Fleetwood Mac","Rod Stewart","Bee Gees","Nicki Minaj","Coldplay","Red Hot Chili Peppers","Linkin Park","Britney Spears","Bon Jovi","Pink","B'z","George Strait","Shania Twain","Guns N' Roses","Backstreet Boys","Eric Clapton","Neil Diamond","Prince","Paul McCartney","Kenny Rogers","Santana","Simon & Garfunkel","Janet Jackson","Julio Iglesias","Dire Straits","The Doors","Chicago","Bob Dylan","Cher","Def Leppard","Genesis","David Bowie","Stevie Wonder","James Taylor","Tina Turner","Olivia Newton-John","Linda Ronstadt","The Beach Boys","Donna Summer","Alicia Keys","The Carpenters","Earth, Wind & Fire","Lionel Richie","Johnny Cash","Justin Timberlake","Ariana Grande","R.E.M.","Post Malone","Flo Rida","Tim McGraw","Van Halen","Journey","Ayumi Hamasaki","George Michael","Foreigner","Meat Loaf","Tom Petty","Johnny Hallyday","The Weeknd","Imagine Dragons","Luke Bryan","Christina Aguilera","Shakira","Tupac Shakur","R. Kelly","Bob Seger","Nirvana","Kenny G","Enya","Bryan Adams","Bob Marley","The Police","Barry Manilow","Kiss","Aretha Franklin"];


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
    constructor(name_string,liked_bool, genre_string){
        super();
        this.name = name_string;
        this.liked = liked_bool;
        this.genre = genre_string;
    }

    moveDown(){
        if(index != this.bandArray.length-1){
            let temp = this.bandArray.splice(this.index,1);
            
            //swap indexes
            this.bandArray[this.index].index -= 1;
            temp.index += 1;
            
            this.bandArray.splice(this.index,0,temp);
        }
        return
    }

    moveUp(){
        if(index != 0){
            let temp = this.bandArray.splice(this.index,1);

            //swap indexes
            this.bandArray[this.index-1].index += 1;
            temp.index -= 1;

            this.bandArray.splice(this.index-1,0,temp);
        }
        return;
    }
}

let myBands = new BandList;
for(let index in bands){
    let band = new Band(bands[index],false,"no-genre");
    band.index = index;
    myBands.bandArray.push(band);
}
populateList(myBands);

function populateList(obj_bands){
    let ul = document.getElementById("ul_bandlist");
    ul.innerHTML = "";
    if(obj_bands.bandArray.length == 0){return}
    for(let index in obj_bands.bandArray){
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = "Like!";
        li.appendChild(button);
        li.appendChild(document.createTextNode(obj_bands.bandArray[index].name));
        ul.appendChild(li);
    }
}