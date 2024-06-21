function solution(babbling) {
    var answer = 0;
    const words = ['aya','ye','woo','ma'];
    babbling.map((value)=>{
        let i = 0;
        let selectWord = value
        words.forEach((v)=>{
            if(selectWord.includes(v)){
              selectWord = selectWord.replace(v,'-'); // 단어가 있으면 '-'로 변경
            }
        });
       
        if(i = /^[-]+$/.test(selectWord)){
            answer+=1
        }; //'-' 만 있는 거 확인
        
    })
  
    return answer;
}


