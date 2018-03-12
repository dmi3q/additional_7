function solve(matrix) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] > 0 && matrix[i][j] < 10) continue;
            for (let k = 1; k <= 9; k++) {
                if (checkPick(matrix, i, j, k)) {
                    matrix[i][j] = k;
                    if (solve(matrix)) return true;
                    matrix[i][j] = 0;
                }
            }
            return false;
        }
    }
    return true;
}

function checkPick(matrix, i, j, k) {
    for (let a = 0; a < 9; a++) {
        if (matrix[a][j] == k) return false;
    }

    for (let a = 0; a < 9; a++) {
        if (matrix[i][a] == k) return false;
    }

    let ySquarePos = Math.floor(i / 3) * 3;
    let xSquarePos = Math.floor(j / 3) * 3;
    for (let a = 0; a < 3; a++)
        for (let b = 0; b < 3; b++)
            if (matrix[a + ySquarePos][b + xSquarePos] == k) return false;

    return true;
}

module.exports = function solveSudoku(matrix) {
    solve(matrix);
    return matrix;
}
