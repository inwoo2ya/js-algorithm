/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let result = [ new Array(n).fill(1)] //가로는 초반에 설정
    // 로봇은 오른쪽 , 아래만 갈 수 있음
    // fin으로가는 모든 경우의 수 result
    // 오른쪽, 아래밖에 못가니까 각 사이드(grid[0][y],grid[x][0] )는 경우의 수 1 밖에 없음

    for(let i = 1; i<m; i++){ //세로
        result.push([1]);
        for(let j = 1; j<n; j++){ //이동 전 값(x-1, y-1) 모든 경우의 수를 현재이동된 값에 더하면 될 현재 위치에 이동할 수 있는 경우의 수
            result[i][j] = result[i][j-1] + result[i-1][j];
        }
    }
    return result[m-1][n-1];
};
