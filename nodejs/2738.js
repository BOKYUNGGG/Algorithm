const input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
<<<<<<< HEAD
5 5 100`
=======
5 5 100`.split('\n')


const [N,M]= input.shift().split(' ').map(x=>Number(x))

let arr1 = []
let arr2 = []
for(let i=0;i<N;i++){
    const columns = input.shift().split(' ').map(x=>Number(x))
    arr1.push(columns)
}
for(let i=0;i<N;i++){
    const columns = input.shift().split(' ').map(x=>Number(x))
    arr2.push(columns)
}


for(let i=0;i<N;i++){
    let row = []
    for(let j=0;j<M;j++){
        row.push(arr1[i][j] + arr2[i][j])
    }
    console.log(row.join(' '))
}
>>>>>>> refs/remotes/origin/main
