function solution(k, score) {
    let arr = [];
    var answer = [];
    score.forEach((v,i)=>{
        console.log(k,i)
        if(i<k){ //i가 k보다 커지거나 같아질때 까지 넣어버려
            arr.push(v);
        }
        if(v > Math.min(...arr)){ //score[i] 가 배열에 든 최솟값보다 클때 
            arr.pop()
            arr.push(v);
            arr.sort((a,b)=>(b-a)); //내림차순으로
           
        }
            answer.push(arr[k-1])
    })
    // console.log(answer, arr)
    
    return answer;
}
