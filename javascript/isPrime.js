/*
    - Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
    - A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.
*/

function isPrime ( num ) {
    if ( !Number.isInteger(num) || num <= 1 ) return false;
    for ( let i = 2; i < num; i++ ) {
      if ( num % i === 0) return false;
    }
    return true;
}