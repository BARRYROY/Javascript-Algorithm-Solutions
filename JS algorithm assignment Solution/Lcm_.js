/*Least Common Multiple
   In mathematics, the least common multiple (LCM) of two or more integers 
   is the smallest positive integer that is divisible by each of the given integers.

   For example, the LCM of 4 and 6 is 12.

   Implement this algorithm in Javascript or TyeScript 
   as a function `leastCommonMultiple(n1: number, n2: number)` 
   that takes two integers returns the LCM of the given integers.*/

   // LCM (a,b)= a*b/gcd(a,b) 

   //function to return gcd of a and b
function lcm(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
 }
 
 function gcd(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 console.log(lcm(3,15));
 console.log(lcm(10,15));