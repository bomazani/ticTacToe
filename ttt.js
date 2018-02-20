
// Who's turn is it?
// Which cells has each player selected?

var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

var banner = "Winner!";

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
    console.log(playerXSelections.sort());
    console.log(playerOSelections.sort());
 
  
    // Swap players
    currentPlayer = nextPlayer;
  
  }
// Determine if there is a winner //

    for (i=0; i<winningCombinations.length; i++){
        if (playerXSelections === winningCombinations[i]);
            banner = "Winner!!!"
            console.log(banner);
        } 
            // banner = "Next player's turn."
            // console.log(banner);
        
    

  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }