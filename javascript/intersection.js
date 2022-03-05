/*
    - Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
    - The function should return a new array containing all elements in common, including repeating element values.
    - The ordering of the elements in the returned is not important.
    - If there are no elements in the arrays in common,  the intersection function should return an empty array.
    - The function should not mutate (change) either argument.
*/

function intersection(arr1, arr2) {
    idxs = {};
    result = [];
    for (let i = 0; i < arr2.length; i++) {
      idxs[i] = false;
    }
    arr1.forEach(elem => {
      for (let i = 0; i < arr2.length; i++) {
        if (elem === arr2[i] && !idxs[i]){
          idxs[i] = true;
          result.push(elem);
          break;
        }
      }
    })
    return result;
  }