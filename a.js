// Задание 1: Использование условных конструкций if-else
let age = 25; // Замените на другие значения для проверки

if (age < 18) {
    console.log("Вы слишком молоды.");
} else if (age >= 18 && age <= 65) {
    console.log("Добро пожаловать!");
} else {
    console.log("Вам пора на пенсию.");
}

// Задание 2: Реализация условий с помощью конструкции switch
let day = 3; // Попробуйте с разными значениями

switch(day) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Некорректный день");
}

// Задание 3: Подсчет суммы всех четных чисел от 0 до n
let n = 10; // Задайте значение n
let sum = 0;

for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(`Сумма всех четных чисел от 0 до ${n} равна ${sum}`);

// Задание 4: Подсчет количества совпадений подстроки
let str = "Hello, how are you? Hello again!"; // Исходная строка
let subStr = "Hello"; // Подстрока для поиска
let count = 0;
let pos = str.indexOf(subStr);

while (pos !== -1) {
    count++;
    pos = str.indexOf(subStr, pos + 1);
}

console.log(`Количество вхождений подстроки "${subStr}" в строке: ${count}`);

// Задание 5: Применение циклов и условных конструкций совместно
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Задание 6: Реализация условий с использованием if-else if и switch

// Версия с if-else if
let season = 'summer'; // Замените на разные значения

if (season === 'winter') {
    console.log("Зима");
} else if (season === 'spring') {
    console.log("Весна");
} else if (season === 'summer') {
    console.log("Лето");
} else if (season === 'autumn') {
    console.log("Осень");
} else {
    console.log("Некорректный сезон");
}

// Версия с switch
season = 'summer'; // Замените на разные значения

switch(season) {
    case 'winter':
        console.log("Зима");
        break;
    case 'spring':
        console.log("Весна");
        break;
    case 'summer':
        console.log("Лето");
        break;
    case 'autumn':
        console.log("Осень");
        break;
    default:
        console.log("Некорректный сезон");
}

// Задание 7: Создание цикла с выходом по условию
let number = 0;

while (number <= 10) {
    number = prompt("Введите число больше 10:");
}

console.log("Число больше 10 введено!");

// Задание 8: Применение цикла do-while
number = 0;

do {
    number = prompt("Введите число больше 10:");
} while (number <= 10);

console.log("Число больше 10 введено!");
