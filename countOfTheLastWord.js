// check the count of the world in the sentence

// method 1
const lastWordLength = sentence => {
    const wordArray = sentence.split(" ");
    const lastWordLength = wordArray[wordArray.length - 1].length;
    return lastWordLength;
}

// methods2 
const getLastWord = sentence => {
    const sanitizedText = sentence.trim();
    let count = 0;

    for(let i=0; i<sanitizedText.length; i++){
        if(sanitizedText.charAt(i) === " "){
            count = 0;
        }
        else {
            count++;
        }
    }

    return count;
}

//driver code
const word = "i am an human";
const result = getLastWord(word);
console.log(result)