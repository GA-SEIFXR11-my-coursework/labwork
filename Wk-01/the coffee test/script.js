// this is almost json
var flowchartAnswers = {
    //                value: undefined == -1, no == 0, yes == 1
    //            promptMsg: Message/question to prompt user for yes/no value
    // (optional) skipToYes: key inside this json to jump to, to avoid tedious questioning
    // (optional)  skipToNo: key inside this json to jump to, to avoid tedious questioning
    // NOTE: becareful not to cause broken links or infinite loops due to skipTo(Yes/No)

    "brew_own_coffee"           : {     value: -1,
                                    promptMsg: "Do you want to brew your own coffee today?",
                                    skipToYes: "milk_in_coffee",
    },
    "milk_in_coffee"            : {     value: -1,
                                    promptMsg: "Do you prefer milk in your coffee?",
                                    skipToYes: "own_an_espresso_machine",
                                     skipToNo: "get_creative_with_recipes",
    },
    "own_an_espresso_machine"   : {     value: -1,
                                    promptMsg: "Do you own an espresso machine?",
                                    skipToYes: "abroad_in_aus_or_nz",
                                     skipToNo: "a_lot_of_milk",
    },
    "abroad_in_aus_or_nz"       : {     value: -1,
                                    promptMsg: "Do you dream of your semester abroad in Australia or NewZealand?",
                                    skipToNo: "a_lot_of_milk",
    },
    "a_lot_of_milk"             : {     value: -1,
                                    promptMsg: "Do you want a lot of milk?",
    },
    "get_creative_with_recipes" : {     value: -1,
                                    promptMsg: "Do you like to get creative with recipes?",
                                     skipToNo: "nice_and_basic",
    },
    "nice_and_basic"            : {     value: -1,
                                    promptMsg: "Do you want to stay nice and basic?",
                                     skipToNo: "science_geek",
    },
    "science_geek"              : {     value: -1,
                                    promptMsg: "Are you a science geek?",
                                    skipToYes: "dramatic_brewing",
    },
    "dramatic_brewing"          : {     value: -1,
                                    promptMsg: "Do you want your coffee brewing to be dramatic?"
    },
}

var flowchartOutcomeConditions = {
    // this is list of outcomes 
    // & their respective condition vectors that need to be met based on flowchartAnswers 
    // 0 == no
    // 1 == yes
    // 2 == dont care
    // advice caution against any modification of flowchartAnswers entry ordering

    "See your friendly local barista"   : [0, 2, 2, 2, 2, 2, 2, 2, 2],
    "bialetti"                          : [1, 1, 0, 2, 2, 2, 2, 2, 2],
    "flat white"                        : [1, 1, 1, 1, 2, 2, 2, 2, 2],
    "latte"                             : [1, 1, 1, 0, 1, 2, 2, 2, 2],
    "cappuccino"                        : [1, 1, 1, 0, 0, 2, 2, 2, 2],
    "aeropress"                         : [1, 0, 2, 2, 2, 1, 2, 2, 2],
    "french press"                      : [1, 0, 2, 2, 2, 0, 1, 2, 2],
    "clever dripper"                    : [1, 0, 2, 2, 2, 0, 0, 0, 2],
    "siphon coffee"                     : [1, 0, 2, 2, 2, 0, 0, 1, 0],
    "chemex"                            : [1, 0, 2, 2, 2, 0, 0, 1, 1],    
}

function determineFlowchartOutcome(){
    // checks every outcome and their condition list against the inputs.
    // returns the outcome as a string if there is a match
    // returns false if are no matches, or if an error has occured

    for(outcomeIndex=0; outcomeIndex<Object.keys(flowchartOutcomeConditions).length; outcomeIndex++){
        let outcome = Object.keys(flowchartOutcomeConditions)[outcomeIndex];
        let conditions = Object.values(flowchartOutcomeConditions[outcome]);
        
        if(conditions.length !== Object.keys(flowchartAnswers).length){return false};

        let matched = true;
        for(i=0;i<conditions.length; i++){
            if(conditions[i] !== 2){
                let thisCondition = Object.keys(flowchartAnswers)[i];
                matched = matched && (conditions[i] == flowchartAnswers[thisCondition].value);
            }
        }
        if(matched){
            //do stuff based on the outcome
            return outcome;
        }
    }
    //console.log("There is a set of conditions/answers that lead to no results.");
    return false;
}

function promptYesNo(message){
    // repeatedly prompts a message until the correct answer is received. Appends yes/no bits to the message
    // the value must be either 0, "no", 1, or "yes"
    // returns 1 for an input of 1 or "yes"
    // returns 0 for an input of 0 or "no"

    let response = "";
    while( ! (["1","0"].includes(response) || ["yes", "no"].includes(response))){
        response = prompt(message + "\n yes = 1 \n no = 0");
    }
    if(response == "1" || response == "yes"){
        return 1;
    }else{
        return 0;
    }
}

function resetAnswers(){
    for(i=0; i<Object.keys(flowchartAnswers).length; i++){
        key = Object.keys(flowchartAnswers)[i];
        flowchartAnswers[key].value = -1;
    }
    return;
}

function resolveFlowchart(){
    // This is the main function that initiates the flowchart
    
    // Begin with the first entry
    let condition = Object.keys(flowchartAnswers)[0];
    let outcome = false;
    while(outcome == false){
        let promptMsg = flowchartAnswers[condition].promptMsg;
        flowchartAnswers[condition].value = promptYesNo(promptMsg);
        outcome = determineFlowchartOutcome();
        if(outcome != false){return outcome}; // an outcome is reached, break the loop early
    
        // skip unnecessary questions
        if(flowchartAnswers[condition].value == 1 && flowchartAnswers[condition].hasOwnProperty("skipToYes")){
            condition = flowchartAnswers[condition].skipToYes;
        }
        else if(flowchartAnswers[condition].value == 0 && flowchartAnswers[condition].hasOwnProperty("skipToNo")){
            condition = flowchartAnswers[condition].skipToNo;
        }
        else{
            // If there is no skipTo's, then it should've reached some outcome above.
            // This means this should not be reached and some fault has occured.
            return false;
        }
    }

    // This means there were no outcomes and the flowchart is open-ended.
    return false;
}

function buttonAsk(){
    resetAnswers();
    outcome = resolveFlowchart();

    if(outcome !== false){
        target = document.getElementById("coffeeOutcome");
        target.innerHTML = "Your coffee pick is: " + outcome +"!";
    }
    return;
}





// the following is the simpleWay. I did not use this but it's here.
// I am trying to subscribe to "no nest" hence why I'm avoiding this
function simpleWay(){

    let response = prompt("Do you want to brew your own coffee today?");

    if(response == "yes"){
        response = prompt("Do you prefer milk in your coffee?");
        if(response == "yes"){
            response = prompt("Do you own an espresso machine?");
            if(response == "yes"){
                response = prompt("Do you dream of your semester abroad in Australia or New Zealand?");
                if(response == "yes"){
                    console.log("flat white");
                }else{
                    response = prompt("Do you want a lot of milk?");
                    if(response == "yes"){
                        console.log("latte");
                    }else{
                        console.log("cappuccino")
                    }
                }
            }else{
                console.log("bialetti");
            }
        }else{
            response = prompt("Do you like to get creative with recipes?");
            if(response == "yes"){
                console.log("aeropress");
            }else{
                response = prompt("Do you want to stay nice and basic?");
                if(response == "yes"){
                    console.log("french press");
                }else{
                    response = prompt("Are you a science geek?");
                    if(response == "yes"){
                        response = prompt("Do you want your coffee brewing to be dramatic?");
                        if(response == "yes"){
                            console.log("siphon coffee");
                        }else{
                            console.log("chemex");
                        }
                    }else{
                        console.log("clever dripper");
                    }
                }
            }
        }
    }else{
        console.log("See your friendly local barista");
    }
}

