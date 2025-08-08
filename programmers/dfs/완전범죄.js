function solution(info, n, m) {
    const keyMemo = new Map();
    
    const dfs = (a,b,i) => {
        if(a >= n || b >= m){
            return Infinity;
        }
        
        if(i === info.length){
          return a;
        }
        const key = `${a},${b},${i}`;
        
        if (keyMemo.has(key)) return keyMemo.get(key);
        
        const caseA = dfs(a + info[i][0],b,i+1);
        const caseB = dfs(a,b + info[i][1],i+1);
      
        const answer = Math.min(dfs(a + info[i][0],b,i+1),dfs(a,b + info[i][1],i+1));
        keyMemo.set(key,answer);
        return answer;  
    }
    const response = dfs(0,0,0);
    return response === Infinity ? -1 : response;
}
