// rm script.js; tsc main.ts -outFile script.js ; node script.js

interface Foods {
    vegetables: string[],
    fruits: string[],
}
  
const foods: Foods = {
    vegetables: [],
    fruits: [],
};
  
foods.vegetables.push('carrots', 'broccoli', 'kale');
foods.fruits.push('apple', 'banana', 'strawberry');

for (let foodType in foods){
    console.log(foodType);
    foods[foodType].forEach( (food: string) => {console.log(` - ${food}`)} );
}