// const coursec = ["html", "5", "true", "null"];
// // const lastIndex = coursec.length - 1;

// coursec[2] = "Node.js"
// console.log(coursec);


// let a = [1, 2, 3];
// let b = a;
// const c = [1, 2, 3]
// a[0] = 100;
// console.log("a", a);
// console.log("b", b);
// console.log("c", c);


// console.log(a === c);




// методи масивів

//  ***** join

// const coursec = ["html", "5", "true", "null"];
// const str = coursec.join(" ")
//  console.log(str);


//  ****** split

//  зворотній до join

// const coursec = ["html", "5", "true", "null"];
// const str = coursec.join(" ")
// const arr = str.split(" ")
//  console.log(str);
//  console.log(arr);

//  метод slice()
// const coursec = ["html", "5", "true", "null"];
// const arr = coursec.slice(1);
// console.log(coursec);

// console.log(arr);
// console.log(arr === coursec);


// ************ метод Concat()
// const coursec = ["html", "5", "true", "null"];
// const arr = [1, 2, 3];

// const result = coursec.concat(arr)
// console.log(result);


// *************метод indexOf()
// const coursec = ["html", "5", "true", "null"];

// const index = coursec.indexOf("react")
// console.log(index);

//  *********************** метод push

// const coursec = ["html", "5", "true", "null"];
// coursec.push("Node.js", "lalala")





// // *****************метод pop
// const a = coursec.pop();
// console.log("a", a);

// console.log("courses", coursec);

//  ********* ітерація по масиву


// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
// for(let i = 0; i < friends.length; i++) {
//     friends[i] = friends[i] + "!!!"
// console.log(friends[i]);

// }


//  *************цикл for...of
// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
// let total = 0;
// for(const item of friends) {
//     console.log(item)
//     total += item;
// }
// console.log(total);



//  ********* метод includes

// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];

// console.log(friends.includes("Rachel"));






// const value = "8 10" ;
// const arr = value.split(" ")
// // const result = arr[0] * arr[1];
// const result = (Number(arr[0]) + Number(arr[1])) * 2


// console.log(result);


// const fruits = ["apple", "grape", "orange", "banana", "lemon"];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}: ${fruits[i]}`);
    

// }




//  *************** сума всіх парних елемнетів

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14 ];
// let total = 0;
// for(let number of numbers) {
//     if((number % 2 ===0)) {
        
//         total += number;


//     }
    
    
    
// }
// console.log(total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14 ];
// let total = 0;
// for(let number of numbers) {
//     if(number % 2 !==0) {
       
//         continue;
        
//     }
//     total += number
    
    

// }
// console.log(total);



// const names = "Jacob,William,Solomon,Artemis";
// const phones = "380931111111,380970001515,380989997997,380966566332";

// const navesArr = names.split(",")
// const phonesArr = phones.split(",")


// for(let i = 0; i < navesArr.length; i++) {
//     console.log(`${navesArr[i]}: ${phonesArr[i]}`);
    
// }




// ***********************


// const string = "        Welcome to the         future               ";


// const arr = string.trim().split(" ");

// const result = arr.slice(1, arr.length - 1).join(" ");
// console.log(result.trim());

// **********

// const values = [100, 17, 94, 1, 23, 37];
// let min;
// for(let i = 0; i < values.length; i++) {
//     if(i === 0) {
//         min = values[i];
//     } else if( values[i] < min) {
//       min = values[i];  
//     }
    
    
   

// }

// *********************


// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];

// function foo(array) {
//     const first = array[0];
//     const last = array[array.length - 1];
//     return [first, last]

// }
// console.log(foo(friends));



// функції ( частина 2)
// function sum(a, b) {
//     console.log(arguments);
//     return a + b
    
// }
// sum(2, 5)

// function multiply() {
//     let total = 1;
//     for(const arg of arguments) {
//         total *= arg;
//     }
//     return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function foo() {
//     const args = Array.from(arguments);
//     return args.join("-")
// }
// foo(1, 2, 3); // Поверне "1-2-3"
// console.log();


// function createReversedArray() {
//   const result = Array.from(arguments);
//    console.log(result);
//   return result.slice(0).reverse()
//   console.log(result);
  
  
// }
// console.log( createReversedArray(1, 5, 6));


// function foo() {
//     const arr = Array.from(arguments);
//     console.log ("Arguments", Array.isArray(arguments));
//     console.log("arr", Array.isArray(arr));
    
    
// }


// foo(1, 2, 3)

// // foo(10, 12, 14, 15, 17)



// const add = function() {
// console.log("add");

// }
// console.log(add);
// add()



// const add = function() {

// const arr = Array.from(arguments)
// let total = 0;
//  for( const item of arr) {
//     total += item
//  }
//  return total
    
// }



// console.log(add(1, 2, 3));
// console.log(add(10, 20, 30, 4, 5))




 
// function calAverage() {

// let total = 0;
// for(let i = 0; i < arguments.length; i++) {
//     total += arguments[i] ;
   
    
// }
// return total / arguments.length

// }
//  console.log(calAverage(1, 2, 5));
//  console.log(calAverage(55, 2, 5, 22, 29));
//  console.log(calAverage(1, 2, 5, 55, 2, 5, 22, 29));


//  const a = 10;
  

//  function foo() {

//     const b = 20;
//     for(let i = 0; i < 3; i++) {
//         console.log(b);

//     }


//  }

// foo();





// *************- стек виклиікв


// function fnA() {
//     console.log("fnA");
    
// }
// function fnB() {
//     console.log("fnB");
    
// }
// function fnC() {
//     console.log("fnC");
    
// }
// console.log("before fnA");
// fnA();

// console.log("after fnA");

// console.log("before fnB");
// fnB();

// console.log("after fnB");

// console.log("before fnC");
// fnC();

// console.log("after fnC");



// ******** 

// function bar() {
//     console.log("bar");
    
// }
// function baz() {
//     console.log("baz");
//     }
//     function foo() {
//         console.log("foo");
//         bar();
//         baz();
//     }
//     foo();



//     function bar() {
//         baz();
//     console.log("bar");
    
// }
// function baz() {
//     console.log("baz");
//     }
//     function foo() {
//         console.log("foo");
//         bar();
//         console.log("end");
        
        
//     }
//     foo();



// // ********************** task
// function logItems(items) {

// for(let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
    
// }

// }



// logItems(["Mango", "Poly", "Ajax"]);




// ************** task

// function printInfo(names, phones) {
//     const nameArr = names.split(",");
//     const phonesArr = phones.split(",");
    
//     for(let i = 0; i < nameArr.length; i++) {
// console.log(nameArr[i], phonesArr[i]);

//     }
    
// }

// printInfo("lkvf,wkjefn,woefj,wlkfen", "51331133,5544554546,4545445435,4354534545435")




// ****************task

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minut =  totalMinutes % 60;
//     const doubleHours = String(hours).padStart(2, "0") ;
//     const doubleMinutes = String(minut).padStart(2, "0")
//    console.log(`${doubleHours}:${doubleMinutes}`);
   
    
// }

// console.log(formatTime(500));




// ********** task


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function foo(array, count) {
// const res = [];
// for(let i = 0; i < array.length; i += count) {
// const a = array.slice(i, i + count);

// res.push(a)

    
// }
    
// return res
// }
// console.log(
//  foo(numbers, 4));




// ** обєкти

// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     track: ["track1", "track2", "track3"],
//     isFavorite: true,
// };

// playlist.name = "New playlist"
// playlist.name = "lalala"
// playlist.lala = "suoer"
// console.log(playlist.lala);


// const obj = {
//     userName: "Alice",
//     skils: {
//         html: true,
//         css: true,
//         js: false,
//     }
// }
// obj.skils.js = true;
// console.log(obj.skils.js);




// const arr = [1, 2, 3];
// arr.lalala = "tototo"
// console.log(arr);


// function foo() {
//     console.log("lala");
    
// }
// // foo.lalal = "totto";


// const a = {x: 1, y: 2};
// const b = a;

// a.x = 100;
// console.log("a", a);
// console.log("b", b);

// // console.log(a === b);




//  ************ Короткі властивості 

// const userName = "Alice";
// const age = 25;

// const obj = {
//     userName,
//     age,
// }
// console.log(obj);


// function foo(name, age) {
//     return {
//         name,
//         age,
//     }
// }
// console.log(foo("Petya", 30));


// const inputName = "color";
// const obj = {
//     [inputName]: "red"
// }
// console.log(obj);


//  ************* перебір обєктів

// const feedback = {
//     good: 3,
//     neutral: 5,
//     bad: 10,
// }
// let total = 0;
// // for(const key in feedback) {
//     console.log(feedback[key]);
//     total += feedback[key]
// }
// console.log(total);

// const keys = Object.keys(feedback);
// for(const key of keys) {
//     console.log(feedback[key]);
//     total += feedback[key];
    
// };
// console.log(total);


// const values = Object.values(feedback);
// console.log(values);
// for(const item of values) {
//     total += item;
// }

// console.log(total);




// ********** 

// const animal = {
//     legd: 4
// }
// const dog = Object.create(animal);
// dog.name = "patron"
// // for(const key in dog) {
// //    if(dog.hasOwnProperty(key)) {
// //     console.log(dog[key]);
    
// //    }
    
// // }
// const keys = Object.keys(dog);
// for(const key of keys) {
//     console.log(dog[key]);
    
// }


// **********

// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };

// const user1 = {
//     name: "Petya",
//     age: 25,
//     hobby: "css",
//     premium: true,
// };
// // user.mood = "happy";
// // user.hobby = "skydiving";
// // user.premium = false;
// // const keys = Object.keys(user)
// // for(const key of keys) {
// //     console.log(`${key}: ${user[key]}`);
    
// // }
// // console.log(user);
// function foo(obj) {
//     obj.mood = "happy";
// obj.hobby = "skydiving";
// obj.premium = false;
// const keys = Object.keys(obj);
// for(const key of keys) {
//     console.log(`${key}: ${obj[key]}`);
//     return "kjsfdcm"
    
// }

// }
// console.log(foo(user))
// foo(user1)
// console.log(foo(user1));



// const salaries = {
//     Alice: 160,
//     Yura: 130,
//     Petya: 100,
// }

// function summa(obj) {
//     let sum = 0;
//     const values = Object.values(obj);
//    for(const value of values) {
//     sum += value;
//    }
//    return sum;
    

// }
// console.log(summa(salaries));


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//    console.log(product.price);
   
//   }
  
// }
// getProductPrice("Radar")

// ************ 

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// // const author = [];
// // for(const book of books) {
// //     author.push(book.author)
// // }
// // console.log(author);

// let totalRating = 0;
// for(const book of books) {
//     totalRating += book.rating;
//     console.log(totalRating);
    
// }
// const averageRating = totalRating / books.length
// console.log(averageRating);


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for(const product of products) {
//     console.log(product);
//   }
  
// }
// getAllPropValues()


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const res = [];
//   for(const product of products) {
//    if(product.hasOwnProperty(propName) ) {
//      res.push(product[propName])
//      console.log(product.price);
     
//    }
//   }
//   return res
// }


// console.log(getAllPropValues("quantity"));


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
 
//   for(const product of products) {
//     if(product.name === productName) {
//       return product.price * product.quantity;
//     } 
      
    
    
//   }
//   return `Product ${productName} not found!`
// }
// console.log(calculateTotalPrice("Salo"));

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }





// *************** lesson 29.05

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chasndler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},

// ];


//  Пошук друга за іменем

// function findByName(arr, userName) {
// // ross === joey
//     for(const item of arr) {
//      if(item.name.toLowerCase === userName.toLowerCase) {
//         return item
//      }
     
     
    
        
//     }
//     return "Not found"
// }


// console.log(findByName(friends, "Joe"))



// отримуємо імя всіх друзів


// function getAllName(arr) {
//     let names = [];
//     for(const item of arr) {
//        names.push(item.name); 
//     }
// return names;
// }
//  console.log(getAllName(friends));
 



//  отриммати імена тільки тих друзів, які зараз онлайн


// function getOnline(arr) {
//     const online = [];
//     for(const item of arr) {
//        if(item.online) {
//         online.push(item);
//        }
        
//     }
//     return online;
// }
// console.log(getOnline(friends));






// const stones = [
//     {name: "Смарагд", price: 1300, quantity: 4},
//     {name: "Діамант", price: 2700, quantity: 3},
//     {name: "Сапфір", price: 400, quantity: 7},
//     {name: "Сапфір", price: 400, quantity: 7},
//     {name: "Щебінь", price: 200, quantity: 2},
// ];


// function calcTotalPrice(stones, stoneName) {
//     let sum = 0;
//     for(const item of stones) {
//         if(item.name === stoneName) {
//          sum += item.quantity * item.price;
            
//         }
//     }
//     return sum;
// }
// console.log(calcTotalPrice(stones, "Сапфір"));




// ********** методи обєкту


// ...rest ...spred оператори  1,48 відео 2го уроку 


// const obj = { x:1};

// const obj1 = obj;

// obj.x = 100;
// console.log(obj1);



// function foo(a, b, ...rest) {

// console.log(rest);

// }
// foo(1, 2, 3);
// foo(10, 20, 3, 4, 5)



// **** spread оператор робить протилежну дію до rest
// const numbers = [
//     1000,
//     ...[1, 1, 3],
//     2000,
//     ...[4, 5, 6],
//     3000
// ]
// console.log(numbers);

// const temps = [18, 14, 12, 19, 29, 35, 24]
// console.log(Math.min(...temps));
// console.log(Math.max(...temps));




//  стврення масиву і тип за посиланням


// const a = [{x: 1}, {y: 2}];
// const b = [...a];

// a[0].x = 100
// console.log("a", a);
// console.log("b", b);


//  поєднуємо кілька масивів в один через spread

// const lastWeekTemps = [1, 2, 3];
// const currentWeek = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9]


// const allTemps = [...lastWeekTemps, ...currentWeek, ...nextWeekTemps];
// console.log(allTemps);





//  створення обЄкта

// const objA = {x: 1, y: 2 };
// const objB = {x: 0, q: 3 };
// const objC = {
//     ...objA,
//     x: 10,
//     ...objB,
//     y: 20,
// }


// console.log(objC);





// **************дуже гарний приклад, розібрати

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };





// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],



//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const obj = { id: amount, amount, type };
//     return obj;
//   },





//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },





//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if(this.balance < amount) {
//       console.log("Недостатньок коштів");
//       return;
//     }

//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },





//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },





//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     // const this = account
//     for(const item of this.transactions) {
//       if(item.id === id) {
//         return item;
//       }
//     }
//     return "Not found";
//   },





//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for(const item of this.transactions) {
//       if(item.type === type) {
//         sum += item.amount;
//       }
//     }

//     return sum;
//   },
// };

  
// account.deposit(200);
// account.deposit(400);

// account.withdraw(1000);

// console.log(account.getTransactionDetails(200))

// console.log(account.getBalance());
// // console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// // console.log(account);










// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.score + student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]


// function foo(a, b)  {
//     return a + b;
// }
// console.log(foo);

// const a = foo
// console.log(a(2, 3));

//  callback function

// function fnA(num) {
//     console.log("fnA", num * 2);
    
// }

// function foo(a, b, callback){
//     console.log(callback);
//     callback(2);
//    return a + b; 
   
   
   
// }

// console.log(foo(1, 2, fnA));




//  

// function calc1(a, b, callback) {
//     console.log("hello");
//     console.log("lalal");
//     const result = callback(a, b);
//     console.log(result);
    
    
    
// }
// // function calc2(a, b) {
// //     console.log("hello");
// //     console.log("lalal");
// //     const result = a - b;
// //     console.log(result);
    
    
    
// // }
// calc1(10, 2, function(x, y) {
//     return x + y;
// })

// calc1(5, 3, function(x, y) {
//     return x - y;
// })



// function each(array, callback) {
// const newArr = [];
// for(const num of array) {
//    newArr.push(callback(num))
    
// }
// return newArr
// }
// console.log(each([64, 49, 36, 87, 16], function(value) {
//     return value * 2;
// }));
// console.log(each([64, 49, 36, 87, 16], function(value) {
//     return value - 10;
// }));

// console.log(each([64, 49, 36, 87, 16], function(value) {
//     return Math.sqrt(value);
// }));



// Стрілочні функції

// function add(a, b) {
//     console.log(a, b);
    
// }


// const addArrow = (a, b) => {
//     return a + b;
// }
// add(1, 2)
// console.log(addArrow(10, 20));



// const calc = (a, b, callback) => {
//     const result = callback(a, b);
//     console.log(result);
    
// }
// calc(2, 5, (x, y ) => {
//     return x + y;
// })


// calc(19, 3, (x, y) => 
//    x - y 
// );



//  метод forEach


// const numbers = [5, 15, 45, 50];
// // numbers.forEach(function(hk) {
// // console.log(hk);

// // })

// let sum = 0;
// numbers.forEach((num) => {
//     sum += num;
// })
// console.log(sum);


// метод map();


// const allCars = [
//     {make: "Honda", model: "CR-V", amount: 14, price: 24045},
//     {make: "Honda", model: "Accord", amount: 10, price: 20045},
//     {make: "Toyota", model: "LC", amount: 4, price: 28045},
//     {make: "Toyota", model: "Cprolla", amount: 25, price: 14045},
//     {make: "MB", model: "G", amount: 1, price: 244045},
//     {make: "Toyota", model: "CR-o", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-b", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-q", amount: 14, price: 24045},
// ]

// // const getModels = (cars) => {
// //     const arr = [];
// //     cars.forEach(item => {
// //         arr.push(item.model);
        
// //     })
// //     return arr;
// // }
// // console.log(
// const getModels = (cars) => {
//     const res = cars.map(item => 
//       item.model
        
//     );
//     console.log(res);
    

// }
// getModels(allCars)



// *****************************


// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(item => {
//         return {
//             ...item,
//             price: item.price * (1 - discount),
//         }
//     })

// }
// console.table(makeCarsWithDiscount(allCars, 0.2));






// *********************

// const players = [
//     {id: "Player-1", name: "Mango", timePleyed: 310, points: 154, online: true},
//     {id: "Player-2", name: "Ma", timePleyed: 910, points: 540, online: true},
//     {id: "Player-3", name: "ngo", timePleyed: 210, points: 548, online: true},
//     {id: "Player-4", name: "Mago", timePleyed: 30, points: 543, online: true},
//     {id: "Player-5", name: "Mno", timePleyed: 350, points: 541, online: true},
// ]

// const playerId = "Player-3";
// const update = (arr, id) => {
// return arr.map((item) => {
//     if(item.id === id) {
//         return {...item,
//             timePleyed: item.timePleyed + 100
//         }
//     }
//     return item;
// })
// }
// console.table(update(players, playerId));




// const getUsersWithEyeColor = (users, color) => {return users.filter(user => user.eyeColor === color)};

// console.log(
//  getUsersWithEyeColor(
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ] , "brown")
// )



// ********** lesson 08.06


// const numbers = [5, 10, 15, 20, 25];
// const liltNum = numbers.filter((number) =>{
//     return number < 20;
    
// })
// console.log(liltNum);




// **************



// const allCars = [
//     {make: "Honda", model: "CR-V", amount: 14, price: 24045},
//     {make: "Honda", model: "Accord", amount: 10, price: 20045},
//     {make: "Toyota", model: "LC", amount: 4, price: 28045},
//     {make: "Toyota", model: "Cprolla", amount: 25, price: 14045},
//     {make: "MB", model: "G", amount: 1, price: 244045},
//     {make: "Toyota", model: "CR-o", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-b", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-q", amount: 14, price: 24045},
// ];

// // const filterByPrice = (cars, threshold) => {
// // return cars.filter((item) => { return item.price < threshold && item.make === "Toyota"} )
// // }

// // console.table(filterByPrice( allCars, 25000))




// const getCarWithMake = (cars, make) => {
// return cars.filter((item) => {
//     return item.make === make;
// })
// }

// console.table(getCarWithMake(allCars, "Toyota"));



//  ********** метод find

// const numbers = [5, 10, 15, 20, 25];
// const num = numbers.find((item) => { 
//     return item > 100;
    
    
// })
// console.log(num);



// const allCars = [
//     {make: "Honda", model: "CR-V", amount: 14, price: 24045},
//     {make: "Honda", model: "Accord", amount: 10, price: 20045},
//     {make: "Toyota", model: "LC", amount: 4, price: 28045},
//     {make: "Toyota", model: "Cprolla", amount: 25, price: 14045},
//     {make: "MB", model: "G", amount: 1, price: 244045},
//     {make: "Toyota", model: "CR-o", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-b", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-q", amount: 14, price: 24045},
// ];


// шукаємо авто за моделлю


// const getByModel = (arr, model) => {
//     return arr.find(item => item.model === model)
// }
// console.log(getByModel(allCars, "Cprolla"));



//  пощук авто за мaркою методом find



// const getByMake = (array, make) => {
//     return array.find(item => item.make === make)
// }

// console.log(getByMake(allCars, "Toyota"));


// метод evere some


//  const players = [
//     {id: "Player-1", name: "Mango", timePleyed: 310, points: 154, online: true},
//     {id: "Player-2", name: "Ma", timePleyed: 910, points: 540, online: true},
//     {id: "Player-3", name: "ngo", timePleyed: 210, points: 548, online: true},
//     {id: "Player-4", name: "Mago", timePleyed: 130, points: 543, online: false},
//     {id: "Player-5", name: "Mno", timePleyed: 350, points: 541, online: true},
// ]


// // const isAllOnline = players.every((item) => {return item.timePleyed > 100});
// // console.log(isAllOnline);


// // метод some



// const isSomeOnline = players.some((item) => item.name === "Mango")
// console.log(isSomeOnline);

//  відео 2й урок 1,18 


// метод reduce


// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, item) => {
//     return acc + item;
    
    

// }, 3)
// console.log(total);



// **** задача

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const values = Object.values(salary);
// const total = values.reduce((acc, item) => {
//     return acc + item;
// })
// console.log(total);


// ************ task 2

//  const players = [
//     {id: "Player-1", name: "Mango", timePleyed: 310, points: 154, online: true},
//     {id: "Player-2", name: "Ma", timePleyed: 910, points: 540, online: true},
//     {id: "Player-3", name: "ngo", timePleyed: 210, points: 548, online: true},
//     {id: "Player-4", name: "Mago", timePleyed: 130, points: 543, online: false},
//     {id: "Player-5", name: "Mno", timePleyed: 350, points: 541, online: true},
// ];


// const total = players.reduce((acc, item) => {
//     return acc + item.timePleyed;



    
// }, 0)
// console.log(total);



// const cart = [
//     {label: "Aples", price: 100, quantity: 2},
//     {label: "Grapes", price: 50, quantity: 9},
//     {label: "lemions", price: 10, quantity: 4},
// ]
//  const total = cart.reduce(((acc, item) => acc + item.price * item.quantity), 0)
//  console.log(total);
 



// **** метод toSorted()


// const numbers = [1, 2, 3, 4, 9];
// const res = numbers.toSorted()
// console.log(res);


// const arr = ["a", "B", "A", "b"];
// const res = arr.toSorted((a, b) => a.localeCompare(b));
// console.log(res);


// const numbers = [8, 1, 12, 2, 6];
// const res = numbers.toSorted((a, b) => a - b)
// console.log(res);




//  const players = [
//     {id: "Player-1", name: "Mango", timePleyed: 310, points: 154, online: true},
//     {id: "Player-2", name: "Ma", timePleyed: 910, points: 540, online: true},
//     {id: "Player-3", name: "ngo", timePleyed: 210, points: 548, online: true},
//     {id: "Player-4", name: "Mago", timePleyed: 130, points: 543, online: false},
//     {id: "Player-5", name: "Mno", timePleyed: 350, points: 541, online: true},
// ];


// //  за ігровиим часом

// const sorted = players.toSorted((a, b) => b.timePleyed - a.timePleyed);
// console.table(sorted);



// ******* ланцюжки методів


// const numbers = [1, 5, 3, 4, 2];

// // const arr1 = numbers.filter((num) => num > 2);
// // const arr2 = arr1.map((num) => num * 3)
// // const arr3 = arr2.toSorted((a, b) => a - b)

// // console.log(arr3);

// const res = numbers

// .filter((num) => num > 2)
// .map((num) => num * 3)
// .toSorted((a, b) => a -b );
// console.log(res);


//  const allCars = [
//     {make: "Honda", model: "CR-V", amount: 14, price: 24045},
//     {make: "Honda", model: "Accord", amount: 10, price: 20045},
//     {make: "Toyota", model: "LC", amount: 4, price: 28045},
//     {make: "Toyota", model: "Cprolla", amount: 25, price: 14045},
//     {make: "MB", model: "G", amount: 1, price: 244045},
//     {make: "Toyota", model: "CR-o", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-b", amount: 14, price: 24045},
//     {make: "Toyota", model: "CR-q", amount: 14, price: 24045},
// ];

// const getModel




// lesson 10.06.25 


// Контекст виконання функції
// "use strict"
// function foo() {
//     console.log(this);
    
    
// }


// foo();

// * контекст методу об*єкта

// const user = {
//     userName: "Alice",
//     // showThis() {
//     //     console.log(this);
        
//     // }
//     showThis: () => {
//         console.log(this);
        
//     }
// }
// user.showThis();


//  контекст методу об*єкту, але оголошена як зовнішня ф-ція

// function showThis() {
//    console.log("this", this);
    
// }
// const obj = {
//     userName: "Alice"
// }
// obj.showUserThis = showThis;
// // console.log(obj.showUserThis);
// obj.showUserThis()



// виклик без контексту але оголошений як метод об*єкту 


// const user = {
//     userName: "Petya",
//     showThis() {
//         console.log("this", this);
//         console.log("userName", this.userName);
        
        
//     }

    
// }
// // user.showThis()

// const foo = user.showThis;
// // console.log(foo);
// foo();


// контекст у коллбек-функціях


// const user = {
//   userName: "Petya",
//   showThis() {
//     console.log("this", this);
    
//   }  
// }
// function foo(callback) {
//     console.log(callback);
//     callback()
    
// }
// foo(user.showThis)

// function foo() {
//     console.log(this.lalala);
    
// }
// foo()


// const chopShop = {
//     stones: [
//         {name: "Emerald", price: 1300, quantiy: 4},
//         {name: "Diamond", price: 2700, quantiy: 3},
//         {name: "Sapphire", price: 1400, quantiy: 7},
//         {name: "Ruby", price: 800, quantiy: 2},

//     ],
//     calcTotalPrice(stonesName) {
//         const stone = this.stones.find((item) => item.name === stonesName);
//         if(!stone) { 
//             return `${stonesName} not found`;

//         }
//         return stone.price * stone.quantiy;
//         console.log(stone);
        

//     }
// }
// console.log(chopShop.calcTotalPrice("Sapphire"));




//  Контекст виконання функції

// ** метод call
// ** метод apply
// ** метод bind

// function showThis(a, b, arr) {
//     console.log(a, b, arr);
    
//     console.log("this", this);
    
// }
// const obj = {
//     a: 5,
//     b: 10
// }
// // showThis.call(obj)
// showThis.apply(obj, ["Petya", 3, [1, 2, 3]])

// function changeColor(newColor) {
//     console.log("this", this);
//     this.color = newColor;
    
// }

// const hat = {
//    color: "black" 
// }

// const sweater = {
//     color: "green"
// }

// changeColor.call(hat, "red");
// console.log(hat);
// changeColor.apply(sweater, ["blue", 5])
// console.log(sweater);


// const changeHatColor = changeColor.bind(hat);

// changeHatColor("yellow");
// console.log(hat);






//  задачка для bind()


// const counter = {
//     value: 0,
//     increment(num) {
//         console.log("increment", this);
//         this.value += 10;
//         },
//         decrement(num) {
//             console.log("decrement", this);
//             this.value -+ 10;
            
//         }
// }

// function foo(number, callback) {
//     // console.log(callback);
    
//     callback(number);

// }
// foo(10, counter.increment.bind(counter))
// console.log(counter);
// foo(3, counter.decrement.bind(counter))
// console.log(counter);



//  прототипи об*єктів

// const animal = {
//     legs: 4,

// }
// const dog = Object.create(animal);
// dog.name = "Patron";
// console.log(dog);
// console.log(dog.hasOwnProperty("name"));

// for(const key in dog) {
//     if(dog.hasOwnProperty(key)) {
//         console.log(Object.keys(dog));
        
//     }
    
    
    
// }



// const objC = { c: "objC"};
// const objB = Object.create(objC);
// objB.b = "objB";
// const objA = Object.create(objB);
// objA.a = "objA";

// console.log(objA);
// console.log(objA.c);
// console.log(objA.hasOwnProperty("c"));




// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.brand} has speed ${this.speed}`);
        
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Auto stop");
//             return;
//         }
//         this.speed -= 10;
//         console.log(` Stoped`);
        
//     }
// }
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease()
// cruiseControl.decrease()


// console.log(cruiseControl);

// const Speed = 60;

// const bmw = {
//     brand: "Bmw",
//     speed: 40
// }

// const audi = {
//     brand: "Audi",
//     speed: 90
// }
// function speedSensor(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//         return `Авто ${this.brand} рухається безпечно`
//     }
//     return ` ${this.brand} перевищує швидкість`
// }
// console.log(speedSensor.call(bmw, Speed));
// console.log(speedSensor.call(audi, Speed));



// lesson 12.06

// class Car {

// static qty = 0;
// static increment() {
//     Car.qty +=1
// }

//     #price;
//    constructor(obj) {
//     this.brand = obj.brand;
//     this.model = obj.model;
//     this.#price = obj.price;
//     Car.increment();

//    }

//    getPrice() {
//     return this.#price;
//    }
//    changePrice(newPrice) {
//     this.#price = newPrice;
//    }
//    get price() {
//     return this.#price
//    }
//    set price(newPrice) {
//    if(this.#checkType(newPrice, "number")) {
//     this.#price += newPrice;
//     return;
//    }
//    console.log("OOpps");
   
    
   

//    }
//    #checkType(data, type) {
//     if(typeof data !== type) {
//         return false;
//     }
//     return true;
//    }

// }
//  const bmw = new Car({brand:"BMW", model: "X5", price: 70000});
//  const audi = new Car({brand:"Audi", model: "Q5", price: 50000});
//   const audi2 = new Car({brand:"Audi", model: "Q5", price: 50000});

// bmw.price = "5000";
// console.log(bmw.price);




 
// console.log(Car.qty);
// console.log(audi);




// ****** наслідування класів


// class Hero {
//     constructor(obj) {
//         this.name = obj.name;
//         this.xp = obj.xp;
//     }
//     gainXp(amount) {
//         console.log(`${this.name} received ${amount} xp`);
//         this.xp += amount;
        
//     }
// }


// class Warrior extends Hero {

//     constructor(obj) {
//         super({
//             name: obj.name,
//             xp: obj.xp
//         })
//         this.weapon = obj.weapon;
//     }

//     attack() {
//         console.log(`${this.name} attacks with ${this.weapon}`);
        
//     }
// }


// class Mage extends Hero {
//     constructor(obj) {
//         super({
//             name: obj.name,
//             xp: obj.xp,
//         })
//         this.spells = obj.spells;

//     }
//     cast() {
//         console.log(`${this.name} is casteing a spell`);
        
//     }
// }
// const arthas = new Warrior({name: "Arthas", xp: 1000, weapon: "swor"});

// const chadgar = new Mage({name: "Khadgar", xp: 500, spells: ["fireball"]});
// chadgar.gainXp(200);
// chadgar.cast()

// console.log(
//     chadgar
// );




// ***** task 1 

// class Blogger {
//     constructor(obj) {
//       this.email = obj.email;
//       this.age = obj.age;
//       this.numberOfPosts = obj.numberOfPosts;
//       this.topics = obj.topics;
//     }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const alice = new Blogger({
//     email: "alice@gmail.com",
// age: 25,
// numberOfPosts: 20,
// topics: ["sport", "gaming"]
// });
// alice.updatePostCount(10);

// console.log(alice.getInfo());
 
// console.log(alice);

// const petya = new Blogger({
// email: "pet@gmail.com",
// age: 15,
// numberOfPosts: 150,
// topics: ["sp", "gami"]
// })


// console.log(petya.getInfo());

// console.log(petya);











// ****** task2 


// class User {
//     #login;
//     #email;

//     constructor(myLogin, myEmail) {
//         this.#login = myLogin;
//         this.#email = myEmail;
//     }
//     get login() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         this.#login = newLogin
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const alice = new User("Alice", "alice@gmail.com")
// alice.email = "jrnklsd";
// console.log(alice.email);
// alice.login = "ekrlcwefj112134"
// console.log(alice.login);

// console.log(alice);




// lesson 18.06


// DOM представлення торінки у вигляді об*єкта

// методи для отримання доступу до елемента

// const magicBtn = document.querySelector("#magic-btn");
// // доступ за id

// const navEl = document.querySelector(".site-nav");
// //  доступ за назвою класу

// const navList = document.querySelector("ul")
// // за назвою тега( рідшк використовується)



// const navLinksEl = document.querySelectorAll(".site-nav_link");





//  

// const navEl = document.querySelector(".site-nav");
// console.log(navEl.firstElementChild);
// console.log(navEl.lastElementChild);
// console.log(navEl.children);


// const portfolioEl = navEl.children[1];
// console.log(portfolioEl.nextElementSibling);
// console.log(portfolioEl.previousElementSibling);
// console.log(portfolioEl.parentNode);



// *************


// const imgEl = document.querySelector(".hero_image");
// console.log(imgEl.src);
// imgEl.src = "нове посилання"

// imgEl.alt = "new cat";


// const heroTitle = document.querySelector(".hero_title")
// console.log(heroTitle.textContent);

// heroTitle.textContent = "New text";


// ********** Атрибути 
// - get(імя атрибута)
// -set(name atributes)
// - removeEventListener(nameAtributes)
// -has(nameAtributes)



// console.log(imgEl.getAttribute("src"));


// imgEl.setAttribute("width", 480)

// imgEl.removeAttribute("width");


// console.log(imgEl.hasAttribute("href"));




// *****data-атрибути


// const actions = document.querySelectorAll(".actions button")
// actions[1].dataset.action = "lalala";
// actions[1].dataset.color = "red"
// console.log(actions[1].dataset.action );
// delete actions[1].dataset.color;


// **** є список, працюємо з ним


// const currentPageUrl = '/contact';
// const linrEl = document.querySelector('.site-nav_link[href="/contact"]');
// linkEl.classList.add("site-nav_link--current");

// linkEl.classList.toggle("site-nav__link");

// linkEl.classList.replace("old-class", "new-class")


// ****** 1.36 відео Створення і додавання елементів


// const titleEl = document.createElement("h1");
// titleEl.textContent = "My title";
// titleEl.classList.add("page-title");


// document.body.append(titleEl)

// const imgEL = document.createElement("img");
// imgEL.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITbHeGlyfhs8BPis4DZSXLelpXLHRIBE31g&s";
// imgEL.alt = "Audi";
// console.log(imgEL);
// document.body.append(imgEL, titleEl)


// const navItemEl = document.createElement("li");
// navItemEl.classList.add("site-nav_item");
// const navLinkEl = document.createElement("a");
// navLinkEl.href = "/profile";
// navLinkEl.classList.add("site-nav_link");
// navLinkEl.textContent = "lalala";
// navItemEl.append(navLinkEl);
// console.log(navItemEl);


// const siteNav = document.querySelector(".site-nav");
// siteNav.append(navItemEl)



// const options = [
//     {label: 'червоний', color: '#F44336'},
//     {label: 'зелений', color: '#4CAF50'},
// ];
// const colorPickerContainerEl = document.querySelector('.color-picker__option')

// const elements = options.map((option) => {
//     const btn = document.createElement("button");
//     btn.classList.add("color-picker__option");
//     btn.textContent = option.label;
//     btn.style.backgroundColor = option.color;
//     return btn
// });
// console.log(elements);

// colorPickerContainerEl.append(...elements);



// // Пишемо функцію для створення розмітки колорпікера

// const createMarkup = (arr) => {
//     return arr.map((option) => {
//     const btn = document.createElement("button");
//     btn.classList.add("color-picker__option");
//     btn.textContent = option.label;
//     btn.style.backgroundColor = option.color;
//     return btn
// });
// }

// colorPickerContainerEl.append(...createMarkup(arr))




// ******** Властивість innerHTML


// const titleEl = document.querySelector(".title");
// // console.log(titleEl.innerHTML);
// titleEl.innerHTML = '<a href="">Title </a>'




// ***** Урок за 24 червня

// ***** спливання подій





// ***** деструктуризація


// const user = {
//     userName: "Alice",
//     age: 30,
//     city: 100
// }
// const city = "Poltava";
// const {userName, ...rest} = user;

// console.log(rest);



//  глибока деструктуризація

// const user = {
//     userName: "Alice",
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// const {skills: {html, css, js}} = user;
// console.log(css);



//  деструктуризація масивів


// const arr = [1, 2, 3, 5];

// const [first, , , , , , , second = "okokok"] = arr;
// console.log(first);
// console.log(second);





//  деструктуризацыя в параметрах функції

// const user = {
//     name: "Petya",
//     skills: {
//         html: true,
//         css: true,
//         js: true
//     }
// }

// без деструктуризації

// function getUserInfo(obj) {
// console.log(`${obj.name} ${obj.skills.html} ${obj.skills.css} ${obj.skills.js}`);

// }
// getUserInfo(user);

//  з деструктуризацією

// function getUserInfo({name, skills: {html, css, js}}) {
// console.log(`${name} ${html} ${css} ${js}`);
// }
// getUserInfo(user);




// function foo({username}) {
//     console.log(username);
    
// }
// foo()

// function foo({username} = {}) {
//     console.log(username);
    
// }
// foo();


//  деструктуризація об*єкта в циклі

// const users = [{name: "Kate"}, {name: "Alice"}, {name: "Petya"}];

// *** без деструктеризіції

// const names = [];
// for(const user of users) {
 
//     names.push(user.name)
// }
// console.log(names);


// **** з деструктеризацією


// const names = [];
// for(const user of users) {
//     const {name} = user;
//     names.push(name)
// }
// console.log(names);


// const names = [];
// for(const {name} of users) {
//     names.push(name)

// }
// console.log(names);



// const names = users.map(({name}) => name);
// console.log(names);



// **** task * Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username
 
// const user = {
//     id: 1,
//     username: "Harry_potter",
//     profile:
//      {
//         name: "Harry",
//         surname: "Potter",
//         age: 25,
//     },
// };
// const {username, profile: {name, surname}} = user;


// console.log(`ім*я ${name}`);
// console.log(`прізвище ${surname}`);
// console.log(`нік ${username}`);




// ***  /**
//  * Допиши функцію таким чином щоб кожна властивість
//  * об'єкта product була незалежним параметром
//  */

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

// function getProductInfo({ 
//     name, price, category,
//     details: { brand, color, weight }
//  }) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log("Деталі:");
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`); 
// }



// getProductInfo(product);



//   **** /**
//  * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
//  * так щоб вона приймала об'єкт з параметрами будинку,
//  * включаючи довжини сторін будинку.
//  * Функція повинна розрахувати та повернути периметр будинку.
//  */

// function calculateHousePerimeter({ sideC, sideD, sideB, sideA }) {
//     const perimeter = sideA + sideB + sideC + sideD;
//     return perimeter;
//   }


//   const house = {
//     sideA: 10,
//     sideB: 15,
//     sideC: 10,
//     sideD: 15
// }


// const perimeter = calculateHousePerimeter(house);
// console.log(`Периметр будинку: ${perimeter}`);