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
const [N,M] = input.shift().split(' ').map(Number)

const library = input.slice(0,N)
const problems = input.slice(N)

for(let i=0;i<M;i++){
    const problem = problems.shift()

    // problem이 이름으로 주어진 경우
    if(isNaN(Number(problem))){
        for(let i=0;i<N;i++){
            if(problem === library[i]){
                console.log(i+1)
                break
            }
        }
    }
    // problem이 숫자로 주어진 경우
    else {
        console.log(library[Number(problem) - 1])
    }
}