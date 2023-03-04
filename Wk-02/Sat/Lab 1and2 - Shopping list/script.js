var itemList = [];

function buttonAdd(){
    let target = document.getElementById("i_item");
    let input = target.value;
    target.value = "";

    if(["","none"].includes(input)){return}
    
    //push to front, not end
    // makes items show up on top rather than bottom.
    itemList = itemList.reverse();
    itemList.push(input);
    itemList = itemList.reverse();

    populateList();
    return;
}

function buttonRemoveTopItem(){
    // remove the item at the front, not end
    // assignment requires using splice method. Have to comment this
    // itemList = itemList.reverse();
    // itemList.pop();
    // itemList = itemList.reverse();

    itemList = itemList.splice(1,itemList.length);
    populateList();
    return;
}
function buttonClear(){
    if(confirm("Are you sure you want to clear this list?")){
        itemList = [];
    }
    populateList();
    return;
}

function deleteThisEntry(element, index){
    element.remove();
    itemList.splice(index,1);
    return;
}

function populateList(){
    let ul = document.getElementById("ul_shoppingList");
    ul.innerHTML = "";
    for(index in itemList){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(itemList[index]));
        // https://stackoverflow.com/a/38860151
        li.addEventListener("click", deleteThisEntry.bind(this,li,index),false);
        ul.appendChild(li);
    }
    return;
}