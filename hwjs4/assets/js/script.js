/*Напиши всі можливі варіанти створення функцій.
1. Function Declaration
2. Arrow function
3. function declaration statement*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Створи функцію, яка буде виводити кількість переданих їй аргументів
function getArgs(...args){
  return  console.log(args);
}
getArgs(1,2,3,4,5);*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

// function calcSum(a, b){
//     if(a < b){
//         console.log(-1);
//     }else if(a > b){
//         console.log(1);
//     }else{
//         console.log(0)
//     }
// }
// calcSum();
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Напиши функцію, яка обчислює факторіал переданого їй числа.
// function calcFactorial(x){
//     if(x < 0){
//         return undefined;
//     }
//     if( x === 1 || x === 0){
//         return 1;
//     }
//     return x * calcFactorial(x - 1);
// }

// let income = calcFactorial(4);
// console.log(income);
// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function joinSum(numberOne, numberTwo, numberThree){
//   console.log(numberOne.toString() + numberTwo.toString() + numberThree.toString());
// }
// joinSum(1,6,8);

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// function calcSum(a, b) {
//   if (a === undefined){
//     return b * b
//   }else if(b === undefined){
//    return a * a
//   }else{
//     return a * b;
//   }
  
// }
// console.log(calcSum(2,3));

//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
  // function perfectNumber(n){
  //   let a = 0;
  //   let x;
  //   for(let i = 1; i < n - 1; i++){
  //     x = n % i;
  //     if(x === 0){
  //       a+=i;
  //     }
  //   }
  //   if(n === a){
  //     console.log('Це досконале число')
  //   }else{
  //     console.log('це не досконале число')
  //   }
  // }
  // perfectNumber();

  // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
  //і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
