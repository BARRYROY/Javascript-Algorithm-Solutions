/* Palindrome
   A palindrome is any string that can be reversed and still be the same.
    An example of one is 'radar', since it is spelled the same even after being reversed.

   Implement this algorithm in Javascript or TyeScript as a function `palindrome(str: string)` that takes a string and returns true if the string is a palindrome.
*/
// define a function isPalindrome
function isPalindrome(str) {
    
    // make the case consistent
    smallStr = str.toLowerCase();
    // replace the non string elements with ""
    smallStr = smallStr.replace(/\W/g, "");
    // initialize the lenght of the string
    const len = smallStr.length;

    for (let i=0; i<len; i+=1){
        if (smallStr[i] === smallStr[len - 1 -i ]) {
            return true;
        }
    }
    return false;
}

console.log(isPalindrome('radar'));
console.log(isPalindrome('dad'));
console.log(isPalindrome('&*mUM'))
console.log(isPalindrome('ferocity'));