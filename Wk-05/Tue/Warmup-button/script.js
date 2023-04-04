// [ -e script.js ] && rm script.js; tsc main.ts; mv main.js script.js;
var gb_clickCount = 0;
var gb_cookieCount = 0;
function buttonClickMe() {
    gb_clickCount++;
    updateClickCount();
    return;
}
function buttonBuyCookie() {
    gb_clickCount -= 5;
    gb_cookieCount++;
    updateClickCount();
    spawnCookies();
}
function buttonSellCookie(amt) {
    gb_cookieCount -= amt;
    gb_clickCount += 2 * amt;
    updateClickCount();
    spawnCookies();
}
function updateClickCount() {
    function _updateCookieButtons() {
        var elemBuy = document.getElementById("b_buyCookie");
        if (gb_clickCount < 5) {
            elemBuy.disabled = true;
        }
        else {
            elemBuy.disabled = false;
        }
        var elemSell = document.getElementById("b_sellCookie");
        if (gb_cookieCount <= 0) {
            elemSell.disabled = true;
        }
        else {
            elemSell.disabled = false;
        }
        var elemSell5 = document.getElementById("b_sellCookie5");
        if (gb_cookieCount < 5) {
            elemSell5.disabled = true;
        }
        else {
            elemSell5.disabled = false;
        }
        return;
    }
    var elemClickCount = document.getElementById("p_clickCount");
    elemClickCount.textContent = String(gb_clickCount);
    _updateCookieButtons();
    return;
}
function spawnCookies() {
    var sectionCookies = document.getElementById("s_cookies");
    var imgElems = sectionCookies.getElementsByTagName("img");
    var diff = gb_cookieCount - imgElems.length;
    if (diff == 0) {
        return;
    }
    if (diff > 0) {
        for (var i = 0; i < diff; i++) {
            var newCookieImg = document.createElement("img");
            newCookieImg.src = "https://static.wikia.nocookie.net/cookieclicker/images/5/5a/PerfectCookie.png";
            sectionCookies.appendChild(newCookieImg);
        }
    }
    else {
        var initIndex = imgElems.length - 1;
        for (var i = 0; i > diff; i--) {
            var thisCookieImg = imgElems[initIndex + i];
            sectionCookies.removeChild(thisCookieImg);
        }
    }
    return;
}
