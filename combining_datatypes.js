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