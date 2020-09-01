//Section 2 Combining Datatypes
//Combine objects, arrays, and functions
//touch combining_datatypes.js and do your work for this section in this new file

//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    'colors':['purple', 'blue', 'pink', 'orange', 'black']
 };
 console.log(crayonBox.colors[2]);


//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'

    }
}   
        console.log(bottle.cap.color);


//3.  Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [
        {items: 'shoes', price: 20},
        {items: 'shirt', price: 15},
        {itens: 'pants', price: 40},
]
        console.log(receipt[0]);


 //4.  Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [['Rex', 'Jose', 'Betty', 'Jon', 'Ellie']
];
        console.log(apartmentBuilding[0][2]);

// Combine objects, arrays, and functions more than one level deep

//1.  Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

 const knit = () => {

     const crafty = {

        item: 'scarf',
        size: '6ft'
     }
     
        console.log(crafty.item)
     }
     knit()

//2.  Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
  const crayonSelector = () => {
      const crayonBox = {  
          'colors':['purple', 'blue', 'pink', 'orange', 'black']
    };
    crayonSelector();
    console.log(crayonSelector([1]));

      }
  

//3.  Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
  const powerButton = function() {
           // options = function() {
                console.log("select a song");
            
      }; 
          
    powerButton();
      
// this isn't working as I thought it would. don't know what I am doing wrong. can only get it to work if I comment out options()
        



/* Model a Vending Machine Model a vending machine

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack*/

/*const vendingMachine = {
    snacks: [
        {name: 'Candy Bar', price: 1},
        {name: 'Bubble Gum', price: 1},
        {name: 'Pretzels', price: 1}
    ],
    vend: function vend() {
        vendingMachine.vend(snacks.price)
        return this.snacks.name
     
    }
*/
    
    const vendingMachine = {
        snacks: 
        [   {name: 'Candy Bar', price: 1},
            {name: 'Soda', price: 3},
            {name: 'Chips', price: 2},
        ],
        vend: function vend(obj, userInput){
            console.log('choose a tasty snack')
            if (userInput <= obj.snacks.length-1) {
                return obj.snacks[userInput]
            } else if(userInput === undefined || userInput > obj.snacks.length -1 ) {
                return "you didn't choose a snack"
            }
        }
    }
    console.log(vendingMachine.vend(vendingMachine, 0))

    

    function addNumbers (x,y) {
    num1 = (x);
    num2 = (y);
    return (num1+num2);
    }
     console.log(addNumbers(1,1))

     function subtractNumbers (x,y) {
        num1 =(x);
        num2 =(y);
        return (num1-num2);
     }
         console.log(subtractNumbers(5,4))
     
    function multiplyNumbers (x,y) {
        num1 =(x);
        num2 =(y);
        return (num1*num2);
    }
        console.log(multiplyNumbers(10,10))

    function divideNumbers (x,y) {
        num1 =(x);
        num2 =(y);
        return (num1/num2);
    }
        console.log(divideNumbers(25,5))

    function calcNumbers (x,y,z) {
        num1 =(x);
        num2 =(y);
        num3 =(z);
            return (num1+num2*num3);
    function operates () {
            return ("You've been calculated")
    } 
}
            console.log(calcNumbers(5,6,7)

     //can get to run by themselves but not together, reaching out for this to be an office hours lesson
     //put in Jose C's slack chat 
     //moving on to next item on homework    

        




//Function definition placement
//Clean up this code, so that it works and has function definitions in the correct place

const bar = () =>  {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
//Error reading
//What is meant by the error(s) this produces?

foo();
//foo was declared as a const then changed 
const foo() => {
    console.log('hi');
}
/*Section 3 Array Methods with Callbacks
A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.

But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

Two arrays to work with
*//*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
//The first question is for the numbers array. The second question is for the words array.

//You don't have to write an answer to the thought questions.

/*Every
Determine if every number is greater than or equal to 0
determine if every word shorter than 8 characters*/

/*Filter
filter the array for numbers less than 4
filter words that have an even length*/


/*Find
Find the first value divisible by 5
find the first word that is longer than 5 characters*/


/*Find Index
find the index of the first number that is divisible by 3
find the index of the first word that is less than 2 characters long*/

/*For Each
console.log each value of the nums array multiplied by 3
console.log each word with an exclamation point at the end of it*/

//Thought Questions

/*What happened to the original array?
Can you store the values from a forEach method in a new array?*/

/*Map
make a new array of each number multiplied by 100
make a new array of all the words in all uppercase*/


//Thought Questions

/*What happened to the original array?
Can you store the values from a map method in a new array?
*/

//Find out if some numbers are divisible by 7

//Find out if some words have the letter a in them
            
