// ### Section 3 Array Methods with Callbacks

// A few array methods use callbacks. For example `.map` - `.map` takes each element of an array and does something to it and returns a new arrays.

// But what should it do? Multiply everything by 5? Capitalize everything? If `.map` had a hard-coded thing it always did with an array, it wouldn't be very flexible.

// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

// Two arrays to work with

// ```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// ```

// The first question is for the numbers array. The second question is for the words array.

// You don't have to write an answer to the thought questions.

// #### Every

// 1. Determine if every number is greater than or equal to 0
    const greaterThan1 = (value) => {
        if (value >= 1) {
        return true;
        } else {
        return false;
        }
    };
    
    nums.forEach(
        (number,index)=>{
        console.log(greaterThan1(number));
        }
    )

// 1. determine if every word shorter than 8 characters
    const shorterThan8 = (word) => {
        if (word.length >= 8) {
        return true;
        } else {
        return false;
        }
    }
    
    panagram.forEach(
        (value,index) => {
        console.log(shorterThan8(value));
        }
    )

// #### Filter

// 1. filter the array for numbers less than 4
    const lessThan4 = nums.filter(
        (number) => {
        return(number < 4)
        }
    )
    console.log(lessThan4)
// 1. filter words that have an even length
    const evenLength = panagram.filter(
        (word) => {
        return(word.length % 2===0)
        }
    )
    console.log(evenLength)

// #### Find

// 1. Find the first value divisible by 5
    const filterDiv5 = nums.filter(
        (num)=> {
        return (num % 5===0)
        }
    );
    console.log(filterDiv5[0]);
// 1. find the first word that is longer than 5 characters
    const filterLength5 = panagram.filter(
        (word)=> {
        return (word.length > 5)
        }
    );
    console.log(filterLength5);

// #### Find Index
// 1. find the index of the first number that is divisible by 3
    const filterDiv3 = nums.filter(
        (num)=> {
        return (num % 3===0)
        }
    );
    console.log(filterDiv3);

    nums.forEach(
    (value,index) => {
        if (filterDiv3[0]===value){
        console.log(index);
        }
    }
    );
// 1. find the index of the first word that is less than 2 characters long
    const filterLength2 = panagram.filter(
        (word)=> {
        return (word.length < 2)
        }
    );

    panagram.forEach(
    (value,index) => {
        if (filterLength2[0]===value){
        console.log(index);
        }
    }
    );

// #### For Each
// 1. console.log each value of the nums array multiplied by 3
    nums.forEach(
        (value,index) => {
        console.log(value * 3)
        }
    )
// 1. console.log each word with an exclamation point at the end of it
    panagram.forEach(
        (word,index) => {
        console.log(word+"!")
        }
    );

// **Thought Questions**
// - What happened to the original array?
// - Can you store the values from a `forEach` method in a new array?

// #### Map
// 1.  make a new array of each number multiplied by 100
    const multiplyBy10 = nums.map(
        (value) => {
        return value*10
        }
    );
    console.log(multiplyBy10)
// 1. make a new array of all the words in all uppercase
    const toUpper = panagram.map(
        (word) => {
        return word.toUpperCase()
        }
    );
    console.log(toUpper);

// **Thought Questions**
// - What happened to the original array?
// - Can you store the values from a `map` method in a new array?

// #### Some
// - Find out if some numbers are divisible by 7
    const filterDiv7 = nums.filter(
        (num)=> {
        return (num % 7===0)
        }
    );
    console.log(filterDiv7.length>0);
    
// - Find out if some words have the letter `a` in them
    const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

        const filterLetterA = panagram.map(
            (word)=> {
            if (word.search("a")===1) {
            return word}
            }
        );
    console.log(filterLetterA)

// ### Hungry for More

// #### Reduce
// - Add all the numbers in the array together using the `reduce` method
// - concatenate all the words using reduce

// **Thought Questions**
// - What happened to the original array?

// #### Sort
// - Try to sort without any arguments, do you get what you'd expect with the numbers array?
// - Try to sort without any arguments, do you get what you'd expect with the words array?
// - Sort the numbers in ascending order
// - Sort the numbers in descending order
// - Sort the words in ascending order
// - Sort the words in descending order

// **Thought Questions**
// - What happened to the original array?

// ### Array Methods Challenge Problems

// #### isPanagram

// Using the following array - test whether each letter a-z (case insensitive) is used at least once

// ```js
// const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// ```


// #### Working with data

// - filter for products with a price that is less than 10, using the array below:
// - sort alphabetically by product name

// ```js
// const products = [
//       {
//         "name": "allen wrench",
//         "price": 2.99,
//         "description": "handy tool"
//       },
//       {
//         "name": "cornucopia",
//         "price": 5.99,
//         "description": "festive holiday decoration"
//       },
//       {
//         "name": "banana",
//         "price": 0.99,
//         "description": "full of potassium"
//       },
//       {
//         "name": "guillotine (cigar)",
//         "price": 10.59,
//         "description": "behead your stub"
//       },
//       {
//         "name": "jack-o-lantern",
//         "price": 3.99,
//         "description": "spooky seasonal fun"
//       },
//       {
//         "name": "doggie treat (box)",
//         "price": 5.99,
//         "description": "fido loves 'em"
//       },
//       {
//         "name": "egg separator",
//         "price": 3.99,
//         "description": "it separates yolks from whites"
//       },
//       {
//         "name": "LED lightbulb",
//         "price": 6.55,
//         "description": "It's super-efficient!"
//       },
//       {
//         "name": "owl pellets",
//         "price": 3.99,
//         "description": "Don't ask what they used to be."
//       },
//       {
//         "name": "flag",
//         "price": 5.99,
//         "description": "catches the breeze"
//       },
//       {
//         "name": "hair brush",
//         "price": 6.99,
//         "description": "fine boar bristles"
//       },
//       {
//         "name": "iridium (one gram)",
//         "price": 19.36,
//         "description": "corrosion-resistant metal"
//       },
//       {
//         "name": "quark",
//         "price": 0.01,
//         "description": "Very small"
//       },
//       {
//         "name": "turtleneck",
//         "price": 19.99,
//         "description": "available in black and slightly-darker black"
//       },
//       {
//         "name": "kaleidoscope",
//         "price": 8.25,
//         "description": "tube with moving plastic pieces inside"
//       },
//       {
//         "name": "mitt (leather)",
//         "price": 15,
//         "description": "regulation sized"
//       },
//       {
//         "name": "nothing",
//         "price": 10,
//         "description": "Hey, if you pay us, we won't ask any questions."
//       },
//       {
//         "name": "violin",
//         "price": 2000,
//         "description": "Talk about a JS fiddle..."
//       },
//       {
//         "name": "yoyo",
//         "price": 1,
//         "description": "We had to pull some strings to get this one in."
//       },
//       {
//         "name": "pincushion",
//         "price": 1.99,
//         "description": "You'll get 'stuck' on it"
//       },
//     ]
// ```


// ### More Hungry For More
//  Watch these extra CSS videos explaining flexbox in more depth.

//    - [Flexbox: Wrap, Justify, Align](https://www.youtube.com/watch?v=7d8aAw8mzjI&index=34&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

//    - [Flexbox: Child Property](https://www.youtube.com/watch?v=zDYAbI78dzc&index=35&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)


// --- 
// ## Technical Requirements
// 1. The JavaScript file MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

// ## Submission Guidelines

// - 

// ---

// *Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*


// ---