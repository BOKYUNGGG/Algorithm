const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

// 'line' 이벤트 리스너 등록
rl.on('line', (line) => {
    lines.push(line); // 입력된 각 줄을 배열에 저장
    if(lines.length == 2) rl.close()
});

// 'close' 이벤트 리스너 등록
rl.on('close', () => {
    solution(lines)
    rl.close(); // 인터페이스 닫기
    process.exit()
});

function solution(input){
    const string = input.shift()
    const i = Number(input.shift())
    console.log(string[i-1])
}