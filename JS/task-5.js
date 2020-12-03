const checkForSpam = function(message){
    const transformText = message.toLowerCase().split(' ');
    console.log (transformText);
    for (let i=0;i<=transformText.length; i+=1){
        const forbiddenWord = transformText[i];
        console.log(forbiddenWord);
        const result = forbiddenWord[i] === 'spam' ||'sale' ? true : false;
        return result;
    }
    
}




console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));