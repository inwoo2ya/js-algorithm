function solution(sides) {
    var answer = 0;
    let max = Math.max(sides[0],sides[1]);
    let min = Math.min(sides[0],sides[1]);
    
    for (let i = 1; i<max+min; i++){ 
        if(i < max && min+i > max){
            answer +=1;
        }else if(i>= max && i < max+min ){
            answer +=1;
        }
        
    }
   
    
    return answer;
}
