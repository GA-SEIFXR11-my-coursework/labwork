// rm script.js; tsc main.ts -outFile script.js ; node script.js
var foods = {
    vegetables: [],
    fruits: []
};
foods.vegetables.push('carrots', 'broccoli', 'kale');
foods.fruits.push('apple', 'banana', 'strawberry');
for (var foodType in foods) {
    console.log(foodType);
    foods[foodType].forEach(function (food) { return console.log(" - ".concat(food)); });
}
