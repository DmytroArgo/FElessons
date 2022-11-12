/* ----------------------------------------------------------Minimum--------------------------------------------------------------------------------------------*/
/* 1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...),
 передбач можливість введення невірних даних */
// let askAge = +prompt('Enter your age');
// if (askAge >= 0 && askAge <= 11) {
//     console.log('you are child')
// } else if (askAge >= 12 && askAge <= 17) {
//     console.log('you are tinager')
// } else if (askAge >= 18 && askAge <= 59) {
//     console.log('you are adult')
// } else {
//     console.log('enter a correct value')
// };

//2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// let askNubmer = +prompt('Enter a number from 0-9');
// if(askNubmer < 0 || askNubmer > 9){
//     console.log('enter a correct value');
// }
// switch (askNubmer) {
//     case 0:alert(')');
//         break;
//     case 1: alert('!');
//         break;
//     case 2: alert('@');
//         break;
//     case 3: alert('#');
//         break;
//     case 4: alert('$');
//         break;
//     case 5: alert('%');
//         break;
//     case 6: alert(':');
//         break;
//     case 7: alert('&');
//         break;
//     case 8: alert('*');
//         break;
//         case 9: alert('(');
//         break;
// }

//3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// let askNumberOne = +prompt('Enter a firts value');
// let askNumbertwo = +prompt('Enter a second value');
// let result = 0;
// for(let i = Math.min(askNumberOne, askNumbertwo); i <= Math.max(askNumberOne, askNumbertwo); i++){
//     result += i;
// }
// console.log(result);

//4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// let ask1 = +prompt('Enter first value');
// let ask2 = +prompt('Enter second value');
// let result
// while(ask1 != ask2){
//     if(ask1 > ask2){
//         ask1 = ask1 - ask2;
//     }else{
//         ask2 = ask2 - ask1;
//     }
// }
// result = ask1;
// console.log(result);

//5.Запитай у користувача число і виведи всі дільники цього числа.

// let ask1 = +prompt('Enter value');
//  for(i = 2; i <= ask1; i++){
//     if(ask1 % i == 0){
//         console.log(i);
//     }
//  }

/* ----------------------------------------------------------Medium--------------------------------------------------------------------------------------------*/
//1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом
// let  palindrom = prompt('Enter a value');
// if (palindrom.toString().split("").reverse().join("") == palindrom.toString()) {
//     console.log("It is palindrom")
// } else {
//     console.log("Its not palindrom")
// }
//2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// 1.від 200 до 300 - знижка буде 3%; 
// 2.від 300 до 500 - 5%;
// 3.від 500 і вище - 7%.
// let purchaseAmount = +prompt('Enter a purchase amount');
// if(purchaseAmount < 200){
//     alert('you are dont have discount')
// }else if(purchaseAmount >= 200 && purchaseAmount < 300){
//     purchaseAmount = purchaseAmount + (purchaseAmount * 0.03);
//     alert(`Amount to be paid ${purchaseAmount}`);
// }else if (purchaseAmount >= 300 && purchaseAmount < 500){
//     purchaseAmount = purchaseAmount + (purchaseAmount * 0.05);
//     alert(`Amount to be paid ${purchaseAmount}`);

// }else if(purchaseAmount >= 500){
//     purchaseAmount = purchaseAmount + (purchaseAmount * 0.07);
//     alert(`Amount to be paid ${purchaseAmount}`);
// };
//3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
// let twin = 0,
//     unmatched = 0,
//     positive = 0
//     negative = 0,
//     nuuull = 0;

// for (let i = 1; i <= 10; i++) {
//     let x = prompt('enter 10 random values');
//     if (x == 0) {
//         nuuull++
//     } else if (x > 0) {
//         positive++
//         if (x % 2 === 0) {
//             twin++
//         }else{
//             unmatched++
//         }
//     }else if( x < 0){
//         negative++
//         if(x % -x  == 2){
//             twin++
//         }else{
//             unmatched++
//         }
//     }
// }
// console.log(`You have ${positive} positive values, ${negative} negative values, ${unmatched}  unmatched values, and ${twin} twin values, and ${nuuull} null values `)

//4.Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// let currDay = 0;
// const days = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Субота', 'Неділя'];
// while (confirm(`${days[currDay]}. Хочете побачити наступний день тижня?`)) {
//   currDay = (currDay + 1) % days.length;
// }
/* ----------------------------------------------------------Maximum--------------------------------------------------------------------------------------------*/
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, 
// записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. 
// Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
// let askRandomValue = +prompt('Привіт, загадай число від 0 до 100')
// while (askRandomValue < 0 || askRandomValue > 100 || askRandomValue == null || askRandomValue == ''){
//   askRandomValue = +prompt('Загадай число від 0 до 100')
//   if(confirm('Це число менше 50?') === true){

//   }
// }


