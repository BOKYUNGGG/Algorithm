const input = [
    '26 5',
'Bulbasaur',
'Ivysaur',
'Venusaur',
'Charmander',
'Charmeleon',
'Charizard',
'Squirtle',
'Wartortle',
'Blastoise',
'Caterpie',
'Metapod',
'Butterfree',
'Weedle',
'Kakuna',
'Beedrill',
'Pidgey',
'Pidgeotto',
'Pidgeot',
'Rattata',
'Raticate',
'Spearow',
'Fearow',
'Ekans',
'Arbok',
'Pikachu',
'Raichu',
'25',
'Raichu',
'3',
'Pidgey',
'Kakuna',
]
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


// 숫자로 된 것 : array에서 찾기
// 문자열로 된 것 : object에서 찾기

const [N,M] = input.shift().split(' ').map(Number)

const array = input.slice(0,N)
const obj = {}
array.forEach((element,index)=>{
    obj[element] = index+1
})
const problems = input.slice(N)

for(let i=0;i<M;i++){
    const problem = problems[i]

    // problem이 이름으로 주어진 경우
    if(isNaN(Number(problem))){
        console.log(obj[problem])
    }
    // problem이 숫자로 주어진 경우
    else {
        console.log(array[Number(problem) - 1])
    }
}