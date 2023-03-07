//ceebs
    // Extension: Allow the user to adjust the serving sizes, and modify the ingredients list appropriately.

    // Extension 2: Prompt the user for a review (star rating/comments) for the recipe, and add it as a property to the object

    // Extension 3: Instead of logging the ingredients list to console, display it using HTML. When an ingredient item is clicked, it should add it to a shoppingList object with the keys being the ingredient, and the values being the quantity.



const myRecipe = {
    title: "BESTESTS CHEWYYYY CHOCO COOKIE",
    servings: "not enough",
    ingredients: {
        "granulated sugar" : "1/2 cup",
        "brown sugar" : "3/4 cup",
        "unsalted butter, melted" : "1/2 cup (115 g)",
        "egg" : "1",
        "vanilla extract" : "1 teaspoon",
        "flour" : "1 and 1/4 cups",
        "chocolate chips" : "200g",
    }, //changing it to obj for name and amt (both strings)
    steps: [    
        "Prepare the ingredients.",
        "In a large bowl, whisk together the sugars, salt, and butter until a paste forms with no lumps.",
        "Whisk in the egg and vanilla, beating until light ribbons fall off the whisk and remain for a short while before falling back into the mixture.",
    ],
}



function pageLoad(){

    document.getElementById("h1_title").textContent = myRecipe.title;
    document.getElementById("p_serving_size").textContent = `Recipe serves: ${myRecipe.servings}`;

    alert(`Are you ready to make ${myRecipe.title}?`);
    
    loadRecipeLists();
    return;
}

function loadRecipeLists(){
    const ulElem = document.getElementById("ul_ingredients");
    const olElem = document.getElementById("ol_steps");
    ulElem.innerHTML = "";
    olElem.innerHTML = "";

    for(ingredient of Object.keys(myRecipe.ingredients)){
        let li = document.createElement("li");
        let str = `${myRecipe.ingredients[ingredient]} of ${ingredient}`;
        li.appendChild(document.createTextNode(str));
        ulElem.appendChild(li);
    }

    for(step of myRecipe.steps){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(step));
        olElem.appendChild(li);
    }
    return;
}

function buttonAddIngredient(){
    let str_ingredient_name = document.getElementById("input_ingredient_name").value;
    let str_ingredient_amt = document.getElementById("input_ingredient_amt").value;
    
    if([""].includes(str_ingredient_name)){return};
    if([""].includes(str_ingredient_amt)){return};

    myRecipe.ingredients[str_ingredient_name] = str_ingredient_amt;
 
    loadRecipeLists();
    return;
}