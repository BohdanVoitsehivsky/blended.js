
// task1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = Number( prompt("Введіть число"));
// console.log(number);
// if(number === 10) {
//     alert("Вірно");
// } else {
//     alert("Не вірно");
// }
// const answer = confirm("Alex?")
// console.log("answer: ", answer);



// function checkNumber() {};


// task-2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);


// let randomNumber = Math.floor(Math.random() * (59 - 0) + 0) ;
// if(randomNumber >= 0 && randomNumber <= 15) {
//     alert(`${randomNumber} входить в першу чверть`);
// } else if(randomNumber > 15 && randomNumber <= 30) {
//     alert(`${randomNumber} входить в другу чверть`);
// } else if(randomNumber > 30 && randomNumber <= 45) {
//     alert(`${randomNumber} входить в третю чверть `);
// } else {
//     alert(`${randomNumber} входить в четверту чверть`)
// }

//  .................. Задача 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


// let num = prompt("Введи число від 1 до 4");
// let result

// switch(num) {
//     case "1": result = "зима";
//     break;
//     case "2": result = "spring";
//     break;
//     case "3": result = "summer";
//     break;
//     case "4": result = "autumn";
//     break;
//     default: result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";

// }
// alert(result);
// console.log("1".padStart(2, "0"))


// ...................... Задача 4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples


// let mins = prompt("Кількість хвилин");
// // let mins = 180;
// const hours = Math.floor(mins / 60);
// console.log(hours);

// const min = mins % 60;
// console.log(min);
// const formatedHours = String(hours).padStart(2, "0");
// const formatedMin = String(min).padStart(2, "0");
// const time = `${formatedHours}:${formatedMin}`;


// console.log(time);
// alert(time);

// ................. Задача 5
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"



// const login = prompt("Логін")
// console.log(login);
// let password;


// if(login === "Адмін") {
//      password = prompt("Пароль");

// } else if(login === null || login === "") {
//     alert("Скасвовано");
// } else {
//     alert("Я вас не знаю");
// }


//  if(password === "Я головний") {
//     alert("Добрий день");
// } else {
//     alert("Невірний пароль!");
// }

// .......... Задача 6
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.


// let number = 0;
// while(number <= 20) {
//     console.log(number);
//     number++;
// }

// ............. Задача 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


// function getNumbers(min, max) {
//     while(min <= max) {
 


//         console.log(max);
//         max--; 
//         }

//         const sum = 
        
//     }
//     getNumbers(0, 20)

// function getNumbers(min, max) {
//     let sum = 0;
//     for(let i = max; i >= min; i--) {
// console.log(i);
// if( i % 2 === 0) {
//     sum += i;
// }
//     }
//     return sum;
// }
// const result = getNumbers(0, 20)
// console.log("Сума парних чисел:", result);
    


// ......................Задача 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.


// function min(a, b) {
     
//     if(typeof a !== "number" || typeof b !== "number") {
//         return "Not a number";
//     }

//     if(a > b) {
//         return b;
//     } else  {
//         return a;
//     } 
// }
   
//     console.log(min(10, 5));
    

// .................Задача 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
//  else {
//     return confirm("Вам немає 18!")
// }
// }
// const result = isAdult(17)
// console.log(result);



// .....................Задача 10


// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.


// function fizzBuzz(num) {
//     for(let i = 1; i <= num; i++)
//     {
//          if(i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz")
//         }
//         else if(i % 3 === 0) {
//             console.log("fizz");
//         } else if(i % 5 === 0) {
//             console.log("buzz");
//         } 
//     }
// }
// fizzBuzz(15)