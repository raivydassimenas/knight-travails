const board = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        board.push([i, j]);
    }
}

console.log(board);

const initialSquare = [parseInt(Math.random() * 8), parseInt(Math.random() * 8)];
const finalSquare = [parseInt(Math.random() * 8), parseInt(Math.random() * 8)];

const shortestPath = [initialSquare];

function availableMoves(currSquare, board) {
    const possibilities = [
        [currSquare - 2, currSquare - 1],
        [currSquare - 1, currSquare - 2],
        [currSquare + 1, currSquare - 2],
        [currSquare + 2, currSquare - 1],
        [currSquare + 2, currSquare + 1],
        [currSquare + 1, currSquare + 2],
        [currSquare - 1, currSquare + 2],
        [currSquare - 2, currSquare + 1]
    ];

    return possibilities.filter(item => board.includes(item));
}