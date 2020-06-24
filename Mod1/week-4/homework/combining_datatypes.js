//Section 2 Combining Datatypes
//Combine objects, arrays, and functions
//touch combining_datatypes.js and do your work for this section in this new file

//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    'colors':['purple', 'blue', 'pink', 'orange', 'black']
 };
 console.log(crayonBox.colors[2]);


//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'

    }
}   
        console.log(bottle.cap.color);


//3.  Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [
        {items: 'shoes', price: 20},
        {items: 'shirt', price: 15},
        {itens: 'pants', price: 40},
]
        console.log(receipt[0]);


 //4.  Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [['Rex', 'Jose', 'Betty', 'Jon', 'Ellie']
];
        console.log(apartmentBuilding[0][2]);

// Combine objects, arrays, and functions more than one level deep

//1.  Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

 const knit = () => {

     const crafty = {

        item: 'scarf',
        size: '6ft'
     }
     
        console.log(crafty.item)
     }
     knit()

//2.  Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
  const crayonSelector = () => {
      const crayonBox = {  
          'colors':['purple', 'blue', 'pink', 'orange', 'black']
    };
    crayonSelector();
    console.log(crayonSelector([1]));

      }
  

//3.  Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
  const powerButton = () => {
      const options = () => {
          console.log('select a song');
      } 
          
          return options();
      powerButton()
      console.log(powerButton())
        
  }