//DRY - avoid redundant code by utilizing functions, loops, classes, etc.that overarch common targets/purposes

//KISS - simple code = better

//Avoid creating a YAGNI - if it's not directly relevant and being used in the program, you don't need it in the code

//Do the simplest thing that could possibly work - if there's multiple ways to get to the solution, choose the straightest path

//Don't make me think - write code that is self-explanatory, including function names that describe the purpose or action, variable names that accurately describe what is being stored, and structure as many relevant things together as possible 

//Write code for the maintainer - use a generally agreed-upon format, make things easy to find, write code that can easily be added onto or modified by someone else looking at your code

//Single responsibility principle - strategically categorize your overarching structures (classes & functions) so that it covers one common purpose

//Avoid premature optimization - worry about performance later, after you know your code actually works

//Separation of concerns - organize the flow so common functionalities are with their related code

//Which ones surprise you (if any)? - "Do the simplest thing" is not so much surprising as it is just a little confusing to me. I think I'm just not super familiar with what is considered more simple without having to be repettitive sometimes, which conflicts with DRY... for example going off of "Do the simplest thing", it seems like writing out multiple lines of code for smaller peices would be preferred over writing loops, and hard-coding a lot of pieces.

//Which one is currently giving you the most struggle? - "Single responsibility principle","Do the simplest thing", and "YAGNI" are all hard for me because I want to be very detailed so I think I can sometimes try to overreach my code, like as over-classifying elements, adding a lot of conditions in functions, or adding a lot of structures that might be unneccessary for how simple the purpose actually is.

#### Commenting Code

// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

//function "f" takes a parameter "l"
const f = l => {
//"es", "p", and "n" start with a value of 0, and "c" starts with a value of 1
  let es = 0, p = 0, c = 1, n = 0
//while "c" is less than or equal to the parameter "l" 
  while (c <= l) {
//set "n" to the sum of "c" and "p"
    n = c + p;
//set a new value for "c" and "p" that are equal to the old values of "n" and "c"
    [c, p] = [n, c]
//increase "es" by the value of "c" if "c" is even, or by 0 if "c" is odd
    es += (c % 2 === 0) ? c : 0
  }
//return the value of "es"
  return es
}

console.log(f(55))


// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

 
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
    
    
    // **Answer with comments:**
    
    // - In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a _classic_ ) - are there any other variable names or things that would make this code easier to read and understand?
    // largestEvenFibbonaci()
    // & nextFibbValue = currentFibbValue + previousFibbValue;    
    
    // - If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with `f` or `f2`?
    // f2 is easier to pick up becuase I have less work interpreting what it's doing
    
    
    // - Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
    // It looks like for some situations when variables are being redefined in the same function , javascript doesn't separate the arguments appropriately, so the semicolon would be needed