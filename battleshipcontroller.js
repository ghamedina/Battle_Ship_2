$(document).ready(function() {
  var clickCounter = 25;
  var hitCounter = 0;
  var miss = -1;
  var ship = 1;

  function buildTable() {
    //variable keeps track of current row
    var row = 0;
    var column = 0;
    //for loop creates 100 cell table
    for(var row = 0; row < 10; row++){
      //create a new table row with id "row<currentRow>"
      $("#board").append('<tr id="row' + row + '"</tr>');
      // create 10 <td>s for each <tr>
      for (var col = 0; col < 10; col++) {
        //makes a new table cell with id "index<i>" under "row<currentRow"
        $("#row"+ row).append("<td data-index=" + row + "-" + col + "></td>");
      }
    }
  }//closes buildTable

buildTable();

console.log(board);

//below: once I click on the game:
        $("td").on("click", function (){
          //this will start counting all the clicks
          clickCounter = clickCounter - 1;
          var boardRow = $(this).data('index')[0];
          var boardCol = $(this).data('index')[2];
              ///misses
          if (board[boardRow][boardCol] == 0 && clickCounter >= 0) {
            $(this).addClass("torpedo");
            $("#torpedoCount").text("You have " + clickCounter + " Torpedos left!");
            $(this).off("click");
          } else if (board[boardRow][boardCol] == 1 && clickCounter >= 0) {
            hitCounter = hitCounter + 1;
            $(this).addClass("hitShip");
            $("#hitsCount").text("Number of ships hit: " + " " + hitCounter);
            $(this).off("click");
          }

          function winLose() {
            for(var row = 0; row < 10; row++){
              for (var col = 0; col < 10; col++) {

                if (hitCounter == 5) {
                  $("#user_status").text("You Win!");
                  // $(this).off("click");
                } else if (clickCounter == 0 && hitCounter != 5 && board[row][col] == 1) {
                //below is when we want to check the ships without needing to click 25 times
                // if (board[row][col] == 1){
                  $('td[data-index="' + row + '-' + col + '"]').addClass("whereTheShipsWere");
                  $("#user_status").text("You Lose!");
                  $('td[data-index="' + row + '-' + col + '"]').off("click");
               }
             }
          }
        }

          winLose();

            });//close-on.click

          });//close-doc.ready
