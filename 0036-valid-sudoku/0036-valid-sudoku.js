/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = {};
    const columns = {};
    const cells = {};
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c];
            if (value !== ".") {
                const cellIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                
                if (rows[`${r} - ${value}`] ||
                    columns[`${c} - ${value}`] ||
                    cells[`${cellIndex} - ${value}`]
                   ) {
                    return false
                }
                rows[`${r} - ${value}`] = true;
                columns[`${c} - ${value}`] = true;
                cells[`${cellIndex} - ${value}`] = true;
            } 
        }
    }
    
    return true;
};