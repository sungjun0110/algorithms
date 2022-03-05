/*
    - Write a function called mumble that accepts a single string argument.
    - The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
    - Examples describe it best..
*/

const mumble = ( str ) => {
    const chars = str.split('');
    let answer = '';
    for ( let i = 0; i < chars.length; i++ ) {
      let char = chars[i];
  
      for ( let j = 0; j <= i; j++ ) {
        answer += char;
      }
  
      if ( i < chars.length-1 ) answer += '-';
    }
    return answer;
  }