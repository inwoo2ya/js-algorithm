/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let answer = false;
    let flower = n;

    if(flowerbed.length === 1 && !flowerbed[0] ){ 
        //flowerbed가 1밖에 없고 거기가 또 비어있는 상황일 경우
        flower -= 1;
    }
    for(let i = 0; i<flowerbed.length - 1; i++){
        // flowerbed.length -2 = i-1 
        // console.log(flower , flowerbed[i], i, flowerbed.length)
        if(flower === 0){
            break;
        }
        else if (!flowerbed[i] && (i === 0 ||flowerbed.length-2 === i )){
            //flowerbed[i]가 비어 있고, 첫번째인 경우 혹은 마지막 번째인 경우
            if(!flowerbed[i+1]){
                flower -= 1;
                flowerbed[i] = 1;
            }
        }else if(!flowerbed[i]){
            // i가 비어있는 경우
            if(!flowerbed[i+1] && !flowerbed[i-1]){
                //앞에랑 뒤에를 확인하여 비어있는 경우
                flower -= 1;
                flowerbed[i] = 1;
            }
        }
    }

    // console.log(flowerbed)

    return flower && n !== 0 ? false:true ;
};
