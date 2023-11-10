const [DAY,NIGHT,TOP] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>Number(x))
console.log(Math.ceil((TOP - NIGHT)/(DAY - NIGHT)))
// N : Date 
// Height(N) = DAY * N - (NIGHT * (N-1))
//           = N(DAY - NIGHT) + NIGHT
   
// 목표달성 조건 : N을 찾아야함, 나머지는 상수니까 N에 대해서 정리
// TOP <= Height(N)
// TOP <= N(DAY - NIGHT) + NIGHT
// (TOP - NIGHT) / (DAY - NIGHT) <= N
// 좌항을 floor 하거나 ceil 중에 어떤걸 해야하는지 직감이 안와서
// 그냥 ceil 하니까 정답이어서 해버림