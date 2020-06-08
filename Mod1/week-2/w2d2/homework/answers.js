
/////////////////////
//Getting Started //
///////////////////
//1.  created homework folder inside w2d3

//2.  created javascript file insde homework folder nameed answers.js

//3.  keep organized - moving forward use a commented header for each section

//4.  TEST WORK! make sure code works node answers.js

//5.  Frustrated or stuck for too long, make a comment move on come back to it later

//6.  After each section (even if you are not fully done with it) add and commit work

//7.  When done with homework, push it to Github and make an issue on our repo

//Final note: I am not alone! Everyone is working on this as well Slack, Zoom, or  
//meet with IA(Jose C.) to discuss sticking points

///////////////////////
//Part I: HTML & CSS//
/////////////////////
//Watch Videos and  give ranking based on comfort with material

//HTML INTRO (tags, content, attributes, semantic HTML)
//  5 - I got this! I am ready to code
//HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)
//  5 - I got this! I am ready to code
//CSS Intro (including css files in HTML,elements)
//  5 - I got this! I am ready to code
//CSS Basics (colors, background, font properties)
//  5 - I got this! I am ready to code


///////////////////////////////
// Part II: JavaScript Reps //
/////////////////////////////

/////////////////
// Easy Going //
///////////////

for (i = 1; i <= 20; i++){
    console.log(i)
}
////////////////
// Get Even ///
//////////////

for (i = i = 0; i < 201; i+= 2 ){
    console.log(i)
}

////////////////
// Fizz Buzz //
//////////////
 
for(let i = 0; i < 101; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log('fizz buzz', i)
    }else if( 1 % 5 === 0) {
        console.log('buzz', i)
    }else if(i % 3 === 0){
        console.log('fizz', i)
    }else {
        console.log(i)
    }
}

/////////////////////
// Wild Wild Life //
///////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(2,1, 5000 +1)
    console.log(plantee)

//wolfy.splice(3,1 (Gotham City"); 
    console.log(wolfy)

wolfy[3] = "Gotham City"
console.log(wolfy)

dart[4] ="Hawkins"
console.log(dart)


wolfy[0] = "Game Boy"
console.log(wolfy)
// great practice using array 
////////////////////////////////
// Yell at the Ninja Turtles // 
//////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (i = 0; i < ninjaTurtles.length; i++) {
    ninjaTurtles[i] = ninjaTurtles[i].toUpperCase(); {
        console.log(ninjaTurtles[i])
    }
}
//got to yell at the turtles, but I didn't put in the of part of the for...of loop in
//will leave this for now and try later to fifure it out, can also reach out in chat

////////////////////////
// Methods Revisited //
//////////////////////

//Console log: the index of Titanic
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];{
    console.log(favMovies[0,8])
}
// output is Titanic
//
//1.  Thought question: What did it do to the array? Did it permanently alter it?
//The .sort( method sorted the list in alphabetical order. Yes, I believe that it permanently alter the array.
// After the sort, I did a console.log and it gave we the sorted list again.
//
//2. Use the method pop
 //const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// pop is out push is in ** note to self
// pop removes the end element in an array
favMovies.pop();
    console.log(favMovies)
//
//3. push "Guardians of the Galaxy"
favMovies.push("Gardians of the Galaxy");
    console.log(favMovies)
//
//4. Reverse the array
//will re-order the array to start with the last element and end with the first element
console.log(favMovies.reverse());
//
//5. Use the shift method to remove "Fast and Furious"
// .shift() should remove only the first element in the array, that isn't Fast and Furious
// it removes Black Panther
favMovies.shift();
    console.log(favMovies)
// tried putting "Fast and Furious in ()" did not remove it 
// tried putting (4, 0)
// no luck - will come back to this one
//
//6. unshift - what does it return?
favMovies.unshift();
    console.log(favMovies)
// brough back Black Panther and placed at the beginning of the array
//
//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
console.log(favMovies.indexOf('Django Unchained'));
//outputs 3, 3 is the index number for Django
favMovies.splice(3, 1, 'Avatar');
    console.log(favMovies)
//removed index 3 removed and replaced with Avatar
//7.  Did this permanently alter our array? 
// Yes, it did remove Django and insert Avatar.
//
//8. slice the last half of the array (challenge yourself and try to programmatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// favMovies.slice()
// find the character count for whole array 
// divide by 2 to find middle of array
// slice array at that middle point
// not sure how to do that
//.length gives me the # of elements, but now from those elements I need to gather their
// character count and add all to gether as think that .map might help since it collects
// data 
// so pseudo coding it helped me think about my math operators 
// I found an example - going to try it on my array
const middle = favMovies[Math.round((favMovies.length -1) / 2)];
console.log(middle)

console.log(favMovies.indexOf('Imitation of Life'));

console.log(favMovies.slice(9))
//this did not permanently alter the array.

//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
const movieSlice = (favMovies.slice(9));
console.log(movieSlice)
//
//10. console.log your final results
//
//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//While reading on const vs let, it is my understanding the const should be used by default. This is because it prevents you from
//accidentally overwriting your variables. You will use let when you are for sure you will need to change the variable at
//some time in your code. Also, when const is used in an array it is mutable. We could have used let, but as I read const is best practice.
//Best practice is usually determened by your workplace preferences. 
//
//
/////////////////////
// Where is Waldo //
///////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert (hint look at the slice/splice method(s))
//first console.log the array to see what I am working with
console.log(whereIsWaldo)
console.table(whereIsWaldo)
//move Eggbert using splice, Eggbert is one item so 1 and he is in the 1st position
whereIsWaldo.splice(1, 1,);
console.log(whereIsWaldo)
//Change "Neff" to "No One"
console.log(whereIsWaldo.indexOf("Neff"));
//finally found Neff
console.log(whereIsWaldo (2)[2])
// but don't know how to splice him out and insert "No One"

// had to go out to google this 
//need to show in a table 
console.table(whereIsWaldo)
g
//Access and console.log "Waldo"
console.log(whereIsWaldo.indexOf("Petunia"));
console.log (whereIsWaldo [2][1][1]);
//here he is - here is Waldo



/////////////////////
// Excited Kitten //
///////////////////

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (i = 0; 1 <= 20; i++);{
    console.log("Love me, pet me! HSSSSSS!")
}
//don't know why my for loop isn't looping 
//
//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.








//////////////////////
// Find the Median //
////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//need to find the average
//get the sum of all 
// get the number of all 
// divide sum by the arr.length
let sum = nums.reduce((acc, val) => {
});
console.log(sum)

const median = (sum / nums.length);
console.log(median)

const theMedian = Math.floor(median);
console.log(theMedian)

//got sum = 421
//got median = 16.84
//got theMedian = 16

