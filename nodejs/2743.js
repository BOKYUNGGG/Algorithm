const readline = require('readline')
const rl = readline.createInterface({input : process.stdin,  output : process.stdout})


rl.on('line', (answer)=>{
    console.log(answer.length)
    rl.close()
}).on('close',()=>{
    process.exit()
})