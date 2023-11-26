// const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const T = 30
for(let k=1;k<=T;k++){
    let N = k
    const windows = Array.from({length:N}).fill(false)
    
    for(let i=1; i<=N; i++){
        const size = i
        for(let j=size-1;j<N;j+=size){
            windows[j] = !windows[j]
        }
    }
    console.log(windows.filter(Boolean).length,windows.join(' '))
}

// 111
// 22222
// 3333333
// 

// 1 : 1
// 1
// 1

// 2 : 1
// 1 2
//   2
// 1

// 3 : 1
// 1 2 3
//   2
//     3
// 1

// 4 : 1 
// 1 2 3 4
//   2   4
//     3
//       4
// 1

// 5 : 1
// 1 2 3 4 5
//   2   4
//     3
//       4
//         5
// 1          

// 6 : 2
// 1 2 3 4 5 6
//   2   4   6
//     3     6
//       4 
//         5
//           6
// 1     4  

// 7 : 2
// 1 2 3 4 5 6 7
//   2   4   6 
//     3     6 
//       4
//         5
//           6
//             7
// 1     4   

// 8 : 2
// 1 2 3 4 5 6 7 8
//   2   4   6   8
//     3     6 
//       4       8
//         5 
//           6
//             7
//               8
// 1    4   

// 9 : 3
// 1 2 3 4 5 6 7 8 9
//   2   4   6   8
//     3     6     9
//       4       8  
//         5      
//           6
//             7
//               8
//                 9
// 1     4         9

// 10 : 3
// 1 2 3 4 5 6 7 8 9 10
//   2   4   6   8   10
//     3     6     9 
//       4       8  
//         5         10
//           6 
//             7
//               8
//                 9
//                   10
// 1     4         9
