//Our Hero

class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10};
        this.catchPhrase = ['I\'m fresher than day old pizza', 'You can\'t count my calories'];
    }
    talkSass() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }
    announceHealth() {
        return `${this.name}'s health is ${this.health}.`;
    }  
        fight(enemy) {
            //console.log('i\'m ready to rumble');
            let random = Math.round(Math.random());
            if (random == 1) {
                enemy.health -= this.weapons.sugarShock;
                return (`${this.name} has used sugar shock`)
            } else {
                enemy.health -= this.weapons.sprinkleSpray;
                return (`${this.name} has used sprinkle spray`)
            }
        }
}
const Dougie = new Hero('Dougie');

//Our Enemy

class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {pepperoniStars: 5, cheeseGrease: 10};
        this.catchPhrase = ['I\'m youtube famous', 'I\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;    
    }
    announceHealth() {
        return `${this.name}'s health is ${this.health}.`;
    }
    fight(hero) {
        //return 'I\'m gonna flatten you like a slice of pepperoni'
            let random = Math.round(Math.random());
            if (random == 1) {
                hero.health -= this.weapons.pepperoniStars;
                return (`${this.name} has used pepperoni stars`)
            } else {
                hero.health -= this.weapons.cheeseGrease;
                return (`${this.name} has used cheese grease`)
            }
        }
}

const PizzaRat = new Enemy('Pizza Rat');

//Walking Down the Street 
console.log(Dougie.talkSass());
console.log(PizzaRat.talkSmack());
console.log(Dougie.announceHealth());
console.log(PizzaRat.announceHealth());

//Fight!
console.log(Dougie.fight(PizzaRat));
console.log(PizzaRat.fight(Dougie));
console.log(PizzaRat.announceHealth());
console.log(Dougie.announceHealth());