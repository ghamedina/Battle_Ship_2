var board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ];

var miss = -1;
var ship = 1;
var hit = 2;
var hitCounter = 0;


function placeShips(){
  var shipCounter = 0;
  while (shipCounter < 5) {
   // var random row = random number
   var row = Math.floor (Math.random() * 10);
   // var random col = random number
   var column = Math.floor (Math.random() * 10);
   //check the baord spot to make it's zero

   if (board[row][column] == 0 &&
       (column == 0 || board[row][column - 1] == 0) &&
       (column == 9 || board[row][column + 1] == 0) &&
       (row == 0 || board[row - 1][column] == 0) &&
       (row == 9 || board[row + 1][column] == 0)
   ) {
     board[row][column] = ship;
     shipCounter = shipCounter + 1;
   }
   // loop through board, check if each place has ship
   //commented out the while loop, it was giving us an extra 1 (ship).
    // while (board[row][column] == 1) {
    //   row = Math.floor (Math.random() * 10);
    //   column = Math.floor (Math.random() * 10);
    // }
 }
 //closes placeShips
};

//Reveal ships on the board
function fiveShips() {
//Go through every row to find the comliumns
  for (row = 0; row < 10; row++){
    //Go through every column if the posistion is a 1  or not
    for (column = 0; column < 10; column++){
      //Display ships if it is a 1.
      if(board[row][column] == 1){
          $('td[data-index="' + row + '-' + column + '"]').addClass("whereTheShipsWere")
      // if (board[row][column] == 2) {
      //   $('td[data-index]="' + row + '_' + column + '"]').addClass("hitShip")
      // }
      console.log("You've hit a ship at position: " + row + column);
      }
    }
  }
};


function returnBoard(){
  console.log(board);
}

// function hitShip(row, col){
//   //place a var inside this that represents the square we hit
//     if ( board[row][col] === 0) {
//       //reassign the empty square to a miss (-1)
//        board[row][col] = miss;
//       alert ("You miss!");
//     } else if (board[row][col] == 1) {
//       //reassign the 1 to a hit which we can call 2
//       board[row][col] = hit;
//       hitCounter = hitCounter + 1;
//       console.log("You've hit :" + hitCounter);
//       $('td[data-index="' + row + '-' + col + '"]').addClass("hitShip");
//       alert ("You torpedoed a ship!! Awesome!");
//     } else if (board[row][col] == -1){
//       alert("You already tried here, there's no ship!");
//     } else if (board[row][col] == 2) {
//       alert ("You already torpedoed this ship, yo!");
//     }
//     if (hitCounter == 5) {
//       alert("You win!");
//     }
// };



//// 1) need to fix alerts
//2) need to change color of hits
