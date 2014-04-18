// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.


1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

     create variable adam and set equal to empty object
2. Give adam a name property with the value "Adam".

     add property 'name' to adam and set it equal to "Adam" 

3. Add a spouse property to terah and assign it the value of adam.

     add property 'spouse' to terah object and set it equal to 'adam' object

4. Change the value of the terah weight property to 125.

     modify weight property of terah object to equal 125

5. Remove the eyeColor property from terah.

     delete eyeColor property from terah

6. Add a spouse property to adam and assign it the value of terah.

     add property 'spouse' to 'adam' object and set it equal to 'terah' object

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

     add property children to terah object and set equal to empty object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

     add property carson with value of object to the terah.children object. Inside the object
that property carson has as a value, add name property with value of "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

    add property carter with value of object to the terah.children object. Inside the object
that property carter has as a value, add name property with value of "Carter"

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

    add property colton with value of object to the terah.children object. Inside the object
that property colton has as a value, add name property with value of "Colton"

11. Add a children property to adam and assign it the value of terah children.
    add children property to adam and set it equal to the contents of terah's children property

*/

// __________________________________________
// Write your code below.
var adam = {}
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {}
terah.children = {
  carson: {name : "Carson"}, carter: {name : "Carter"}, colton: {name : "Colton"}
}
adam.children = terah.children;

//here are some of my attempts at getting part 8-10 before I figured it out.
//
//var carson = {}
//carson.name = "Carson";
//terah.children = carson;
//terah.children.carson.name;
//terah.children.carson.name = "Carson";





// __________________________________________
// Reflection: Use the reflection guidelines
// What parts of your strategy worked? What problems did you face?
// 
//   My strategy was to dive right in armed with what I knew about Javascript. I had to look up 
//how to delete a property from an object. Step 8 took me a while 
// 
// What questions did you have while coding? What resources did you find to help you answer them?
// To delete a property i looked at http://stackoverflow.com/questions/208105/how-to-remove-a-property-from-a-javascript-object
// 
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Step 8 is hard to articulate. Once I understood what was being asked, I got it. 
//
// Did you learn any new skills or tricks?
//
//   Some syntax about what works and what doesn't.
//
// How confident are you with each of the learning objectives?
//
//   Very, this tested mostly my knowledge of Object Literals
//
// Which parts of the challenge did you enjoy?
//
//   The end. I was worried terah's new kids might not be her spouse adam's, but they were
// Which parts of the challenge did you find tedious?
//
//   Reading through what was meant for parts 8 through 10. It's not exactly a simple thing to describe
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
