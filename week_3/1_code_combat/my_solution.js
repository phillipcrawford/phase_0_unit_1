// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
// I worked on this challenge by myself

// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// 1 Rescue Mission
// move down 2x
// move right 1x
// move up 2x
// move right 2x
// move down 2x
// Attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// 2 Grab the Mushroom
// move up 1x
// move right 1x
// move left 1x
// move up 1x
// Attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// 3 Drink Me
// Attack
// move right 1x
// move down 1x
// move up 1x
// move right 1x
// Attack

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// 4 Taunt The Guards
// move right 1x
// break door 1x
// move right 1x
// say anything
// move left 2x
// say Attack
// move right 1x
// say Follow
// move right 2x
// move up 1x
// move right 1x
// say anything
// move down 1x
// move right 1x
// move up 1x
// move right 1x


this.moveRight();
this.bustDownDoor();
// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Gobbledygook");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// 5 It's a Trap
// move down 2x
// say anything
// move up 2x

this.moveDown();
this.moveDown();
this.say("sdaf");
this.moveUp();
this.moveUp();

// 6 Taunt
// say anything 4x

this.say("Hey!");
this.say("Hello");
this.say("turpentine");
this.say("porcupine");

// 7 Cowardly Taunt
// move (50, 16)
// move (63, 20)
// move (70, 10)
// move (63, 20)
// say anything

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.moveXY(63, 20);
this.say("I can lure them in here."); 
 
// 8 Commanding Followers
// move (49, 66)
// move (60, 63)
// move (75, 63)
// say follow
// move (66, 47)
// say anything
// say attack

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow now!");
this.moveXY(66,47);
this.say("Obedience!");
this.say("ATTACK!");

// 9 Mobile Artillery
// attack (49, 66)
// attack (49, 60)
// move (30, 26)
// attack (46, 5)
// move (57, 26)
// attack (68, 54)
// attack (63, 43)

this.attackXY(49, 66);
this.attackXY(49, 60);
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(57, 26);
this.attackXY(68, 54);
this.attackXY(63, 43);

// Reflection:
// Write your reflection here.
// What is this referring to? Think programming-wise rather than in the terms of the game.
//   this refers to the instance of the object the method is being run on. In the game it is the guy Tharin or the artillery. When we have one of the two selected, this.move() is the same as Tharin.move
// What does the () do in JavaScript?
//   signifies that there are no arguments to the method. The attackXY and moveXY methods have values inside the parentheses.
// What is the point of the semicolons?
//   signifies the end of the line.
// What parts of your strategy worked? What problems did you face?
//   I thought this was super fun. Trial and error cleared up issues i had (e.g. what is Tharin's attack range?). The site frequently crashed, but I think this game is a great way to trick kids into learning how to code.
// What questions did you have while coding? What resources did you find to help you answer them?
//   I found codecombat really straightforward. Didn't need any outside resources.
// What concepts are you having trouble with, or did you just figure something out? If so, what?
//   Nothing confused me more than 15 seconds. Small things like, on level 3 you can't kill both the ogres right away because his health is low, get the potion to restore health. Or on the last mission, it takes 2 hits to kill a big ogre.
// Did you learn any new skills or tricks?
//   Not new, no, I have an intermediate level of understanding java, and all the syntax in this tutorial is indentical. Though I was told in my first java class "JAVA IS NOT JAVASCRIPT!!!"
// How confident are you with each of the learning objectives?
//   Very.
// Which parts of the challenge did you enjoy?
//   The fact that its a game. We got to lead the humans to victory over the ogres. 
// Which parts of the challenge did you find tedious?
//   The site crashed often when trying to reload levels that I had already completed. 
 
 
 
 
 
 
 
 
// Reflection:
// Write your reflection here.
