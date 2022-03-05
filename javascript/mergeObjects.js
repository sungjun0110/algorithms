/*
    - Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
    - If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
*/

const mergeObjects = (target, ...obj) => {
    obj.forEach(current => {
      for(let key in current) {
        target[key] = current[key]
      }
    })
    return target
  }