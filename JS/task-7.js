const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

    
const isLoginValid = function(login) {

// const resultValid = login.length > 3 && login.length < 15 ? 
// (true) : 
// ('Ошибка! Логин должен быть от 4 до 16 символов'); 
// console.log(resultValid);
  if(login.length > 3 && login.length < 15 ){    
    return ;
    }
  console.log('Ошибка! Логин должен быть от 4 до 16 символов');  
}

const isLoginUnique = function(logins, login) {    
    // const resultUnique = logins.includes(login) ? 
    // 'Такой логин уже используется!' : (!false);
    // console.log(resultUnique);
  if(logins.includes(login)){    
    console.log ('Такой логин уже используется!'); 
       
  }
  return ;  
}

const addLogin = function(logins, login) {
    isLoginValid(login);
    isLoginUnique(logins, login);
    
    // if (isLoginValid === false) {
    //     console.log ('Ошибка! Логин должен быть от 4 до 16 символов');
    //     return ; 
    // }    
    // if (isLoginUnique === false){
    //     console.log ('Такой логин уже используется!');
    //     return ;
    // }    
    if (isLoginValid === true && isLoginUnique  === false){
        const result = logins.push(login);          
         
        return  result;    
    }
     
    //  console.log ('Логин успешно добавлен!') ;
  return logins;
};
console.log ('Логин успешно добавлен!') ;

// console.log(isLoginValid ('ajax'));

console.log(addLogin(logins, 'Ajax')); 
console.log(addLogin(logins, 'robotGoogles')); 
console.log(addLogin(logins, 'Zod')); 
console.log(addLogin(logins, 'jqueryisextremelyfast')); 
console.log(logins);