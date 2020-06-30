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
🔴 Commit your work!
Your commit message should read something like:
"created hamster class"*/

class hamster {
    constructor (owner, name, price) {
        this.owner = owner
        this.name = name
        this.price = parseInt(price)
        console.log(hamster)
    }

        wheelRun() {
            console.log("squeak squeak")
        } 
        
        eatFood() {
            console.log("nibble nibble")
        }

        getPrice() {
            console.log("return the price")
        }
}


   