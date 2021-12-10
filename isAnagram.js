// Create a function called isAnagram, which given two strings, returns true if they are anagrams of one another.
// For example: `Listen` is an anagram of `Silent`

function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const firstArray = first.split('');
  const secondArray = second.split('');

  firstArray.forEach((x) => {
    if (!secondArray.includes(x)) {
      return false;
    } else {
      return true;
    }
  });
}
