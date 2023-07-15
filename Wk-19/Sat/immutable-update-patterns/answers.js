// =============================================================================
// Arrays
// =============================================================================

// Add 5 to the end of the array
exports.f0 = (array) => {
  return [...array, 5];
}

// Add 0 to the start of the array
exports.f1 = (array) => {
  return [0, ...array];
}

// Replace the first element in the array with 0
exports.f2 = (array) => {
  const ret = [...array];
  ret[0] = 0;
  return ret;
}

// Increment each number in the array by 2
exports.f3 = (array) => {
  const ret =
    [...array]
    .map((v)=>{return v+2})
  ;
  return ret;
}

// Remove the 3s from the array
exports.f4 = (array) => {
  const ret =
    [...array]
    .filter((v)=>{return v !== 3})
  ;
  return ret;
}

// Replace the first 4 with a 3
exports.f5 = (array) => {
  const ret = [...array];
  const index = ret.indexOf(4);
  if(index !== -1){
    ret[index] = 3;
  }
  return ret;
}

// =============================================================================
// Objects
// =============================================================================

// Replace the object's `name` property with "Tonto Bear"
exports.f6 = (obj) => {
  const ret = {...obj}
  ret.name = "Tonto Bear";
  return ret;
}

// Add a new property `likes` with the value "Walkies" to the object
exports.f7 = (obj) => {
  const ret = {
    ...obj,
    likes: "Walkies"
  };
  return ret;
}

// Remove the balls property from the object
exports.f8 = (obj) => {
  const ret = {...obj};
  if(ret.hasOwnProperty('balls')){
    delete ret.balls;
  }
  return ret;
}

// =============================================================================
// Array of Objects
// =============================================================================

// The following functions will be passed this array of objects:
// [
//   { name: 'Tonto', smart: true },
//   { name: 'Sailor', smart: false },
//   { name: 'Scout', smart: false },
//   { name: 'Odin', smart: true },
//   { name: 'Poppy', smart: true }
// ]

// return a copy of the array with the Scout object's smart property changed to true
exports.f9 = (array) => {
  const ret = structuredClone(array);
  ret.forEach((obj)=>{
    if(obj.name === "Scout"){
      obj.smart = true;
    }
  });
  return ret;
}

// return a new array that contains only the smart dogs
exports.f10 = (array) => {
  const ret =
    structuredClone(array)
    .filter((v)=>{
      return v.smart === true;
    })
  ;
  return ret;
}

// return a new array sorted by the dog's names
exports.f11 = (array) => {
  const sorted = structuredClone(array);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  sorted.sort((a,b)=>{
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  return sorted;
}
