
/*if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')}
  */

  /////////////
  // Year 1 //
  ///////////

 //---------------Year 1-----------------------------------
//Query for your div with the id of container and set it to a variable named $container
//console.log $container
const container = document.querySelector('#container');
console.log(container);
// Create an <h1> element and set it to a variable called $h1 and console log it
let h1 = document.createElement('H1');
//console.log(h1);
//Add some text inside the h1 element. Example text: 'Hogwarts'
let h1Text = document.createTextNode('Hogwarts');
h1.appendChild(h1Text);
//Append your $h1 to your $container
container.appendChild(h1);
//Test yourself
//console.log(document)

//---------------Year 2-----------------------------------
//h2 element with your name
let h2 = document.createElement('H2');
container.appendChild(h2);
let h2Text = document.createTextNode('Kimmy DePriest');
h2.appendChild(h2Text);
//h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
let h3 = document.createElement('H3');
container.appendChild(h3);
let h3Text = document.createTextNode('Gryffindor');
h3.appendChild(h3Text);
//h4 element with your pet's name
let h4Pet = document.createElement('H4');
container.appendChild(h4Pet);
h4Pet.innerHTML = 'Merlin'
    //this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
h4Pet.classList.add('owl');
//h4 element with your wand (You can make it whatever you want.
let h4Wand = document.createElement('H4');
container.appendChild(h4Wand);
let h4WandText = document.createTextNode('Hornbeam Wand with Dragon Heartstring Core');
h4Wand.appendChild(h4WandText);

//test yourself
//console.log(document);

//---------------Year 3-----------------------------------
/*Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
list items of
butter beer
invisibility cloak (add a class of secret)
magic map (add a class of secret)
time turner (add a class of secret)
leash (for your pet, be sure to give this list element the same class as you gave your pet)
Bertie Bott's Every Flavor [Jelly] Beans.
append the unordered list to your container div */

let ul = document.createElement('UL');
container.appendChild(ul);
document.querySelector('UL').setAttribute('storage', 'trunk');
//console.log(document);

let butterBeer = document.createElement('LI');
butterBeer.innerHTML = 'Butter Beer'
ul.appendChild(butterBeer);

let invisibilityCloak = document.createElement('LI');
invisibilityCloak.innerHTML = 'Invisibility Cloak'
invisibilityCloak.classList.add('secret');
ul.appendChild(invisibilityCloak);

let magicMap = document.createElement('LI');
magicMap.innerHTML = 'Magic Map';
magicMap.classList.add('secret');
ul.appendChild(magicMap);

let timeTurner = document.createElement('LI');
timeTurner.innerHTML = 'Time Turner';
timeTurner.classList.add('secret');
ul.appendChild(timeTurner);

let leash = document.createElement('LI');
leash.innerHTML = 'Leash';
leash.classList.add('owl');
ul.appendChild(leash);

let jellyBeans = document.createElement('LI');
jellyBeans.innerHTML = 'Bertie Bott\'s Every Flavor [Jelly] Beans';
ul.appendChild(jellyBeans);

//console.log(document);

//---------------Year 4-----------------------------------
//Right above your table add an h5 that says 'Spring 2017'
let h5 = document.createElement('H5');
document.body.appendChild(h5);
h5.innerHTML ='Spring 2017';

//Make a table
let table = document.createElement('TABLE');
document.body.appendChild(table); 

//inside the table add a thead element
let head = table.createTHead();

//Create tr elements & append to thead
let tr1 = document.createElement('TR');
head.appendChild(tr1);

//add two th elements inside the thead element
//in the first th add the text Day
let th1 = document.createElement('TH');
tr1.appendChild(th1);
th1.innerHTML = 'Day';

//in the second th add the text Classes
let th2 = document.createElement('TH');
tr1.appendChild(th2);
th2.innerHTML = 'Classes';

//Create a tr element 
//add two td elements inside
//in the first td add the day Monday
//Can't figure out how to make this into a for loop..syntax errors
let tr2 = document.createElement('TR');
table.appendChild(tr2);
let tdMon = document.createElement('TD');
tr2.appendChild(tdMon);
 tdMon.innerHTML = 'Monday'
 //in the second td add the classes you are taking 
let td2 = document.createElement('TD');
tr2.appendChild(td2);
td2.innerHTML = 'History of Magic, Charms, Care of Magical Creatures';

//tuesday
let tr3 = document.createElement('TR');
table.appendChild(tr3);
let tdTues = document.createElement('TD');
tr3.appendChild(tdTues);
tdTues.innerHTML = 'Tuesday'
let td3 = document.createElement('TD');
tr3.appendChild(td3);
td3.innerHTML = 'Potions, Herbology, Astronomy';

//wednesday
let tr4 = document.createElement('TR');
table.appendChild(tr4);
let tdWed = document.createElement('TD');
tr4.appendChild(tdWed);
tdWed.innerHTML = 'Wednesday'
let td4 = document.createElement('TD');
tr4.appendChild(td4);
td4.innerHTML = 'Defense Against the Dark Arts, Muggle Art';

//thursday
let tr5 = document.createElement('TR');
table.appendChild(tr5);
let tdThur = document.createElement('TD');
tr5.appendChild(tdThur);
tdThur.innerHTML = 'Thursday'
let td5 = document.createElement('TD');
tr5.appendChild(td5);
td5.innerHTML = 'Quidditch Practice, Earth Magic';

//friday
let tr6 = document.createElement('TR');
table.appendChild(tr6);
let tdFri = document.createElement('TD');
tr6.appendChild(tdFri);
tdFri.innerHTML = 'Friday'
let td6 = document.createElement('TD');
tr6.appendChild(td6);
td6.innerHTML = 'Transfiguration, Flying';

//console.log(document);

//---------------Year 5-----------------------------------

//Break your wand! (select the element that contains your wand and remove it)
container.removeChild(h4Wand);
//Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
ul.removeChild(butterBeer);
//Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
h4Wand.innerHTML = 'Holly Wand with Phoenix Feather Core';
console.log(document);
container.insertBefore(h4Wand, h4Pet)
//Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
h4Wand.style.color = 'indigo';
//Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
container.removeChild(h4Pet);
ul.appendChild(h4Pet);
//Have your pet come back (remove your pet from the DOM, put it back in its original location)
ul.removeChild(h4Pet);
container.insertBefore(h4Pet, h4Wand);

//---------------Year 6-----------------------------------
//Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
let hide = document.getElementsByClassName("secret"); 
    for(let i = 0; i < hide.length; i++){
        hide[i].style.visibility = "hidden"; 
        hide[i].style.display = "none";
    }
 
//Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
//Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)

//cant figure out how to add this back

//Accident! You transmogrified your pet's leash into half cabbage
//add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
//console.log(leash.className)
//leash.className.classList.add('cabbage')
//Cant figure this out either
//add an attribute of color:CHARTREUSE; in your main.css for all elements that have a class of cabbage

//Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)

//---------------Year 7-----------------------------------
/*
Though your time at Hogwarts is nearly over, your journey of learning has just begun
Update your class schedule to read 'Fall 2018'
Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
Add some CSS to your page. Feel free to experiment and make this page your own
Take a screenshot of your page and add it to your homework folder
*/
  


