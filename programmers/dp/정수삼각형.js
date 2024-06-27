function solution(triangle) {
    
    // bottom-up해서 찾음
    // 배열의 크기 - 2 부터 시작해야 함
    for(let i = triangle.length -2; i>=0; i--){
        for(let j = 0; j < triangle[i].length; j++){
            triangle[i][j] += Math.max(triangle[i+1][j],triangle[i+1][j+1]);
        }
    }
    return triangle[0][0];
}
