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
