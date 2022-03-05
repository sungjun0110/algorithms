/*
    - Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
    - A flattened array is an array that contains no nested arrays.
    - Arrays maybe nested at any level.
    - If any of the arrays have duplicate values those duplicate values should be present in the returned array.
    - The values in the new array should maintain their ordering as shown in the examples below.
*/

function flatten ( arr ) {
    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr[0]];
    let flattened = [];
  
    arr.forEach(elem => {
      if (typeof elem === 'object')
        flattened = flattened.concat(flatten(elem));
      else
        flattened.push(elem);
    });
  
    return flattened;
  }