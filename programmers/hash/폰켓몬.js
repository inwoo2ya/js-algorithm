function solution(nums) {
    const selectCount = Math.floor(nums.length/2); // 폰켓몬을 선택할 수 있는 값
    const unDuplicate = [...new Set(nums)] // 같은 종류의 폰켓몬을 제거한 배열
    // 다양한 폰켓몬이 있어도 n/2 개밖에 못가져가니, 
    // 같은 종류의 폰켓몬을 제거한 배열의 크기와 폰켓몬을 선택할 수 있는 값과 비교하여 unDuplicate.length <= selectCount
    // 같은 종류의 폰켓몬을 제거한 배열의 크기가 폰켓몬을 선택할 수 있는 값보다 작다면
    // 같은 종류의 폰켓몬을 제거한 배열의 크기 => unDuplicate
    // 그게 아니라면, 폰켓몬을 선택할 수 있는 값 => selectCount
    var answer = unDuplicate.length <= selectCount ? [...unDuplicate].length:selectCount;
    
    return answer;
}
