function getLiveNeighbors(originX, originY, cell) {
    let xAxis = [1, 1, 0, -1, -1, -1, 0, 1];
    let yAxis = [0, 1, 1, 1, 0, -1, -1, -1];
    let liveCount = 0;

    for (let i = 0; i < 8 ; i++) {
        try {
            if (cell[originX + xAxis[i]][originY + yAxis[i]]) {
                liveCount++;
            } else {
                continue;
            }
        } catch (error) {}
    }
    return liveCount;
}

function gameOfLife(cell, row, col) {
    let nextGenArr = new Array(row);
    let countLive = 0;
    for (let i = 0 ; i < row ; i++) {
        nextGenArr[i] = new Array(col).fill(0);
    }

    for(let i = 0 ; i < row ; i++) {
        for(let j = 0 ; j < col ; j++) {
            countLive = getLiveNeighbors(i, j, cell);

            // Operations
            if (cell[i][j] === 1 && (countLive === 2 || countLive === 3)) {
                nextGenArr[i][j] = 1;
            }
            else if (cell[i][j] === 1 && countLive > 3) {
                nextGenArr[i][j] = 0;
            }
            else if (cell[i][j] === 1 && countLive < 2) {
                nextGenArr[i][j] = 0;
            }
            else if (cell[i][j] === 0 && countLive === 3) {
                nextGenArr[i][j] = 1;
            }
        }   
    }
    console.log(nextGenArr);
    console.log('-------------------');
    return nextGenArr;
}

let row = 5;
let col = 5;
let generationCount = 2;
let arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
]
// let arr = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]
// let arr = [ 
//     [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
// ]

for (let i = 0 ; i < generationCount ; i++) {
    arr = gameOfLife(arr, row, col);
}
