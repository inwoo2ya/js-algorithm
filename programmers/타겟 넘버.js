function solution(numbers, target) {
    var answer = 0;
    // 재귀함수 사용 ,dfs
    const dfs = (idx,sum) =>{
        if(idx === numbers.length){ // 배열의 끝에 도착했을 때,
            if(sum === target){ // 합한 수와 target이 같다면
                answer++;
            }
            return;
        }
        dfs(idx+1, sum + numbers[idx]); // 더했을 때 경우
        dfs(idx+1, sum - numbers[idx]); // 뺐을 때 경우 다 구하기
    }
    dfs(0,0)
    return answer;
}
