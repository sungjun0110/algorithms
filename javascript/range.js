/*
    range(1,4) //=> [1,2,3]
    range(-2, 3) //=> [-2,-1,0,1,2]
    range(1,1) //=> []
    range(5,2) //=> "First argument must be less than second"
*/

const range = ( firstNum, secondNum ) => {
    if (firstNum > secondNum) {
      return "First argument must be less than second";
    }
    let rangeArray = [];
    for ( let i = firstNum; i < secondNum; i++ ) {
      rangeArray.push(i);
    }
    return rangeArray;
  }