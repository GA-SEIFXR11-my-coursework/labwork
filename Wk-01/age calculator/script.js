function buttonAsk(){
    let birthYear = prompt("Which year were you born in?");
    if(birthYear == null){return};
    let birthdayElapsed = prompt("Have you had your birthday yet? \"yes\" or \"no\" only");
    if(!["yes","no"].includes(birthdayElapsed)){return};
    switch(birthdayElapsed){
        case "yes":
            birthdayElapsed = true;
            break;
        case "no":
            birthdayElapsed = false;
            break;
        default:
            break;
    }
    const dateToday = new Date();
    yearDiff = dateToday.getFullYear() - birthYear;

    if(!birthdayElapsed){yearDiff--};
    document.getElementById("yourAge").innerHTML = "You are " + yearDiff + " years old.";
    return;
}
