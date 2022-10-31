/*---------------------------------------Norma------------------------------------------------------*/
//1.Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let userName = +prompt('Enter your name');
console.log('Hello ' + `${userName}` + ' I am glad to see you.');


//2.Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу.

const year = 2022;
let ask = +prompt('Enter your birth year');
let age = year - ask;
console.log('I know that you ' + `${age}` + ' years old');


//3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

let askTwo = +prompt('Enter the length of one of the sides of the square and I will show you the perimeter.');
let perimeter = askTwo * 4;
console.log(perimeter);

/*---------------------------------------Max------------------------------------------------------*/

//1.Запитай у користувача радіус кола і виведи площу такої окружності.

let radius = +prompt('Enter the radius of the circle and I will show you the area.');
const PI = 3.14;
const area = PI * (radius * radius);
console.log(area);

/*2.Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
    Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/

let dist = +prompt('Enter the distance between the cities.');
let time = +prompt('Specify how many hours you want to reach the final point.');
const speed = dist / time;
console.log('You have to move ' + `${speed}` + ' km/h to reach your destination');

//3.Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

const exchangeCourse = 1.01;
let exchange = +prompt('Enter the amount of dollars you want to exchange into Euros?') * exchangeCourse;
console.log('You have received ' + `${exchange}` + ' Euros');

