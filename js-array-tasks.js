// 1. Declare an array
// * Declare an array with 5 elements containing fruits
// * console log the 3rd index element
// * change the value of the 2nd index element to jambura
// * console log the final array

const fruits = ["mango", "grape", "blueberry", "guava", "jackfruit"];

console.log(fruits[2]);
fruits[1] = "Jambura";
console.log(fruits);

// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const destination = ["coxs bazar", "himchori", "niladri"];
destination.push("st martin island");
destination.push("kuakata", "inani beach");
console.log(destination);

// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const books = ["Pride and Prejudice", "Don Quixote", "Moby-dick", "Jane Eyre"];

console.log(books.includes("Pride and Prejudice"));

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const name = "redowan";
const students = ["rafi", "rifat", "adnan", "sami", "redowan"];

console.log(Array.isArray(students));

// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const student1 = ["rafi", "rifat", "adnan", "sami", "redowan"];
const student2 = ["fsdf", "asdff", "fasdfsf", "sdfasdf"];

const student3 = student1.concat(student2);
const student4 = student3.join("||");
console.log(student4);

const student5 = student3.slice(1, 5);
console.log(student5);
