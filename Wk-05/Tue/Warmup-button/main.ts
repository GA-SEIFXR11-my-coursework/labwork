// [ -e script.js ] && rm script.js; tsc main.ts; mv main.js script.js;

var gb_clickCount:number = 0;
var gb_cookieCount:number = 0;

function buttonClickMe(){
    gb_clickCount++;
    updateClickCount();
    return;
}

function buttonBuyCookie(){
    gb_clickCount -= 5;
    gb_cookieCount++;
    updateClickCount();
    spawnCookies();
}

function buttonSellCookie(amt:number){
    gb_cookieCount -= amt;
    gb_clickCount += 2 * amt;
    updateClickCount();
    spawnCookies();
}

function updateClickCount(){
    function _updateCookieButtons(){
        let elemBuy = document.getElementById("b_buyCookie") as HTMLButtonElement;
        if(gb_clickCount < 5){
            elemBuy.disabled = true;
        }else{
            elemBuy.disabled = false;
        }

        let elemSell = document.getElementById("b_sellCookie") as HTMLButtonElement;
        if(gb_cookieCount <= 0){
            elemSell.disabled = true;
        }else{
            elemSell.disabled = false;
        }
        
        let elemSell5 = document.getElementById("b_sellCookie5") as HTMLButtonElement;
        if(gb_cookieCount < 5){
            elemSell5.disabled = true;
        }else{
            elemSell5.disabled = false;
        }

        return;
    }

    let elemClickCount = document.getElementById("p_clickCount") as HTMLElement;
    elemClickCount.textContent = String(gb_clickCount);
    _updateCookieButtons();
    return;
}

function spawnCookies(){
    let sectionCookies = document.getElementById("s_cookies") as HTMLElement;
    var imgElems = sectionCookies.getElementsByTagName("img");
    var diff: number = gb_cookieCount - imgElems.length;
    if(diff == 0){return;}
    if(diff > 0){
        for(let i=0; i<diff; i++){
            let newCookieImg = document.createElement("img");
            newCookieImg.src = "https://static.wikia.nocookie.net/cookieclicker/images/5/5a/PerfectCookie.png";
            sectionCookies.appendChild(newCookieImg);
        }
    }else{
        let initIndex = imgElems.length -1;
        for(let i=0; i>diff; i--){
            let thisCookieImg = imgElems[initIndex + i];
            sectionCookies.removeChild(thisCookieImg);
        }
    }
    
    return;
}


