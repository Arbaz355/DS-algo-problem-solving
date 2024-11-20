// find the number of vowel and consonant in the given string

const getVowelConsonantCount = (str) => {
  str = str.toLowerCase();
  let vowelCount = 0;
  let consonantCount = 0;

  const VOWEL_LIST = "aeiou";

  for (let char of str) {
    if (!char.match(/[a-z]/i)) continue;

    if (VOWEL_LIST.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }

  return [vowelCount, consonantCount];
};

// driver code
const sentence = "i am very 1231 poor$@@";
const result = getVowelConsonantCount(sentence);
console.log(result);
// expected output -> [3, 8], {v:2, c:8}
