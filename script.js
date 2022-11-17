
const gameModule = (function () {
    let gameBoard = []
    let turnCounter = 0
    const regExNumber = /[0-9]/

    let player1 = {
        symbol: 'x'
    }

    let player2 = {
        symbol: 'o'
    }


    const turnIs = () => {
        if (turnCounter % 2 == 0) {
            turnCounter++
            return player1.symbol
        } else {
            turnCounter++
            return player2.symbol
        }
    }

    const checkWinner = () => {

    }



    const playStep = (clickedCell) => {
        if (clickedCell.innerHTML != '') {
            return
        } else {
            let cellNumber = clickedCell.id.match(regExNumber)
            gameBoard[cellNumber[0]] = turnIs()
            clickedCell.innerHTML = gameBoard[cellNumber[0]]
            checkWinner()

        }
    }

    const renderGameBoard = () => {
        const boardDiv = document.querySelector('.board')

        for (i = 0; i < 9; i++) {
            const cell = document.createElement('div')
            cell.addEventListener('click', () => {
                playStep(cell)
            })
            cell.className = 'cells'
            cell.id = `cell${i + 1}`
            boardDiv.appendChild(cell)
        }

    }

    return { renderGameBoard }
})()

gameModule.renderGameBoard()