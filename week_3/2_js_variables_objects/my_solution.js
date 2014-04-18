// I paired [by myself, with:] on this challenge.
// Did it by myself



// Pseudocode
// from test 1, we know variable secretNumber needs to be a number
// looking more we see secretNumber is never initialized, so I'll declare one
// from test 2, we know variable secretNumber needs to be 7
// from test 3, we know variable password needs to a string
// from test 4, we know variable password needs to be "just open the door"
// from test 5, we know variable allowedIn needs to be a boolean
// from test 6, we know variable allowedIn needs to be false
// from test 7, we know variable members needs to be an array
// from test 8, we know members[0] needs to be John
// from test 9, we know members[3] needs to be Mary


// __________________________________________
// Write your code below.
secretNumber = 7;
password = "just open the door";
allowedIn = false;
members = ["John", "Paul", "Susan", "Mary"];






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// my initial code was what was shown above, just one line at a time. By test 4, I went ahead
// and typed in what I thought would pass the remaining tests. It worked



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// What parts of your strategy worked? What problems did you face?
//   This was easy to me. It took me under 3 minutes. Did not face any problems
// What questions did you have while coding? What resources did you find to help you answer them?
//   No questions, or resources consulted
// What concepts are you having trouble with, or did you just figure something out? If so, what?
//   I know java quite well, javascript has very similar syntax
// Did you learn any new skills or tricks?
//   no, I I knew this stuff
// How confident are you with each of the learning objectives?
//   very
// Which parts of the challenge did you enjoy?
//   the reading. The challenge itself was very brief.
// Which parts of the challenge did you find tedious?
//   none of it
// 
// 
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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

