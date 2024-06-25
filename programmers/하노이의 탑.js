function solution(n) {
    var answer = [];
    const hanoi = (n,from,to,mid) => {
        if(n === 1){
            answer.push([from,to])
        }
        else{
            hanoi(n-1,from,mid,to); 
            answer.push([from,to]);
            hanoi(n-1,mid,to,from); 
        }
    }
    
    hanoi(n,1,3,2);
    return answer;
}
