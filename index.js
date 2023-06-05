function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Remove any non-letter characters
  str = str.replace(/[^a-z]/g, '');

  // Compare characters from both ends of the string
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // Characters don't match, not a palindrome
    }
  }

  return true; // All characters match, it's a palindrome
}

// Example usage
console.log(isPalindrome("mom"));      // true
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
