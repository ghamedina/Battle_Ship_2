# Battle_Ship_2
First Epic

As a user I can see a 10 x 10 grid so that I can see the gameboard.

Hint: Use a for loop to append to a table a <tr> tag, within that loop create another for loop to create the <td> tags. For a recap on loops look at Learn Day "Javascript Arrays and Iteration".
Hint: Each loop will count to 10.
Hint: Each <td> needs to have an id.

As a user when I click on a position, the position changes color so that I can tell that a position has been torpedoed.

Hint: Use .on("click", function() {...}) and addClass("...").

As a user I can see how many torpedoes I have used, so that I can keep track of how many I have used.
As a user once a position has been torpedoed, it cannot be torpedoed again so that I don't waste torpedoes.

Hint: Use $("...").off("click")

As user I expect there to be 5 single length ships on the board.

Hint: Create a global variable called board and have it hold an empty array. Have that empty array hold 10 empty arrays, creating a 2d array.
Hint: Create a global constant SHIP variable with a value of 1.
Hint: Create a loop that accesses the board at a random row and column and places a SHIP. 

As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.

Hint: Create a .on("click", function() {...} ) to check the board for the presence of a SHIP.
If nothing is there it is a MISS.
If a SHIP is there, it will be a HIT.

As a user I have won the game when I have 5 hits on the board, so that I know when the game is won and over.
As a user I have a limit of 25 torpedoes to hit all ships, and when I run out I have lost the game, so that that game is a challenge.
As a user if I lose, I can see where the ships were, so that I know there were actual ships on the board.

Hint: Use a .addClass("...") conditional on the torpedo counter.
