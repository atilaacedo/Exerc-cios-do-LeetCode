/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let servers = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (grid[row][col] === 1) {
                let canCommunicate = false;
                
                for (let otherCol = 0; otherCol < cols; ++otherCol) {
                    if (otherCol != col && grid[row][otherCol] == 1) {
                        canCommunicate = true;
                        break;
                    }
                }

                if(canCommunicate)
                    servers++;
                else{

                    for (let otherRow = 0; otherRow < rows; ++otherRow) {
                        if (otherRow != row && grid[otherRow][col] == 1) {
                            canCommunicate = true;
                            break;
                        }
                    }

                    if(canCommunicate)
                        servers++;
                }

            }
        }
    }


    return servers
};