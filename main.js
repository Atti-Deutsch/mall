// THIS IS CODE OF EDUCATIONAL PURPOSE AND NOT MEANT TO RUN

// THE FUNDAMENTALS OF JAVASCRIPT

// LOGGING OUTPUT
alert('Hello World');   // Do not use for debugging.
console.log('Hello World');
console.error('Thisis an error');
console.warn('This is a warning');


// VARIABLES - var, let, const (assigning)
let age = 46;
// Re-assigne variable with let, const can not be ra-assigned
age = 30;


// DATA TYPES - string, Number, Boolean, null, undefiend (also symbol and BigInt)
const name = 'Attila';  // string, use either double qoutes or single qoutes don´t mix.
const age = 46; // number
const rating = 3.5; // number with decimal, JS doesn´t use integer, float etc, all numbers are of the type Number
const isAlive = true;  // Boolean either true or false
const x = null;   // No value added by us. ex waiting for user input.
const y = undefined // A variable not been assigne a value.

// Chesk DATA TYPE with typeof
console.log(typeof 46);  // Output Data type Number


// STRINGS

// CONCATENATION 
console.log('My name is ' + name + ' and I am ' + age);  
// TEMPLATE LITERAL
console.log(`My name is ${name} and I am ${age}`);  //Template literals always backsticks

// STRINGS METHODS & PROPERTIES
const b = 'Watermelon';
let fruit; 
// GET STRING LENGHT
fruit = b.length;
// CHANGE CASE
fruit = b.toUpperCase();
fruit = b.toLowerCase();
// GET SUB STRING
fruit = b.substring(0, 5);
// SPLIT INTO ARRAY
fruit = b.split('');


// ARRAYS
const numbers = [1, 2, 3, 4, 5];
const fruit = ['oranges', 'lemons', 'grapes', 'melons'];
console.log(numbers, fruit);

// GET ONE VALUE OUT OF ARRAY
console.log(fruit[1]);  // this will print lemon, arrays start at 0. fruit array = [0, 1, 2, 3]

// ADD VALUE TO ARRAY
fruits[4] = 'ananas';

// ADD VALUE USING PUSH()
fruits.push('kiwis');   //This will add new fruit at the end of array

// ADD VALUE TO BEGINNING OF AN ARRAY
fruits.unshift('mangos');

// REMOVE LAST VALUE FROM ARRAY
fruits.pop();

// CHECK IF ARRAY IS AN ARRAY
console.log(Array.isArray(fruit));  // Gives a boolean true if fruit is an array.

// GET INDEX
console.log(fruit.indexOf('grapes'));  // Grapes have index of 2


// OBJECT LITERALS -comma separated list of name-value pairs wrapped in curley braces.
const person = {
    firstName = 'Mark',
    lastName = 'Hart',
    age = 51,
    hobbies: ['music', 'sports', 'yoga'],
    adress: {
        street: 'Klessingstraße 3',
        city: 'München',
        country: 'Germany'
    }
}

// GET A SINGLE VALUE 
console.log(person.firstName); // This will give the value Mark

// GET ARRAY VALUE
console.log(person.hobbies[1]);  // This will give the value sports

// GET EMBEDDED OBJECT - properties of nested objects.
console.log(person.adress.city); // this will give the valu München / person main object / adress sub-object of person / properties of adress like "city"

// ADD PROPERTY
person.email = 'bayerFan@gmail.com';


// ARRAY OF OBJECTS - multiple objects
const todoList = [
    {
        id: 1,
        text: 'Feed the dog',
        isComplete: false,
    },
    {
        id: 2,
        text: 'Walk the dog',
        isComplete: true,
    },
    {
        id: 3,
        text: 'Purchase dogfood',
        isComplete: false,
    }
];

// GET SPECIFIC OBJECT VALUE
console.log(todoList[2].text);  // This will give you value "Purchase dogfood" - do remember index starting at 0 in arrays

// FORMAT AS JSON - 
console.log(JSON.stringify(todoList));  // Always JSON.stringify format before JS Object


// LOOPS

// FOR - LOOP
for(let i = 0; i <= 10; i++) { 
    console.log(`For loop Number ${i}`);
}

// WHILE - LOOP
let i = 0;
while(i <= 10) {
    console.log(`While loop Number: ${i}`);
    i++;
}

        // Example of HOW TO LOOP THROUGH todoList array
        for(let i = 0; i < todoList.length; i++) { 
            console.log(` todo ${i + 1}: ${todoList[i].text}`);
        }

        // Another example with For...of Loop
        for(let todo of todoList) {
            console.log(todo.text);
        }


// HIGH ORDER ARRAY METHODS (show prototype)

// LOOPS THROUGH ARRAY WITH - forEach() method
todoList.forEach(function(todoList, i, myTodos) {  // Callback functions with 3 arguments, current element, index of current element, the array map was called upon
    console.log(`${i + 1}: ${todoList.text}`);
    console.log(myTodos);
});

// map() - LOOP THROUGH AND CREATE NEW ARRAY
const todoTextArray = todoList.map(function(todo) {
    return todo.text;
});
console.log(todoTextArray);

// filter() - RETURNS ARRAY BASED ON CONDITION
const todo1 = todoList.filter(function(todo) {
     // Return only todo where id is 1
    return todo.id === 1; 
});
   

// CONDITIONALS

// simple If/Else Statement
const x = 5;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}


// SWITCH - alternative for if-statements
let color = 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
    break;
    case 'blue':
        console.log('color is blue');
    break;
    default: 
        console.log('color is nore red or blue');
}

// TERNARY OPERATOR - alternative for if-else statements
const c = color === 'red' ? 10: 20;


// FUNCTIONS

function greet(greeting = 'Hello', name) {
    if(!name) {
        // console.log(greeting);
        return greeting;
    } else {
        // console.log(`${greeting} ${name}`);
        return `${greeting} ${name}`;
    }
}

// ARROW FUNCTIONS

const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));