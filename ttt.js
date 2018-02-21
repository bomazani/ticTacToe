
// Who's turn is it?
// Which cells has each player selected?

var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

var winMessage = "Winner!";
var drawMessage = "Draw!";
var moveCount = 0;

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

//   console.log(winningCombinations.length)
//   console.log(winningCombinations[i])


handleClick = function (event) {
    var cell = event.target;

    if (cell.innerHTML.length > 0) { 
        alert("Select a different square");
    }
    cell.innerHTML = currentPlayer;
    moveCount = moveCount + 1;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(Number(cell.id));

    const alertWin = function() {
        alert(winMessage);
    }

    if (checkWin(playerSelections)) {
        window.setTimeout(alertWin, 300);
    } else {
        if(moveCount == 9){
            alert(drawMessage);
        }  
    }


    // Swap players

    currentPlayer = nextPlayer;

}

function checkWin(playerSelections) {
    if (playerSelections.length < 3) {
        return false;
    }

    let count = 0;
    for (let k = 0; k < winningCombinations.length; k++) {
        let aWinningCombo = winningCombinations[k];

        for (let j = 0; j < playerSelections.length; j++) {
            let aSelection = playerSelections[j];

            if (aWinningCombo.includes(aSelection)) {
                count = count + 1;
            }
        }

        if (count === aWinningCombo.length) {
            return true;
        }
        count = 0;
    }

    return false;
}


var cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}