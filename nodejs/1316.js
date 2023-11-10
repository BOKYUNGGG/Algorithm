// const input = [4, 'aba', 'abab', 'abcabc', 'a']
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const isInLibrary = (library, book) =>{
    return library[book]
}

const isGroupWord = (word) =>{
    const library = {
        // a : true
        // b : true
        // ...
    }
    // 임시책
    let beforeBook = ''
    for(let i=0;i<word.length;i++){
        // 1. copy the word
        let nowBook = word[i]
        // 2. 바로 이전과 같은 책이라면 다음 책으로 건너뛰기
        if(beforeBook === nowBook) continue
        // 3. 다른 책이 나왔는데, 라이브러리에 이미 존재한다면 상황종료
        if(beforeBook !== nowBook && isInLibrary(library, word[i])){
            return false    
        }
        // 4. 다른 책이 나왔는데 라이브러리에 존재하지 않는다면 
        else {
            // 임시책을 현재책으로 바꾼 뒤, 라이브러리에 추가
            beforeBook = nowBook
            library[word[i]] = true
        }   
    }
    // 모든 검사를 무사히 통과했다면 표시남기기
    return true
}

let answer = 0
for(let i=0;i<Number(input[0]);i++){
    if(isGroupWord(input[i+1])){
        answer++
    }

}
console.log(answer)