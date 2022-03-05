/*
    isPalindrome('SEI Rocks'); //=> false
    isPalindrome('rotor'); //=> true
    isPalindrome('A nut for a jar of tuna'); //=> true
    isPalindrome(''); //=> true
*/

const isPalindrome = ( str ) => {
    if ( str.length <= 1 ) return true;
  
    const chars = str.toLowerCase().split(' ').join('').split('');
  
    for ( let i = 0; i < chars.length/2; i++ ) {
      if ( chars[i] !== chars[chars.length-(1+i)] ) return false;
    }
    return true;
  }
  