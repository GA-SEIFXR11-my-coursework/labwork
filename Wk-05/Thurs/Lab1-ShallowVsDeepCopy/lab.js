// in JS, Arrays and Objects are referenced, variables aren't
// the concept of pointers dont exist in JS (except maybe under the hood).

// Shallow-copy : just the reference is copied
// Deep-copy    : The values are copied into a new reference. There is no link with the original.

// This creates a new object and a reference to it. Even tho counts is a const type, the contents are mutable since the bit that is immutable is the reference itself.
const counts = { kittens: 0, puppies: 0 };

// the variable parsed in is a reference, not a deep-copy. This is usually the case for all functions
function addKitten(countObj) {
  // Since countObj is a reference, the object's value that is parsed gets directly modified
  countObj.kittens = countObj.kittens + 1;
}

function addPuppy(countObj) {
  // since countObj is a reference (not a value), newCountObj points to the same place
  const newCountObj = countObj;

  //therefore the behaviour is exactly the same.
  newCountObj.puppies = newCountObj.puppies + 1;
}

console.log(counts); // should give { kittens: 0, puppies: 0 }
console.log(`Expect: { kittens: 0, puppies: 0 } \n`);

addKitten(counts);
console.log(counts); // should give { kittens: 1, puppies: 0 }
console.log(`Expect: { kittens: 1, puppies: 0 } \n`);

addPuppy(counts);
console.log(counts); // should give { kittens: 1, puppies: 1 }
console.log(`Expect: { kittens: 1, puppies: 1 } \n`);

// ===  Deep-copying:  ===
console.log("Deep copying...");

// reset counts.kittens and counts.puppies to 0
counts.kittens = 0;
counts.puppies = 0;
console.log(`Reset the original counts to 0.`);
console.log(counts); // should give { kittens: 0, puppies: 0 }
console.log(`Expect: { kittens: 0, puppies: 0 } \n`);

const newCounts1 = addKittenDeepCopy(counts);
console.log(`Created a newCounts1 with addKittenDeepCopy(counts)`);
console.log(newCounts1); // should give { kittens: 1, puppies: 0 }
console.log(`Expect: { kittens: 1, puppies: 0 } \n`);

const newCounts2 = addPuppyDeepCopy(counts);
console.log(`Created a newCounts2 with addPuppyDeepCopy(counts)`);
console.log(newCounts2); // should give { kittens: 0, puppies: 1 }
console.log(`Expect: { kittens: 0, puppies: 1 } \n`);

console.log(`console.log(counts) again to show that it has remained unmodifed`);
console.log(counts); //This should stay unmodified, ie { kittens: 0, puppies: 0 }
console.log(`Expect: { kittens: 0, puppies: 0 } \n`);

function addKittenDeepCopy(countObj){
    // Method 1
    // this expands out the 'values' inside a new {} object
    let ret = {...countObj};
    ret.kittens++;
    return(ret);
}
function addPuppyDeepCopy(countObj){
    // Method 2
    // this grabs the values from countObj and shoves it into a new {} object
    let ret = Object.assign({},countObj);
    ret.puppies++;
    return(ret);
}

// === testing references ===
console.log("Testing references");

// we can test references using 3 equals '==='
// 2 equals '==' on the other-hand compares the values / truthy / falsy etc.
