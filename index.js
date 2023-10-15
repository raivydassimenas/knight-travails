const board = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        board.push([i, j]);
    }
}

const initialSquare = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
const finalSquare = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];

const shortestPath = [initialSquare];

function availableMoves(currSquare, board) {
    const possibilities = [
        [currSquare[0] - 2, currSquare[1] - 1],
        [currSquare[0] - 1, currSquare[1] - 2],
        [currSquare[0] + 1, currSquare[1] - 2],
        [currSquare[0] + 2, currSquare[1] - 1],
        [currSquare[0] + 2, currSquare[1] + 1],
        [currSquare[0] + 1, currSquare[1] + 2],
        [currSquare[0] - 1, currSquare[1] + 2],
        [currSquare[0] - 2, currSquare[1] + 1]
    ];

    return possibilities.filter(item => board.some(square => square.every((value, index) => value === item[index])));
}

console.log(availableMoves([0, 0], board));