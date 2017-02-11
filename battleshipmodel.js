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

// function placeShips(){
//   var shipCounter = 0;
//   while (shipCounter < 5) {
//    // var random row = random number
//    var row = Math.floor (Math.random() * 10);
//    // var random col = random number
//    var column = Math.floor (Math.random() * 10);
//    //check the baord spot to make it's zero
//
//    if (board[row][column] == 0 &&
//        (column == 0 || board[row][column - 1] == 0) &&
//        (column == 9 || board[row][column + 1] == 0) &&
//        (row == 0 || board[row - 1][column] == 0) &&
//        (row == 9 || board[row + 1][column] == 0)
//    ) {
//      board[row][column] = ship;
//      shipCounter = shipCounter + 1;
//    }
//    // loop through board, check if each place has ship
//    //commented out the while loop, it was giving us an extra 1 (ship).
//     // while (board[row][column] == 1) {
//     //   row = Math.floor (Math.random() * 10);
//     //   column = Math.floor (Math.random() * 10);
//     // }
//  }
//  //closes placeShips
// };

// Below: creating 2 ships of four spots : works - don't change:
var placeShipCounter = 0;
function addFourShip(){
 var shipCounter = 0;
  while (placeShipCounter < 2) {
   // var random row = random number
   var row = Math.floor (Math.random() * 10);
   // var random col = random number
   var column = Math.floor (Math.random() * 10);
   //check the baord spot to make it's zero
   if (board[row][column] == 0 &&
       (column == 0 || board[row][column + 1] == 0) &&
       (column == 0 || board[row][column + 2] == 0) &&
       (column == 0 || board[row][column + 3] == 0) &&
       (shipCounter < 4) && (placeShipCounter < 3)
    ) {
      board[row][column] = ship;
      board[row][column + 1] = ship;
      board[row][column + 2] = ship;
      board[row][column + 3] = ship;
      shipCounter = shipCounter + 1;
      placeShipCounter = placeShipCounter + 1;
      }
  }
};

addFourShip();

function addFiveShip() {
  var shipCounter = 0;
  while (shipCounter < 1) {
    // var random row = random number
    var row = Math.floor (Math.random() * 10);
    // var random col = random number
    var column = Math.floor (Math.random() * 10);
    if (board[row][column] == 0 &&
             (column == 0 || board[row][column + 1] == 0) &&
             (column == 0 || board[row][column + 2] == 0) &&
             (column == 0 || board[row][column + 3] == 0) &&
             (column == 0 || board[row][column + 4] == 0)
          ) {
            board[row][column] = ship;
            board[row][column + 1] = ship;
            board[row][column + 2] = ship;
            board[row][column + 3] = ship;
            board[row][column + 4] = ship;
            shipCounter = shipCounter + 1;
    }
  }
}
addFiveShip()

var placeShipCounter = 0;
function addThreeShip(){
 var shipCounter = 0;
  while (placeShipCounter < 2) {
   // var random row = random number
   var row = Math.floor (Math.random() * 10);
   // var random col = random number
   var column = Math.floor (Math.random() * 10);
   //check the baord spot to make it's zero
   if (board[row][column] == 0 &&
       (column == 0 || board[row][column + 1] == 0) &&
       (column == 0 || board[row][column + 2] == 0) &&
       (shipCounter < 4) && (placeShipCounter < 3)
    ) {
      board[row][column] = ship;
      board[row][column + 1] = ship;
      board[row][column + 2] = ship;
      shipCounter = shipCounter + 1;
      placeShipCounter = placeShipCounter + 1;
      }
  }
};
addTwoShip();

var placeShipCounter = 0;
function addTwoShip(){
 var shipCounter = 0;
  while (placeShipCounter < 2) {
   // var random row = random number
   var row = Math.floor (Math.random() * 10);
   // var random col = random number
   var column = Math.floor (Math.random() * 10);
   //check the baord spot to make it's zero
   if (board[row][column] == 0 &&
       (column == 0 || board[row][column + 1] == 0) &&
       (shipCounter < 4) && (placeShipCounter < 3)
    ) {
      board[row][column] = ship;
      board[row][column + 1] = ship;
      shipCounter = shipCounter + 1;
      placeShipCounter = placeShipCounter + 1;
      }
  }
};
addTwoShip();


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


// below is the rest of the code to create a one square ship
 //     (column == 9 || board[row][column + 1] == 0) &&
 //     (row == 0 || board[row - 1][column] == 0) &&
 //     (row == 9 || board[row + 1][column] == 0)
 // ) {
 //   board[row][column] = ship;
 //   shipCounter = shipCounter + 1;
 // }
 // loop through board, check if each place has ship
 //commented out the while loop, it was giving us an extra 1 (ship).
  // while (board[row][column] == 1) {
  //   row = Math.floor (Math.random() * 10);
  //   column = Math.floor (Math.random() * 10);
  // }
// // }
//


//attempting function to combine 2 ships of 4 and one ship of 5:
//below this
//  var placeShipCounter = 0;
//
//  var shipCounter = 0;
// function placeShips(){
//
//  while (placeShipCounter < 13) {
//    // var random row = random number
//    var row = Math.floor (Math.random() * 10);
//    // var random col = random number
//    var column = Math.floor (Math.random() * 10);
//    //check the baord spot to make it's zero
//    if (board[row][column] == 0 &&
//        (column == 0 || board[row][column + 1] == 0) &&
//        (column == 0 || board[row][column + 2] == 0) &&
//        (column == 0 || board[row][column + 3] == 0) &&
//        (shipCounter < 4) && (placeShipCounter < 3)
//     ) {
//       board[row][column] = ship;
//       board[row][column + 1] = ship;
//       board[row][column + 2] = ship;
//       board[row][column + 3] = ship;
//       shipCounter = shipCounter + 1;
//       $(this).addClass("hitShip");
//       // TODO make each ship change color when you click on just one
//       // placeShipCounter = placeShipCounter + 1;
//       }
//       else if (board[row][column] == 0 &&
//           (column == 0 || board[row][column + 1] == 0) &&
//           (column == 0 || board[row][column + 2] == 0) &&
//           (column == 0 || board[row][column + 3] == 0) &&
//           (column == 0 || board[row][column + 4] == 0) &&
//           (shipCounter < 4)
//        ) {
//          board[row][column] = ship;
//          board[row][column + 1] = ship;
//          board[row][column + 2] = ship;
//          board[row][column + 3] = ship;
//          board[row][column + 4] = ship;
//          shipCounter = shipCounter + 1;
//          $(this).addClass("hitShip");
//       }
//       // placeShipCounter = placeShipCounter + 1;
//   }
// }
