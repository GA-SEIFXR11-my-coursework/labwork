function buttonAsk(){
    let marks = prompt("What are your marks? 0 to 100 only");
    if(marks == null){return};

    let grade = "";

    if(marks >= 80){
        grade = "A";
    }else if(marks >= 70){
        grade = "B";
    }else if(marks >= 60){
        grade = "C";
    }else if(marks >= 50){
        grade = "D";
    }else{
        grade = "F";
    }


    if(grade != "F"){
        if(marks%10 >= 5){grade += "+"}
    }

    let target = document.getElementById("yourGrade");
    target.innerHTML = "You grade is " + grade + ".";

    if(grade == "F"){
        target.innerHTML += "You need to re-take the exam!";
        alert("You need to re-take the exam!");
    }
    
    return;
}
