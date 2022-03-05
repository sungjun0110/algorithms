/*
    Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
    - Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
    - The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
    - If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.
*/

function primeFactors(num) {
    factors = [];
    while (num > 1) {
      for (let i = 2; i <= num; i++) {
        if (isPrime(i) && num % i == 0) {
          factors.push(i);
          num = num / i;
          break;
        }
      }
    }
    return factors;
  }