/*Last digits of a number

Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]*/

function lastDigit(n, d) {
  var even = 0;
  var arr = [];
  var str = String(n);
  if (d <= 0) {
    return arr;

  } else if (d <= str.length) {
  		str = str.split("").reverse().join("");
      	while (d > 0) {
        	arr.push(Number(str[even]));
        	even++;
        	d--;
      	}
      	return arr.reverse();
  } else if (d > str.length) {
  		d = d - (d - str.length);
  		while (d > 0) {
        	arr.push(Number(str[even]));
        	even++;
        	d--;
  		}
  } 
  return arr;
    
}


// Решение с Codewars


const lastDigit = (n, d) => d <= 0 ? [] : (n + "").slice(-d).split("").map(Number)