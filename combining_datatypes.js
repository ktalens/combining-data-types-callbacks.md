// 1. Create an object, called `crayonBox`, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

var crayonBox = {
    colors: ["red", "blue", "green", "yellow"]
}

console.log(crayonBox.colors[1])

// 1. Create an object `bottle` that has a property that is an object: `cap`. `cap` can have properties like material: 'metal' or 'plastic', color: `blue` or `white` etc. Log one of the properties of that inner object.

var bottle = {
    cap: {material: "plastic",
    color: "white",
    isRecyclable: true
    }
}

console.log(bottle.cap.isRecyclable)

// 1. Create an array called `receipt` that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that  inner object.
var receipt = [
    {item: "deodorant",
      price: 5},
    {item: "iceCream",
      price: 3},
    {item: "chips",
      price: 2},
    {item: "nailPolish",
    price: 7}
  ]
  
  console.log(receipt[3].item)

//   1. Create an array called `apartmentBuilding` that has an array as one of its elements, the inner array should be the names of the tenants.  Log one of the elements of the inner array.
var apartmentBuildinng = [
    ["Katie", "Mike", "Julie","Jeff"],
    [201, 202, 204, 207]
  ]
  
  console.log(apartmentBuildinng[0][2])

//   Create a function `knit` that returns an object that has the following kinds of properties `item`: `scarf`, `size` : `6ft` etc.  Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
    var project = 
      {item: "scarf",
        size: "6ft",
        color: "blue",
        material: "wool"
      };
      return project;
    }
    
    console.log(knit().item)

    // 1. Create a function `crayonSelector` that returns an object that has an array (you can reuse your `crayonBox` object).  Log one of the elements of that array.

    var crayonBox2 = {
        colors: ["red", "blue", "green", "yellow"],
        quantity: 4,
        price: 2
    }
    
    const crayonSelector = () => {
      return crayonBox2.colors[3];
    }
    
    console.log(crayonSelector())

// Create a function `powerButton` that returns a function called `options` - `options` should console.log a simple message like `select a song`.  Call that inner function

const options = () => {
    console.log("Choose a channel!")
    }
    
    const powerButton = () => {
      return options()
    }
    console.log(powerButton())

// Model a vending machine

// - a vending machine is an object
// - it has an array of snacks (make 3 snacks)
// - snacks are objects that have a name and a price
// - a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// - Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
    snacks: [ 
      {name: "cookies",
        price: 2 },
      {name: "soda",
        price: 1 },
      {name: "chips",
        price: 2 }  
      ],
    //I got this solution off of https://wdi-sg.github.io/gitbook-2019/02-js/js-oop/readme.html when I got stuck, and I don't know why it will only work with this function notation. I tried it with the function declaration and with the const x = () => {} ways and they wouldnt work 
    vend (option) {
      return vendingMachine.snacks[option].name;
      }
    };
    
    vendingMachine.vend(0);

    // ## Callbacks
    // 1. Make a function `add` that takes two arguments (numbers) and sums them together
    // 1. Make a function `subtract` that takes two arguments (numbers) and subtracts them
    // 1. Make a function `multiply` that takes two arguments and multiplies them
    // 1. Make a function `divide` that takes two arguments and divides them
    // 1. Make a function `calculate` that takes three arguments. Assume the two arguments are a number  ie `num1, num2` and a function called `operates` (a callback).
    // 1. Make it so that when `calculate` is invoked, the callback "operates" on the numbers and returns the value.
    // 1. Call `calculate` 4 times, each time using one of the operation functions you wrote
    
    const add = (num1,num2) => {
        return num1+num2
      };
      
      const subtract = (num1,num2) => {
        return num1-num2
      };
      
      const multiply = (num1,num2) => {
        return num1*num2
      };
      
      const divide = (num1,num2) => {
        return num1/num2
      };
      
      const calculate = (num1,num2,operates) => {
        var x = num1;
        var y = num2;
        //console.log(operates(x,y));
        return operates(x,y);
      };
      
      calculate(1,2,add);
      calculate(3,2,subtract);
      calculate(1,2,multiply);
      calculate(10,5,divide);

    
// Clean up this code, so that it works and has function definitions in the correct place
//       bar();
//       const bar = () => {
//           console.log('bar here');
//       }
//       foo();
      
//       const foo = () => {
//           console.log('foo here');
//       }

    const bar = () => {
        console.log('bar here');
        }
    bar();
    
    const foo = () => {
        console.log('foo here');
        }
    foo();
      
// #### Error reading
// What is meant by the error(s) this produces?

//         foo();
//         const foo ()=>{
//             console.log('hi');
//         }

//ANSWER- The function foo has not been defined yet, so when it's being called, javascript doesn't know what to run

