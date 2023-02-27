function tellMeAboutAMovie(){
    let movieName = prompt("What's the name of this movie?");
    if(movieName == null){return};
    let movieYear = prompt("What year was is released?");
    if(movieYear == null){return};
    let movieMonth = prompt("Do you know which month it was? It has to be a number, where 0 is January, 1 is February, ... 11 is December. Otherwise this breaks. Just flow wit h it or put 0 inside");

    //if(typeof(movieDate) != number){return};

    var movieDate = new Date();
    movieDate.setFullYear(movieYear);
    movieDate.setMonth(movieMonth);
    const dateToday = new Date();

    let yearDiff = dateToday.getFullYear() - movieDate.getFullYear();
    let monthDiff = yearDiff * 12;
    monthDiff += dateToday.getMonth() - movieDate.getMonth();
    yearDiff = Math.floor(monthDiff/12);
    monthDiff = (monthDiff + 12)%12;

    //allow future dates, meaning negative time 😎
    if(yearDiff < 0){
        yearDiff += 1;
        monthDiff = (monthDiff-12)%12;
    }

    document.getElementById("aboutMovie").innerHTML = movieName + " was released in " + movieYear + ". That's " + yearDiff + " years and " + monthDiff + " months ago!";
}   