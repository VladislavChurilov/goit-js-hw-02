


// let total = 0;

const formatString = function(string){
    const symbols = string.split('');
    console.log (symbols);
    // let total = 0;
    for (let i = 0; i <= symbols.length; i += 1){
        // total += i;
        // console.log(total);
        // if (symbols[i>40])
        const normString = string.length;
        // console.log(normString);
        const result = symbols.length <= 40 ? string : normString ;
        return result;
    }
}






console.log(formatString('Curabitur ligula sapien, tincidunt non.nnnn'));