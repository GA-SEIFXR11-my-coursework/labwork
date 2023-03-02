let currentYear = 2023;

let inputYear = prompt("What year is it?");

if(inputYear < currentYear){
    console.log("Whoaa!! Blast from the past! 🥳");
}else if(inputYear > currentYear){
    console.log("Hello from the future self! 🔮");
}else{
    console.log("I'm in the present! 👑");
}