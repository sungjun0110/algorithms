/* 
    formatWithPadding(123, '0', 5); //=> "00123"
    formatWithPadding(42, '*', 10); //=> "********42"
    formatWithPadding(1234, '*', 3); //=> "1234"
*/

const formatWithPadding = ( num, char, length ) => {
    let string = num.toString();
    if ( string.length >= length ) {
      return string;
    }
    let pad = '';
    for ( let i = 0; i < length - string.length; i++ ) {
      pad += char;
    }
    return pad+string;
  }