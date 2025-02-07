// **************************************** //
// MODULE 01

// TASK 01

var orangePrice = 300;
var applePrice = 400;
var moneyGiven = 1000;
var total = orangePrice + applePrice;

var returnMoney = moneyGiven - total;

// console.log(returnMoney);

// TASK 02

var mathematics = 75.2545345;
var Biology = 60.4345348;
var physics = 94.834545434;
var chemistry = 84.8890235444;
var bengal = 43.059345;

var average = mathematics + Biology + physics + chemistry + bengal / 5;

var n = average.toFixed(2);

// console.log(n);

// TASK 3

var givenNumber = 119;
var x = 119 % 5;

// console.log(x);

//**********************************/
// MODULE 02

/***

Free Drinks  Task 4
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burger = 600;
let coke = 30;

if (burger == 500) {
  coke = 0;
} else {
  coke = 30;
}

// console.log(coke);

burger >= 500 ? (coke = 0) : (coke = 30);
// console.log(coke);

/*** 

bmi Calculator and Health Category  TASK 05

Create a JavaScript program that calculates the Body Mass Index (bmi) and assigns a health category based on the bmi value. Use nested if-else statements to determine the health category.

    - Calculate bmi using the formula: bmi = weight (kg) / (height (m))^2
    - bmi < 18.5, you are underweight.
    - bmi >= 18.5 and bmi <=24.9, you are normal.
    - bmi >=25 and bmi <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const height = 1.76;
const weight = 50;

let bmi = (weight / height) ^ 2;

if (bmi < 18.5) {
  console.log("under weight");
} else {
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("normal weight");
  } else {
    if (bmi >= 25 && bmi <= 29.9) {
      console.log("over weight");
    }
  }
}

// console.log(health);

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const grade = 89;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 0) {
  console.log("F");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const score = 30;

if (score >= 80) {
  console.log("go for a lunch");
} else if (score <= 80 && score >= 60) {
  console.log("better luck next time");
} else if (score <= 60 && score >= 40) {
  console.log("text unseen");
} else if (score < 40) {
  console.log("block friend");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 54;
let num2 = 49;

let num3 = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(num3);
