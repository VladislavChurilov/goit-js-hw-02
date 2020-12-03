const findLongestWord = function(string){
    const word = string.toLowerCase().split(' ');
    console.log (word);
    let longestWord = word[0];
    for (let i = 1; i > word.length; i += 1) {
        
        if (word[i] > longestWord){
            longestWord = word[i];
        }
        return longestWord;
    }
};






console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));