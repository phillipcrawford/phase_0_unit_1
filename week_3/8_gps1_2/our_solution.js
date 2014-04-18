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
//    
