// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ["red", "blue", "green", "yellow", "orange"];
let colors_rev = [];
for (let i = 0; i < colors.length; i++) {
  //   console.log(i);
  //   console.log(colors[i]);
  colors_rev.unshift(colors[i]);
}
// console.log(colors_rev);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Output:
// [12, 98, 76, 46]

let numbers = [12, 98, 5, 41, 23, 78, 46];
let number_even = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    // console.log(numbers[i]);
    number_even.unshift(numbers[i]);
  }
}
// console.log(number_even);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Output:
// 'TomTimTinTik'

var names = ["Tom", "Tim", "Tin", "Tik"];
let result = "";
for (const name of names) {
  console.log(name);
  result = result + " " + name;
}

console.log(names.join(" "));

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// Output:
// 'person working hard a am I'

const statement = "I am a hard working person";
let statement_split = statement.split(" ");
let statement_rev = statement_split.reverse();
console.log(statement_rev.join(" "));
