// 내 코드
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let max = Number(input[0]);
// let answer = '';

// for (let i = 1; i <= max; i++) {
//     let num = input[i].split(' ');
//     answer += Number(num[0]) + Number(num[1]) + '\n';
// }

// console.log(answer);

const readline = require('readline')
const {promisify} = require('util')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})
const question = promisify(rl.question).bind(rl)

async function main(){
    const T = Number(await question(''))
    for(let i = 0;  i<T; i++){
        const input = await question('')
        const [A, B] = input.split(' ')
        console.log(Number(A)+Number(B))
    }
    rl.close()
}
main()