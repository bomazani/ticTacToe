
// Who's turn is it?
// Which cells has each player selected?

var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

// Winning combinations
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

 // add an event listener called handleClick
//  handleClick = function(event) {
//     var cell = event.target
//     console.log(cell.id);
//   }
  
//   var cells = document.querySelectorAll("td");
  
//   for(var i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', handleClick)
//   }
  
  // update handleClick
  // print the current player’s character (X or O) on the board, and swap players.
  // store the new selection in the appropriate player's selections array.
  handleClick = function(event) {
    var cell = event.target;
  
    cell.innerHTML = currentPlayer;
  
    if(currentPlayer === "X" ) {
      playerSelections = playerXSelections;
      nextPlayer = "O";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
    }
  
    playerSelections.push(parseInt(cell.id));
    // console.log(playerXSelections);
    console.log(playerOSelections)
  
    // Swap players
    currentPlayer = nextPlayer;
  }

  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }