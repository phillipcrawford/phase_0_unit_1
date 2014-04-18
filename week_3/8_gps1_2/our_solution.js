// YOUR FULL NAMES:
//  1. Phillip Crawford
//  2. Tim Howard 


// 1. "YOU SIGNED... WHO?!"

var arnold = {name: "arnold", age: 50, quote: "I\'ll be back"};
var billySandler = {name : "Billy Sandler", age: 45, quote: "REEEEALLLY?"};


// 2. "Here they Come!"

var adamSandler = {name : "Adam Sandler", age: 47, quote: "That's your home! Are you too good for your home?!"};
var kristenBell = {name : "Kristen Bell", age: 33, quote: "Do you wanna build a snowman?" };
var jimCarrey =   {name : "Jim Carrey" , age: 52, quote: "...So you're telling me there's a chance? YEAH!"};
clients = [arnold, billySandler, adamSandler, kristenBell, jimCarrey];


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client (name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
}
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"

for (var i = 0; i< clients.length; i++){
    console.log("This is client number " + (i+1));
    console.log(clients[i].name);
    console.log(clients[i].age);
    console.log(clients[i].quote);
}

// ** BONUS **


//  Your Reflection:
//    So I got an amazingly bad review from Rick monitoring our session. I feel like his response was very
//    inaccurate. He said I did not know constructors, .notation, javascript syntax, and did not speak enough
//    I was reminded to upload my completed work even though I did (minus this reflection) shortly after we finished. 
//    At no point was I confused about . notation. I have found that Java and javascript are quite similar but have
//    some syntax differences. How could I have built a hashTable in Java last week with overloaded 
//    constructors and numerous method calls without conceptually knowing constructors and . notation? I was driver, but 
//    I feel like I drove and navigated. In sessions where I navigated, I was way more hands on in terms of how the code
//    should go. My partner did speak more than me, but it was never "no, not that, do this". There were several things
//    I said to see if my partner understood what was going on, but Rick must have interpreted these as me being confused. 
//    Such as "So does the 'this' keyword refer to the instance of the object?" It does. Or "what type of loop 
//    should we use?" I eventually answered my own question with a for loop iterating from 0 to the array.length 
//    (that's me demonstrating knowledge of . notation right there.) Yes I was confused about the syntax of certain
//    things such as the way the correct code goes 'function Client(name, age, quote) {' 
//    I was trying 'function Client(String name, var age, String quote) {' . 
//    But that was after it was cleared (By Rick) that we needed to define a function. I interpreted being told to make
//    a constructor. There already was a constructor. It was the function we needed to add, not the constructor. I want
//    to point out that we finished on time. Though we spent an extra 20 minutes on pleasantries and hearing things about 
//    gitHub i already know.
