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

console.log(availableMoves([0, 0], board));

let availableNodes = [initialSquare];
const visited = [];

function breadthFirstSearch({currNode, parent} = {currNode: initialSquare, parent: null}) {
    if (currNode === finalSquare) {
        console.log("The path has been found.");
        console.log(getShortestPath(visited, currNode));
        return;
    }

    if (availableNodes.length === 0) {
        console.log(`The path from ${initialSquare} to ${finalSquare} is impossible.`);
        return;
    }

    visited.push({currNode, parent});

    const newNodes = availableMoves(currNode, board);
    board = board.filter(item => !newNodes.includes(item));
    availableNodes = [...availableNodes, ...newNodes];

    const newParent = currNode;
    const newCurrNode = availableNodes.shift();

    breadthFirstSearch({currNode: newCurrNode, parent: newParent});
}

function getShortestPath(visited, currNode) {
    const path = [];
    while (currNode !== null) {
        visited.unshift(currNode);
        currNode = visited.filter(item => item.currNode === currNode)[0].parent;
    }

    return path;
}

breadthFirstSearch();