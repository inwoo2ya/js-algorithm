/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) { 이거 하면 해결되긴하는데 답이 아닌 듯
//     return nums.indexOf(target)
// };
//이렇게 하면 안되나....?
var search = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}

//log n은 이진 탐색 사용 아마.. 이거 사용해서 풀라는 것 같음...
//이진 탐색이 끝과 시작 두 개로 나눠서 계산하는 건가...?
// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length-1;
//     if(end === 0 && nums[end] === target){
//         return 0;
//     }
//     while (start <= end){
//         if(nums[start] === target){
//             return start;
//         }
//         if(nums[end] === target){
//             return end;
//         }
//         start += 1;
//         end -= 1; 
//     }
//     return -1;
// }

