/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//1차 도전 실패 root보다 작고 root.left보다 작은 리프노드가 오른쪽 노드에 있는데 그걸 못걸러냄

// const checkLeftBST = (node,k) =>{//왼쪽 체크
//     if(node === null){
//         return true;
//     }else if(node.val >= k ){
//         return false;
//     }else{
//         if(checkLeftBST(node.left,node.val) && checkRightBST(node.right,node.val)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// const checkRightBST = (node,k)=>{//오른쪽 체크
//     console.log(node, k)
//     if(node === null){
        
//         return true;
//     }else if(node.val <= k){
//         // console.log(node.val <= k, node.val < root)
    
//         return false;
//     }else{
//         if(checkLeftBST(node.left,node.val) && checkRightBST(node.right,node.val)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// 최대(left일 때, root.val) 최소(right일 때, root.val)를 가지고 비교해버려야할 듯 싶음

const checkBST=(node,min,max)=>{
    if(node === null)return true;
    else if((min !== null && node.val <= min) ||( max !== null && node.val >= max))return false;
    return checkBST(node.left,min,node.val) && checkBST(node.right,node.val,max);
}
var isValidBST = function(root) { 
    return checkBST(root,null,null) //초기에 max,min에 값이 없으니 null 넣어주자 0넣어주니까 걸러버림
};
