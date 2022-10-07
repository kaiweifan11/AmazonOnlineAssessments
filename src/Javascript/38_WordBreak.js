/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence
of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const getResult = (input) =>{
        while(input.length > 0){
            const checkWord = stringInWordDict(input);
            if(checkWord === ''){
                return false;
            }
            else{
                input = input.substring(checkWord.length, input.length);
            }

        }
        return true;
    }

    const stringInWordDict = (string) =>{
        for(let word of wordDict){
            const wordLength = word.length;
            const temp = string.substring(0, wordLength);
            if(temp === word) return temp;
        }

        return '';
    }

    return getResult(s);
};