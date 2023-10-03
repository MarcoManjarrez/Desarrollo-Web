function piglatin() {
    "use strict";
    const text = document.getElementById("text").value;
    var val = "";

     // Define a regular expression pattern to match words (letters separated by non-letters)
     const wordPattern = /(\w+)(\W*)/g;

     // Split the input text into words using the regular expression
     const words = text.match(wordPattern);
 
     if (!words) {
         val= ""; // No words found
     }
     else {
        // Define a function to translate a single word to Pig Latin
        function translateWord(word) {
            const firstLetter = word[0];
            const restOfWord = word.slice(1);
            const vowels = "aeiouAEIOU";
    
            if (vowels.includes(firstLetter)) {
                return word + "ay"; // Word starts with a vowel
            } else {
                return restOfWord + firstLetter + "ay"; // Word starts with a consonant
            }
        }
    
        // Translate each word and join them back into a sentence
        const translatedWords = words.map(translateWord);
        val += translatedWords;
     }

     document.getElementById("pigLbl").textContent = val;
     
}