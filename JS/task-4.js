
const formatString = function(string){
    const symbols = string.split('');
    
    for (let i = 0; i <= symbols.length; i += 1){
      
        const result = symbols.length <= 40 ? string : `${symbols.splice(0,39).join('')}...` ;
        console.log(symbols.length);
        return result;
    }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );