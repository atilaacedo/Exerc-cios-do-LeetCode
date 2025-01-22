/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
    const rows = isWater.length;
    const cols = isWater[0].length;

    const cellHeights = Array.from({ length: rows }, () => Array(cols).fill(-1));

    const queue = [];
    let queueStart = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (isWater[row][col] === 1) {
                cellHeights[row][col] = 0;
                queue.push([row, col]);
            }
        }
    }

    const dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]


    while (queueStart < queue.length) {
        const [x, y] = queue[queueStart++];
        for(const [dx, dy] of dir){
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && cellHeights[nx][ny] === -1){
                cellHeights[nx][ny] = cellHeights[x][y] + 1;
                queue.push([nx, ny]);   
            }
        }
    }


    return cellHeights;

};