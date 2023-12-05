// const [N, F] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const [N, F] = [1000, 3]
function solution(n,f,answer){
    let number = ((n/100) | 0) * 100

    while (true) {
        if (number % f == 0) {
          answer = number;
          break;
        } else {
          number += 1;
        }
      }
      console.log(("" + answer).slice(-2));
}
solution(N, F, 0)