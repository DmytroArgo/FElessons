/*--------------------------------------------minimum------------------------------------------------------- */

//1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let num1 = 0.1 * 10,
    num2 = 0.2 * 10;
console.log((num1 + num2) / 10);
//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let a = '1',
    b = 2;
console.log((a * 1) + b);
//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let ask = +prompt('Enter the volume of the flash drive in GB') * 1024,
    value = (ask / 820);
console.log(Math.floor(value));
/*--------------------------------------------medimum------------------------------------------------------- */
//1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let askAboutMoney = +prompt('Enter the amount you have'),
    askPriceChocolate = +prompt('What is the price of one chocolate bar?');
let amountOfChocolate = Math.floor(askAboutMoney / askPriceChocolate);
let changeResult = askAboutMoney % askPriceChocolate;
console.log (amountOfChocolate, changeResult.toFixed(2));

//2.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

// /*--------------------------------------------maximum------------------------------------------------------- */
//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const percentPerMonth = 5;
const period = 2;
let askValue = +prompt('Enter how many money you can hold in our bank to deposite');
const RESULT = askValue / 100 * percentPerMonth / 12 * period;
const incomeCash = RESULT + askValue;
console.log(incomeCash);

//2.Що повернуть вирази:
//  2 && 0 && 3 
//виведе 0

//  2 || 0 || 3 
//виведе 2

// 2 && 0 || 3 
//виведе 3


