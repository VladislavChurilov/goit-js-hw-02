

let total = 0;
let numbers = [];

while (true) {
    let input = prompt('Введите число');
    // total  = (total += number);
    if (input === null){
        console.log ('Отменено пользователем')
        break;
    }
    input = Number(input);

const notANumber = Number.isNaN(input);

if(notANumber){
    continue;
}
    numbers.push(input);    
} 
console.log(numbers);
    for (const number of numbers){        
        total += number;        
    }

console.log(`Общая сумма чисел равна ${total}`);