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


