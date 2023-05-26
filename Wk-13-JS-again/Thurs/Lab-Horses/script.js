// [ -e script.js ] && rm script.js; tsc; mv main.js script.js; node script.js
var horses = [
    {
        name: 'maythehorsebewithu',
        active: true,
        country: 'AUS',
        yearOfBirth: 2000,
        hourlyRate: 30,
        numOfHoursWorked: 2000
    },
    {
        name: 'Seabiscuit',
        active: true,
        country: 'USA',
        yearOfBirth: 2007,
        hourlyRate: 50,
        numOfHoursWorked: 2500
    },
    {
        name: 'Justify',
        active: true,
        country: 'USA',
        yearOfBirth: 2004,
        hourlyRate: 30,
        numOfHoursWorked: 2000
    },
    {
        name: 'Lost in the Fog',
        active: false,
        country: 'AUS',
        yearOfBirth: 1981,
        hourlyRate: 88,
        numOfHoursWorked: 900
    },
    {
        name: 'Eclipse',
        active: false,
        country: 'AUS',
        yearOfBirth: 2003,
        hourlyRate: 12,
        numOfHoursWorked: 9000
    },
    {
        name: 'Citation',
        active: true,
        country: 'AUS',
        yearOfBirth: 2003,
        hourlyRate: 42,
        numOfHoursWorked: 6450
    }
];
// 1. Write code to do the following (sometimes it helps to write each solution in a for loop first):
// Use .forEach to print the name of each horse.
console.log(".forEach to print the name of each horse.");
horses.forEach(function (val) {
    console.log(val["name"]);
});
// 2. Use .map to return an array of the years of birth for each horse.
console.log("an array of the years of birth for each horse.", horses.map(function (val) {
    return (val["yearOfBirth"]);
}));
// 3. Use .filter to filter in only the active horses.
console.log("filter in only the active horses.", horses.filter(function (val) {
    return val["active"];
}));
// 4. Use .reduce to calculate the total number of hours worked by all horses collectively.
console.log("total number of hours worked by all horses collectively.", horses.reduce(function (accumulator, next) {
    accumulator += next["numOfHoursWorked"];
    return accumulator;
}, 0));
// Use the appropriate method(s) to select the horses from Australia.
console.log("horses from Australia.", horses.filter(function (val) {
    if (val["country"] == "AUS") {
        return true;
    }
    return false;
}));
// Use the appropriate method(s) to select horses that earn $50 or more per hour.
console.log("horses that earn $50 or more per hour", horses.filter(function (val) {
    if (val["hourlyRate"] >= 50) {
        return true;
    }
    return false;
}));
// Use the appropriate method(s) to get a list of the totals earned by each horse.
console.log("a list of the totals earned by each horse.", horses.map(function (val) {
    return (val["hourlyRate"] * val["numOfHoursWorked"]);
}));
// Use the appropriate method(s) to calculate the total earned by all horses combined.
console.log("calculate the total earned by all horses combined.", horses
    .map(function (val) {
    return (val["hourlyRate"] * val["numOfHoursWorked"]);
})
    .reduce(function (accumulator, curr) {
    return (accumulator + curr);
}));
// BONUS:
// Use the appropriate method to return horses from youngest to oldest. Hint: look up "JS sort compare function".
