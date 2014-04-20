// I worked [by myself, with:] on this challenge

// First parts by myself, Ryan Stack helped me with bonus section 

// Your mission description:
//    1 2 3 4 5 6 7 8 9 101112
// 1 |------------------------| 
// 2 |                        |
// 3 |                        |
// 4 |                        |
// 5 |                   Ogre |
// 6 |         |--------------|             
// 7 |         |          You |
// 8 |        gate            |
// 9 |         |              |
// 10|---------|--------------|
//
// My mission is similar to the last mission of code combat where there's an artillery piece.
// We have the same artillery, this time it starts within range of a big ogre (the type that takes 2 hits to kill).
// The ogre isn't agro'd yet, he doesn't notice us. He won't walk very far, he'll keep coming back into range if 
// left alone. There's a chain of mountains in the way, functioning as a barrier. There's a gate between you and 
// the ogre. You can't break down the gate, you don't have that function. The ogre does have a break gate function
// similar to Tharin's bustdowndoor function in mission 4. Since Ogre is already in agro range of you, but you 
// can't leave your enclosure, mission starts when you bomb him once. Then the ogre runs around
// the mountain range and begins attacking the door. After he breaks down the door, he goes for you.  
// 
// 

// Pseudocode
// bomb ogre when mission starts and he's just north of you
// move to west
// wait for ogre to get to gate
// bomb ogre at gate

// OR

// move to west 
// bomb ogre to the northeast of you
// go back west
// wait for ogre to break down gate
// bomb ogre when he's in range of you 


// Initial Code
// attackXY(11, 5)
// moveXY(7, 8)
// wait for ogre to come to gate
// attackXY(8, 5)

// OR

// moveXY(7, 9)
// attackXY(11, 5)
// wait for ogre to come to gate
// attackXY(8, 5) 

// Refactored Code

// artillery.attackXY(11, 5)
// artillery.moveXY(7, 8)
// wait 6 seconds
// artillery.attackXY(8, 5)

// OR

// artillery.moveXY(7, 9)
// artillery.attackXY(11, 5)
// wait 6 seconds
// artillery.attackXY(8, 5) 


// Reflection
// 
// What parts of your strategy worked? What problems did you face?

//   I liked this assignment alot. Day-dreaming about making video games is something I do all the time. And I'd go
// so far as to say I have logged many hours of experience playing computer games. I wanted to keep this simple, so
// I first envisioned something similar to tower defense games but with code-combat units. And I went with it. I
// feel that without my little map I would have struggled to articulate my level clearly using only written word. //
// 

// What questions did you have while coding? What resources did you find to help you answer them?

//   Decades of computer gaming experience assisted me in choosing what type of level I wanted to make.
// Went back to codecombat to check I got certain names like Tharin right. 

// What concepts are you having trouble with, or did you just figure something out? If so, what?

//   The concepts behind code-combat were solidified by the time I completed the challenges on their site. I am proud 
// of my little map, I was thinking about making my own HTML page example, but I'll do that for bonus section if I 
// have time.

// Did you learn any new skills or tricks?

//   Yes, I learned a bit more about refactoring. I wrote the object the functions were being called on to clarify,
// Though I felt the code was already as D.R.Y as can be.

// How confident are you with each of the learning objectives?

//   I believe our major learning objective here was to create a user-experience, pseudocode, and code. I feel 
// comfortable with this from our group project.

// Which parts of the challenge did you enjoy?

//   Daydreaming about what type of level to make

// Which parts of the challenge did you find tedious?
// 
//   turning the pseudocode into code and refactoring it. I felt that was a little tedious for a level this basic.
// 
// 
// 
// 
