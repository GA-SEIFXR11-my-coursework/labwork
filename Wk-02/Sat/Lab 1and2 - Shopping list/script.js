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

    itemList.splice(0,1);
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

function deleteThisEntry(index){
    itemList.splice(index,1);
    populateList();
    return;
}

function populateList(){
    let ul = document.getElementById("ul_shoppingList");
    ul.innerHTML = "";
    for(let index in itemList){ // the "let" is what 'lets' me avoid using  .bind()
        let li = document.createElement("li");
        let button = document.createElement("button");

        li.appendChild(document.createTextNode(itemList[index]));
        li.appendChild(button);
        button.innerText = "Delete me!";
        button.addEventListener("click", ()=>{deleteThisEntry(index)});
        
        // https://stackoverflow.com/a/38860151
        // button.addEventListener("click", deleteThisEntry.bind(this,index),false);
        
        ul.appendChild(li);
    }

    return;
}