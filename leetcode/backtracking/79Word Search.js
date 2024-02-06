/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


var exist = function(board, word) {
    let result = false;

const dfs = (i,j,r) =>{
    // console.log(i,j,r)
    if(i < 0 || j < 0 || i>=board.length || j >=board[0].length){return;} //범위 벗어나면 걍 return
    if(word[r] === board[i][j]){ // word랑 현재 board[i][j]랑 맞는지 비교
    if(r === word.length-1){  result = true; return;} // 그리고 현재 크기랑 word 최대 -1 랑 같으면 result= true
        // console.log(board[i][j],result)
        board[i][j] = null; //찾았으니까 비워 다시 돌아가기 방지
        //우선 위 아래 확인 해야함 i+1, i-1, j+1, j-1
        dfs(i-1,j,r+1); 
        dfs(i+1,j,r+1);
        dfs(i,j-1,r+1);
        dfs(i,j+1,r+1);
        board[i][j] = word[r]; // 복귀
    }
    
}
//우선 첫 word를 찾자
    for(let i = 0; i<board.length; i++){
        for(let j =0; j<board[0].length; j++){
            if(board[i][j] == word[0]){
                dfs(i,j,0); 
                if(result){ // 이거 안하면 고냥 dfs끝나자마자 바로 return 해버림
                    return result;
                }
            }
        }
    }
    return result;
    
};
