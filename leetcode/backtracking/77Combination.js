/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

//백트래킹 
var combine = function(n, k) {
    let result = [];
    // index를 들고 가서 입장
     const find = (m,arr)=>{
     if(arr.length === k){ // k하고 같으면 바로 result에 넣어주고 탈출
       return result.push([...arr]);
     }
        
    for(let i = m; i<=n; i++){
        arr.push(i);
        // console.log('입장',i,arr,result)
        find(i+1,arr); // i를 1씩 증가시키면서
        // console.log('퇴장',i,arr,result)
        arr.pop();
    }
 }
    find(1,[])
    return result
};
