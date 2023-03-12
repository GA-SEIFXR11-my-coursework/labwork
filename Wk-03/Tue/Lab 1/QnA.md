# Lab 1

```javascript
const ship = {
  name: "Millennium Falcon",
  speed: 11,
  crew: ["Han Solo", "Chewbacca"],
  passengers: ["Leia"],
  famous: true,
  heardOfIt: function () {
    console.log("You've never heard of the millennium falcon!?");
    this.famous = false;
  },
  addPassenger: function (passenger) {
    this.passengers.push(passenger);
  },
  removePassenger: function (passenger) {
    let index = this.passengers.indexOf(passenger);
    this.passengers.splice(index, 1);
  },
};

```

## How do we access the ship's name?

```ship.name;```

## How can we change the speed to 13?

```ship.speed = 13```

## What code would we run to add a passenger "Luke"?

```ship.crew.push("Luke");```
or
```ship.addPassenger("Luke")```

## How can you remove the passenger "Leia"?

```ship.passenger.pop();```
or
```ship.removePassenger("Leia")```

## What code adds a new property called "missions" and set it equal to an empty object?

```ship.missions = {}```

## How do we add "smuggled cargo" to the missions with "prisoners" and "unobtanium" in an array as the value?

```ship.missions.push({"smuggled cargo": ["prisoners", "unobtanium"]})```

## What code deletes the speed property?

```delete ship.speed;```

## How can I view all of an object's properties?

```console.log(ship)```
or specifically the keys:

``` javascript
for (key in myObject){
    console.log(key);
}
```

## What is the keyword which references the context of a function/method?

```this```

>*Thanks chatGPT (because i actually did not understand the question):*

In JavaScript, the keyword that references the context of a function/method is this.

The this keyword refers to the object that the function is a property of, or the object that the method is called on. It can be used to access and manipulate the properties and methods of the object.

The value of this is determined at runtime, based on how the function or method is called. The value of this can be explicitly set using the call(), apply(), or bind() methods.

It's important to note that the value of this can be different depending on the context in which the function or method is called. For example, if a function is called as a standalone function, this will refer to the global object (window in a browser or global in Node.js). However, if the function is called as a method of an object, this will refer to that object.

## What is the default context for a function in the browser?

>*Thx again openAI*

In the browser, the default context for a function is the **global object**, which is the window object.

This means that if a function is defined in the global scope, or if it is called without an object reference, the value of "this" inside the function will be the window object.

For example:

```javascript
function sayHello() {
  console.log(`Hello, my name is ${this.name}.`);
}

window.name = "John";
sayHello(); // Output: Hello, my name is John.

```

In the example above, since the "sayHello" function is defined in the global scope, the value of "this" inside the function will be the window object. We've also set the "name" property of the window object to "John", so the output of the function will be "Hello, my name is John."
