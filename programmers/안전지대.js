function solution(board) {
    var answer = 0;
    const length = board[0].length;
    const dangerxy =[ [-1,0],[0,-1],[-1,-1],[1,-1],[1,1],[-1,1],[1,0],[0,1]]
    for(let i =0; i<length; i++){
        for(let j =0; j<length;j++){
           if( board[i][j] === 1){
               dangerxy.map((v)=>{
                   let [x,y]= v;
                   [x,y] = [i+x,j+y];          
                   if(x >= 0 && y >= 0 && x < length && y < length && board[x][y] ===0)//x,y가 length보다 크지 않고, 0보다 크거나 같아야함 그리고 board[x][y]가 0 이어야함. 
                       board[x][y] = -1; 
               });
           }
        }
    }
    // board에 0 갯수 세기
    board.forEach((v)=>( answer += v.filter(val=>val === 0).length))
    return answer
}
