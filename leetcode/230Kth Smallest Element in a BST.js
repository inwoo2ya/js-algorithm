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
 * @param {number} k
 * @return {number}
 */
    // const countNode = (node,k) =>{
        //노드의 카운트를 세자
        // let count = 0;
        // //  console.log(node.left,node.right, node.val);
        // if(node !== null) 
        //     if(node.left === null || node.right === null){
        //         return 1; 
        //         }else{
        //             count = countNode(node.left) + countNode(node.right)
        //         }
        //     return count;
    //     console.log(node.val, k )
    //    if(node.left === null && node.right === null){
    //        if(node.val === k){
    //          return 0;
    //          }
    //         return 1;
    //    }else{
    //        if(node.left === null){
    //            return countNode(node.right,k);
    //        }else if(node.right === null){
    //            return countNode(node.left,k);
    //        }
    //        return 1 + countNode(node.left,k) + countNode(node.right,k);//들어온 자기자신 + 
    //    }
    
        
    // }
    // 재귀함수
    const getNode = (node) =>{
        let arr = [];
        if(node === null){ //node가 null이면 [] 값 return
            return [];
        } else if(node.left === null && node.right === null){ 
            // 리프노드일경우 그 노드 값만 return
            arr.push(node.val);
            // console.log(node.val,arr)
        }else if(node.left === null){
            // node.left가 null이면 부모노드랑 오른쪽 자식 노드 값들
                arr.push(node.val,...getNode(node.right));
                // console.log(node.val,arr);
            }else if(node.right === null){
                //node.right가 null이면 부모노드랑 왼쪽 자식 노드값들 return
                arr.push(node.val,...getNode(node.left));
                // console.log(node.val,arr);
            }else{ // 자식노드가 둘다 있으면 부모노드랑 자식노드 값들 return
               arr.push(node.val,...getNode(node.left),...getNode(node.right));
            //    console.log(node.val,arr);
               
            }
        return arr;
    }

    //아 문제 이제 이해함 오름차순으로 정렬했을 때, k번째 수를 가져와라 
var kthSmallest = function(root, k) {
    let arr = [];
    // root[0] = 루트노드
    //여기에서 계속 돌려야할 듯
    // console.log(k, root)
    // if(root.val === k){
    //     if(root.left ===null && root.right ===null){
    //         return 1;
    //     }
    //    return countNode(root,k)
    // }else if(root.val > k){
    //     return kthSmallest(root.left,k);
    // }else if(root.val < k){
    //     return kthSmallest(root.right,k);
    // }
    // if(root.val === k)
    //     return root.val;

    // arr에 저장해서 오름차순으로 정렬 시킨 다음에 k번째 값 return
    arr.push(...getNode(root))
    console.log(arr.sort((a,b)=>a-b));
    
    return arr.sort((a,b)=>a-b)[k-1];
    
    }
