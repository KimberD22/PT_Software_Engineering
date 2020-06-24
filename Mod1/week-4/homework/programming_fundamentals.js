// W4D2 Homework //
/*Section 1: Programming Fundamentals
Create a file called programming_fundamentals.js inside your homework folder for today.
Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.
Common programming principles
As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

Read this article on programming principles (Links to an external site.), focus on the following nine:

Write a ~1 sentence summary for each one

DRY
Don't repeat yourself, software development principal that is meant to remind you to reduce repetition and avoid redundancy. 

KISS
Keep it simple stupid, simple code takes less time to write and has fewer bugs.

Avoid creating a YAGNI
You aren't going to need it, do not add functionality until you need it. 

Do the simplest thing that could possibly work
Always ask yourself, what is the simplest thing that would work.

Don't make me think
Code should be easily read and understand. If it is too complicated it should be simplified.

Write code for the maintainer
Good code will be maintained, if not by you, by someone else. Write code you would want code written for you to maintain. 

Single responsibility principle
Principle that every class, function or module should be resposible over a single part of the functionality. 

Avoid premature optimization
Do not let performance considerations affect the design of the code. There are trade offs for optomizing too early, such as, design not being as clean as it could be, incorrect code, complicated by the optimization.

Separation of concerns
SoC is a design principal for seperating a computer program into sections and each of those sections will address a separate concern in the program. 

Which ones surprise you (if any)?
The principal that suprised me was avoid premature optimization, I would have believed that optimization would be part of the earliest steps in the development process. 

Which one is currently giving you the most struggle?
Currently, just trying to KISS. I think as a new developer you tend to code everything out. I will get better at using functions to do the heavy lifting and clean up the code. 

*/
Commenting Code
Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// creating a constant variable called f (unmutable) that is equal to l arrow function
const f = l => {
  // creates a let variable called es which is (mutable) and equal to 0, p variable is equal to 0, c variable is equal to 1, and n variable is equal to 0
  let es = 0, p = 0, c = 1, n = 0
  // a while loop is created with conditions if c is less than or equal to l (*note don't know what is the value of l)
  while (c <= l) {
    //variable n is equal to c plus variable p
    n = c + p;
    //the variables c and p are equal to the variables n and c
    [c, p] = [n, c]
    // filter to get the even numbers 
    es += (c % 2 === 0) ? c : 0
  }
  // return the even sum 
  return es
}
//log the value 
console.log(f(55))

//At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))
/*Answer with comments:

In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
fibonacciSequence

If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
I would definitely want to work on f2 and not f. 

Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
SyntaxError: Unexpected identifier



