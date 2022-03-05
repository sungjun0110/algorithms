/*
    - Write a function called getNumForIP that accepts a single string as argument.
    - The input string is formatted as an IP address, such as '192.156.99.15'.  IP addresses are used in networking and are actually 32-bit integers.  However, those that work with networks find it more convenient to work with these numbers as four 8-bit integers, separated by a 'dot' character.
    - The getNumForIP function should return the numeric value of the string IP address being passed in as an argument.
*/

function getNumForIP(strIP) {
    arrayIP = strIP.split('.').reverse();
    result = 0;
    for (let i = 0; i < arrayIP.length; i++) {
      result += arrayIP[i] * (256 ** i);
    }
    return result;
  }