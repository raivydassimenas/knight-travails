let board = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        board.push([i, j]);
    }
}

const initialSquare = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
const finalSquare = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];

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

function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

let availableNodes = [initialSquare];
const visited = new Set([JSON.stringify(initialSquare)]);

console.log(`Initial square: [${initialSquare}], final square:  [${finalSquare}]`);

function breadthFirstSearch(initialSquare, finalSquare, availableNodes, visited) {
    const previousNodes = {};

    while (availableNodes.length > 0) {
        const currentSquare = availableNodes.shift();

        if (arraysAreEqual(currentSquare, finalSquare)) {
            console.log("Path has been found");
            console.log(getShortestPath(previousNodes, currentSquare, initialSquare));
            return;
        }

        const newSquares = availableMoves(currentSquare, board);

        for (let i = 0; i <  newSquares.length; i++) {
            if (!visited.has(JSON.stringify(newSquares[i]))) {
                visited.add(JSON.stringify(newSquares[i]));
                availableNodes.push(newSquares[i]);
                previousNodes[JSON.stringify(newSquares[i])] = currentSquare;
            }
        }
    }
}

function getShortestPath(previousNodes, currentSquare, initialSquare) {
    path = [];
    while (!arraysAreEqual(currentSquare, initialSquare)) {
        path.unshift(currentSquare);
        currentSquare = previousNodes[JSON.stringify(currentSquare)];
    }
    path.unshift(initialSquare);
    return path;
}

breadthFirstSearch(initialSquare,
    finalSquare,
    availableNodes,
    visited);