const input = [6,12,28,-1]

function get(number){
    let answer = []

    for(let i=1;i<number;i++){
        if(number % i === 0) answer.push(i)
    }

    return answer
}
function sum(array){
    return array.reduce((accumulator, element)=> accumulator + element)
}
while(true){
    const T = input.shift()
    if(T === -1) break
    const result = get(T)
    if(sum(result) === T){
        console.log(`${T} = ${result.join(' + ')}`)
    }
    else {
        console.log(`${T} is NOT perfect.`) 
    }
}