const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// const logItems = function(array) {
//     for (let i= 0; i <= 5; i += 1){
        
//         // console.log(i+1);
//         console.log(`${i +1} - ${friends[i]} `);
        
//     }
//     // for(const friend of friends){
//     //     console.log (friend);
//     // }
//   };
const logItems = function(arrays) {
    for (const array of arrays){
        // console.log(array);
        console.log(`- ${array} `);
        // console.log(`${array +1} - ${numbers[array]} `);
        // let i= 0; i <= 100; i += 1 
        // console.log(`${i+1} - ${array} `);

        
    }
}
logItems(friends);
logItems(numbers);
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
 
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



// const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const logItems = function(array){
//    for( let i = 0; i <= 50; i +=5){

//     console.log(i);
//     console.log(friends[i]);
//    }

// }