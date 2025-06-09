// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const elem = styles.indexOf("blues");


// if(elem !== -1) {
//     styles[elem] = "classic"
// };




//  function logItems(array) {
    
//     for(let i = 0; i < array.length; i++) {
//         console.log(`${i +1} - ${array[i]}`);
        
        
        

//     }
    
//  }
//  logItems(styles);
 




// // Напишіть функцію checkLogin(array), яка:
// // Приймає масив логінів як аргумент.
// // Запитує ім'я користувача через prompt.
// // Перевіряє, чи є введене ім'я у переданому масиві.
// // Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// // Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// // const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const userName = prompt("Введіть ваш логін:");
//     if(array.includes(userName)) {
//         return alert(`Welcome ${userName}`)
// } else {
//     return alert("Not found");
// }


// }
// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins)






// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function caclculateAverage() {
//    let total = 0;
//    let count = 0;
//    for(const arg of arguments) {
//     if(typeof arg === "number") {
//         total += arg;
//         count++;

//     }
    
    
//    }
//    if(count === 0) {
//     return 0;
//    }
//    const average = total / count;
//    return average;
// }
// console.log(caclculateAverage(1, 2, "a", 4, [5, 7]));



// ******************* Task 4
// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].



// const total = [];
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function addD(arr) {
//     for(let i = 0; i < someArr.length - 1; i++) {
//         total.push(arr[i] + arr[i + 1]);
//     }
// return total;
// }
// console.log(addD(someArr));





