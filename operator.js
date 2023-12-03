// arithmetic operators

// Addition operator (+)

// If either value is a string, the addition operator uses the following rules:

// If both values are strings, it concatenates the second string to the first one.
// If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.

// let sum = 10 + '20';
// console.log(sum,"sum"); // 30

// let x = 10,
//     y = 20,
// z ="30"
// let result = x + y + z; //3030

// console.log(result);

// subtraction operator
// if a value is a string, a boolean, null, or undefined, the JavaScript engine will:

// First, convert the value to a number using the Number() function.
// Second, perform the subtraction.

// let result = 20 - 10;
// console.log(result); // 10

let resultSub= 30 - false;
// let resultSub = 30- "Hellow";// NaN
console.log(resultSub,"resultSub");

// Multiplication operator

// If either value is not a number, the JavaScript engine implicitly converts it 
// into a number using the Number() function and perform the multiplication

let  result = '10' * 20;
console.log(result);

// Divide operator (/)

// If either value is not a number, the JavaScript engine converts it into a number for division.
// let  result = '40' / undefined;
// console.log(result); // NaN


// Remainder Operator

// let num = 24;
// // let isOdd = num % 2;
// if(num % 2 === 0){
//     console.log("even Number")
// }
// else{
//     console.log("odd number");
// }

// assignment operators

// let result = 20;
//   result += 20;
//   result -= 10;
// result *=20;
// result /=10;

//  console.log(result,"result");

// Chaining JavaScript assignment operators
//  let a = 10, b = 20, c = 30;
//  b = c;
//  a=b;
//  console.log(a);


//  unary operator

// let x = 10;
// let y = +x;

// console.log(y); // 10
// the unary plus operator to a non-numeric value, it performs a number conversion using the Number()
// let s = '10';
// console.log(+s,"s"); // 10

// let f=true;
// console.log(+f);

// The unary minus operator is a single minus sign (-). If you apply the unary minus operator to a number,
//  it negates the number.

// let x = "30";
// let y = -x;

// console.log(y); // 10

// Increment / Decrement operators

// let age = 25;
// ++age;

// console.log(age); // 26

// let weight = 90;
// --weight;

// console.log(weight); // 89

// The postfix increment or decrement operator changes the value after the statement is evaluated

let weight = 90;
let newWeight = weight++ + 5;
let newWeight2 = weight++ + 5;

console.log(newWeight); 
console.log(newWeight2); 

// comparison operators
// A comparison operator returns a Boolean value indicating whether the comparison is true or not

let a = 30, 
    b = 20; 

// greater than
console.log(a > b);  //true

//less than
console.log((a<b));//false

// less than or equal to
let aa1=20 , bb1=20
console.log(aa1<=bb1); //true

//greater than equal to
let aa2=30 , bb2=40;
console.log(aa2>=bb2);//false

// double equal (==) and strict equal (===)
//  == : JavaScript converts the string into a number and performs the comparison.
// ===  : JavaScript doesn’t convert the string before comparison, therefore the result is false.



console.log("10" == 10); // true
console.log("10" === 10); // false

// console.log(a == 10); 


// Logical operator

// 1) The Logical NOT operator (!)
// if value is non-boolean first it will convert in boolean after that negates it

const a11= false;
console.log(!a11);

const a2= "Hellow";
console.log(!a2);

// Double-negation (!!)
// The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value.

const a3="hellow";
console.log(!!a3); 

// 2) The Logical AND operator (&&)
// The && operator carries the following:
// Evaluates values from left to right.
// For each value, convert it to a boolean. If the result is false, stops and returns the original value.
// If all values are truthy values, return the last value.
let a12='';
let b13=30;
let c14=20;
console.log( a12 && b13);
if(a12 && b13 && c14){
    console.log("AND Operator");
}
else{
    console.log("else condition");
}
// 3) The Logical OR operator (||)
// The || operator does the following:

// Evaluates values from left to right.
// For each value, converts it to a boolean value. If the result of the conversion is true, stops and returns the value.
// If all values have been evaluated to false, returns the last value.
let a1='';
let b1=null;
let c1=23;
console.log( a1 || b1 || c1 ,"&operator"); 




// JavaScript Logical Assignment Operators

// The Logical OR assignment operator

let title;
title ||= 'untitled';
console.log(title,"title")

// if(!title){
//     console.log( title="untitled");
// }
// else{
//     console.log("else condition");
// }

let person="Neelam";
if(person){
    console.log(person="smith")
}
else{
    console.log("And else condtion")
}

// The nullish coalescing assignment operator
let user = {
    username: 'Satoshi'
};

user.nickname ??= "anonymous"
console.log(user,"user");
