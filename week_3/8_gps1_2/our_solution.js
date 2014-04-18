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
//What parts of your strategy worked? What problems did you face?
//  Maybe I wasn't ready for the role of driver in Javascript. Or Maybe I misunderstood the roles of driver 
//and navigator. My previous pair programming sessions went great. As navigator, I told them what to do to 
//achieve the requirements, and they typed it. I did not hear a level of detail that I myself have provided
//in the past as to what it is I should type, and feedback as to what was typed in stypi, if it was wrong, how so,
//etc. Perhaps there was miscommunication all around. Though we did finish on time.
//
//What questions did you have while coding? What resources did you find to help you answer them?
//  I didn't understand why we would need to build a new constructor when there already was one. Turns out we 
//didn't need to build another constructor/overload one we were building a new function/method. I think java 
//and javascript are very similar in what I have seen so far. I've known Java for 3 years now. So conceptually 
//I didn't have any problems with the language concepts, but I did with syntax. And what it was we were aiming to type. 
//Tim and Rick provided resources, but they weren't always the same syntax we had just learned, or had copied
//more text than made sense for the context of the problem.
//
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//  The fact that parts 1,2,and 4 related to each other whereas part 3 stands alone. It was not immediately 
//clear to me. Yes code does work that way, but I was not expecting it.
//
//Did you learn any new skills or tricks?
//  Yes Tim and I learned some java syntax. 
//How confident are you with each of the Learning Competencies?
//  I know the syntax pretty well now. 
//Which parts of the challenge did you enjoy?
//  Once we understood what we were seeking to accomplish in each part, it wasn't too difficult. 
//Which parts of the challenge did you find tedious?
//  The miscommunication. Rick said he felt I was too silent. I was often awaiting feedback as to what I had typed,
//though I made the error of not saying "Hey look at that".
