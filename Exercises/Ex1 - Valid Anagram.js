// Ex 1 - Valid Anagram O(n)
// Given two strings, write a function to determine 
// if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another.

function validAnagram(str1, str2){
    let freq1 = {}, freq2 = {};
    for(const ch of str1){
        !freq1[ch] ? freq1[ch] = 1 : freq1[ch] += 1;
    } 
    for(const ch of str2){
        !freq2[ch] ? freq2[ch] = 1 : freq2[ch] += 1;
    }
    for (const key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
    return true;
}