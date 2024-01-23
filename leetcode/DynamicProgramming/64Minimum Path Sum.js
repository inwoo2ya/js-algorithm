/**
 * @param {number[][]} grid
 * @return {number}
 */

 /** 엄... 그냥 쌓아가는 형식으로 푼 문제 */
var minPathSum = function(grid) { 
    const m = grid.length; //세로 길이
    const n = grid[0].length; //가로 길이
    if(grid.length === 0){ //grid가 없으면 그냥 0 리턴
        return 0;
    }

    for(let i = 0; i<m; i++){
        for (let j = 0; j<n; j++){
            // console.log(i,j,grid)
            if(i === 0 && j === 0) continue; // 쿨하게 지나치고
            else if(i === 0 && j !== 0){ // 세로가 0이고, 가로가 0이 아닐 때  
                grid[i][j] = grid[i][j] + grid[i][j-1];
            }else if(i !== 0 && j === 0){ // 가로가 0이고, 세로가 0이 아닐 때
                grid[i][j] = grid[i][j] + grid[i-1][j];
            }else if(i !== 0 && j !== 0){ // 가로가 0이아니고 세로가 0이 아닐때
             grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]
             }
            
        }
    }
   
  return grid[m-1][n-1]
};
