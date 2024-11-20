//count the number of occurrence of duplicates letters in the given sentence or word

const countDuplicateLetters = (str) => {
  str = str.toLowerCase();
  let charCount = {};

  for (let char of str) {
    if (char === " ") continue;

    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let duplicateCharCount = {};
  for (let char in charCount) {
    if (charCount[char] > 1) {
      duplicateCharCount[char] = charCount[char];
      //duplicateCharCount.l = charCount.l => 3
    }
  }

  return duplicateCharCount;
};

// driver code
let sentence = "Hello World";
const result = countDuplicateLetters(sentence);
console.log(result);
// expected output => { l-2, o-2 }
