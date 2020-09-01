/////////////////////////////////////////////////////
///////Section 3 Array Methods with Callbacks///////
///////////////////////////////////////////////////

//Two arrays to work with:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//The first question is for the numbers array. The second question is for the words array.

//Every
//1. Determine if every number is greater than or equal to 0
const greaterOrEqualToZero = (currentValue) => currentValue >= 0;
console.log(nums.every(greaterOrEqualToZero)); //Answer: true

//2. determine if every word shorter than 8 characters
const shorterThanEightCharacters = currentValue => currentValue.length < 8;
console.log(panagram.every(shorterThanEightCharacters)); //Answer: true 

//Filter
//1. filter the array for numbers less than 4
const numsLessThanFour = nums.filter(num => num < 4);
console.log(numsLessThanFour); //Answer: 1, 2, 3, 0

//2. filter words that have an even length
const evenLength = panagram.filter(word => word.length % 2 === 0);
console.log(evenLength);
//Answer: Over & Lazy

//Find
//1. Find the first value divisible by 5
const found1 = nums.find(num => num % 5 === 0);
console.log(found1); //Answer: 5

//2. find the first word that is longer than 5 characters
const found2 = panagram.find(word => word.length > 5);
console.log(found2); //Answer: Undefined

//Find Index
//1. find the index of the first number that is divisible by 3
const index = nums.findIndex(rank => rank % 3 === 0);
console.log(index); //Answer should be 2

//2. find the index of the first word that is less than 2 characters long
const index2 = panagram.findIndex(word => word.length < 2);
console.log(index2); //Answer should be -1

//For Each
//1. console.log each value of the nums array multiplied by 3
const timesThree = [];
nums.forEach(num => timesThree.push(num * 3));
console.log(timesThree) //Answer: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 0]

//2. console.log each word with an exclamation point at the end of it
const exclamationMark = [];
panagram.forEach(word => exclamationMark.push(word + '!'));
console.log(exclamationMark); //Answer: ['The!', 'quick!','brown!','fox!','jumps!','over!','the!','lazy!', 'dog!']

