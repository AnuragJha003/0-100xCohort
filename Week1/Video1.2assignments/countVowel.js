function countVowel(str) {
    //define regular expression 
    const vowelRegex= /[aeiouAEIOU]/g;
    //regex for vowel checking 

    const matches=str.match(vowelRegex);
    //match method to find all occurance of the vowelregex 

    return matches?matches.length:0;
}