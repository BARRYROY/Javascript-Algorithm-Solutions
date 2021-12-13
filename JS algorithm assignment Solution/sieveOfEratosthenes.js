/*Sieve of Eratosthenes
   In mathematics, the sieve of Eratosthenes is a 
   simple, ancient algorithm for finding 
   all prime numbers up to any given limit.

   A prime number is a natural number greater than 1 
   that has no positive divisors other than 1 and itself.

   The algorithm consists of creating a list of 
   consecutive integers from 2 through n (2 <= n <= 2^64) 
   and marking them off as prime (or composite)

   Implement this algorithm in Javascript or TyeScript as a function 
   `sieveOfEratosthenes(n: number)` that returns an array of all prime numbers 
   up to (and including) `n`.
   */


   function sieveOfEratosthenes(n)
   {
       var store = [], i, j, primes = [];
       for (i = 2; i <= n; ++i)
       {
           if (!store[i])
           {
               primes.push(i);
               for (j = i <<1; j <= n; j +=i)
               {
                   store[j] = true;
               }
           }
       }
       return primes;
   }
   console.log(sieveOfEratosthenes(2^64))
   console.log(sieveOfEratosthenes(500))
   console.log(sieveOfEratosthenes(5000))