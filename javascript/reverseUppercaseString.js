/*
    reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
*/

const reverseUpcaseString = ( string ) => {
    return string.split('').reverse().join('').toUpperCase();
}