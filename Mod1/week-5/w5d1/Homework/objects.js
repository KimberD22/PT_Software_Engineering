/////// Creating Classes  /////////////
// Hamster //
/*attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price
 */ 

  class hamster {
    constructor (owner, name, _price) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }       
            
        eatFood () {
           return "nibble nibble";
        
        }
       getPrice () {
         return this.price;
       }
    
    }

       console.log(eatFood);
    
  


  class Person {
      constructor(name,age, weight,mood,bankAccount) {
           this.name = name;
           this.age = 0;
           this.height = 0;
           this.weight = 0;
           this.mood = 0;
           this.bankAccount = 0;
           hamsters = []; 
      }
       newPerson = new Person ("Timmy", 5, 45, 0, 0, )
      
  
        getName() {
            return this.name
        }
        getAge() {
            return this.age
        }
        getWeight() {
            return this.weight
        }
        greet() {
            return "hello" + this.name
        }
        eat() {
            return this.weight +1, this.mood +1
        }

        excercise() {
            return this.weight -1
        }

        ageUP() {
            return this.age +1, this.height +1, this.weight +1, this.mood -1, this.bankAccount +10
        }
        buyHamster(hamster) {
            this.hamsters.push(hamster)
            return this.mood +10, this.bankAccount -15
        }
  
  
   }

    



/*
Person
attributes:
name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:
getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood ( if weight is currently 10 it should go up to 11 and same for mood)
exercise() - decrement weight ( if weight is currently 10 weight should change to 9)
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
Commit your work!
Your commit message should read something like:
"created hamster class"

//////////////////////////////
/*
//Create a Story with your Person class
Feel free to update or add methods to automate some of these tasks.

Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice
Commit your work!
Your commit message should read something like:
"created timmys story"*/

//1. Instantiate a new Person named Timmy
const Timmy = new Person ('Timmy',);
console.log(Timmy);
//2. Age Timmy five years
for(let i = 1; i <= 5; i++) {
    Timmy.ageUp();
}
console.log(Timmy);
//3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for(let i = 1; i <= 5; i++) {
    Timmy.eat();
}
console.log(Timmy);
//4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.
for(let i = 1; i <= 5; i++) {
    Timmy.exercise();
}
console.log(Timmy);
//5. Age Timmy 9 years
for(let i = 1; i <= 9; i++) {
    Timmy.ageUp();
}
console.log(Timmy);
//6. Create a hamster named "Gus" & 7. Set Gus's owner to the string "Timmy"
const Gus = new Hamster('Timmy','Gus');
console.log(Gus);
//8. Have Timmy "buy" Gus
Timmy.buyHamster(Gus);
console.log(Timmy);
//I can't get the cost of the hamster to subtract from the bank balance the value keeps coming up as undefined 
//9. Age Timmy 15 years
for(let i = 1; i <= 15; i++) {
    Timmy.ageUp();
}
//10. Have Timmy eat twice
for(let i = 1; i <= 2; i++) {
    Timmy.eat();
}