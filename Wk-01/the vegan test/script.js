//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

var foodMenu = fetchJSON("./foods.json");

// function fetchJSON(requestURL){
//     let here = fetch(requestURL)
//         .then(response => response.json())
//         .then(json => {return json})
//         .catch((error) => console.error("Error:", error))
//     return here;
// }

async function fetchJSON(requestURL){
    const response = await fetch(requestURL);
    const json = await response.json();
    return json;
}

function listFoodMenu(json){
    json
        .then( jsonData => _foodMenu(jsonData))
        .catch((error) => console.error("Error:", error))

    function _foodMenu(json){
        var ul = document.getElementById("foodOptions");
        for(i=0; i<json.menu.length; i++){
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(json.menu[i].name));
            li.setAttribute("id","food"+Number.toString(i));
            ul.appendChild(li);
        }
        return json;
    }
    return json;
}

function checkItemInMenu(json, item){
    json
        .then( jsonData => _here(jsonData, item))
        .catch((error) => console.error("Error:", error))

    function _here(json, item){
        for(i=0; i<json.menu.length; i++){
            if(item === json.menu[i].name){
                return json.resolve(true);
            }
        }
        return json.resolve(false);
    }
    return (json);
}


function pageLoad(){
    listFoodMenu(foodMenu);
}

function buttonAsk(){
    foodMenu
        .then( json => _promptItem(json) )
        .catch((error) => console.error("Error:", error))

    function _promptItem(json){
        const target = document.getElementById("dieteryType");
        let outStr = "";
        let itemIndex = -1;
        let foodName = prompt("What would you like to eat?");
        for(i=0; i<json.menu.length; i++){
            if(foodName === json.menu[i].name){
                itemIndex = i;
                break;
            }
        }
        if(itemIndex >= 0){
            outStr = "You have chosen to eat " + foodName + ". Dieteries include: ";
            //dietaries
            if(json.menu[itemIndex].vegan == true){outStr += "<br/> -\> Vegan"}
            if(json.menu[itemIndex].glutenFree == true){outStr += "<br/> -\> Gluten Free"}
            if(json.menu[itemIndex].nutFree == true){outStr += "<br/> -\> Nut Free"}
            if(json.menu[itemIndex].noOnionAndGarlic == true){outStr += "<br/> -\> No Onion and Garlic"}
        }else{
            outStr = "Unfortunately, " + foodName + " is not on the menu."
        }
        target.innerHTML = outStr;
    }
    return;
}
