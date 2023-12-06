// const [N, F] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const [N, F] = [23442, 75]
function solution(n,f,answer){
    let number = n

    while (true) {
        if (number % f == 0) {
          answer = number;
          break;
        } else {
          number += 1;
        }
      }
      console.log((answer.toString()).slice(-2));
}
solution(N, F, 0)